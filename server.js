const express = require('express');
const fetch = require('node-fetch');
const axios = require('axios').default;
const apicache = require('apicache');
const csv = require('csv-parser');
const papa = require("papaparse");
const Readable = require('stream').Readable;
const cache = apicache.middleware
const app = express();
const bodyParser = require('body-parser');
const Queue = require('smart-request-balancer');
const { Server } = require("socket.io");

const orcidQueryTools = require('./orcidQueryTools.js')
let orcidAPIBase = 'https://pub.orcid.org',
    orcidAPIVersion = 'v3.0',
    orcidAPIType = 'search';

let lastRec = 0,
    query = "",
    perPage = 1000,
    currentPage = 1,
    urlQuery = "",
    sortOptions = "orcid%20asc";

const remoteAPIQueue = new Queue({
  rules: {
    common: {
      rate: 10,
      limit: 1,
      priority: 1
    },
    default: {
      rate: 10,
      limit: 1,
    },
    overall: {
      rate: 10,
      limit: 1
    },
    retryTime: 10,
    ignoreOverallOverheat: false
  }
});

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'pug');

const server = app.listen(process.env.PORT || 4000, function () {
  console.log('Example app listening on port ' + (process.env.PORT || 4000));
})
server.keepAliveTimeout = 6000 * 1000;
server.headersTimeout = 6000 * 1000;

const io = new Server(server);
const clientMessages = io.on('connection', (socket) => {
                            console.log('Received connection from user');
                            socket.emit('message', 'Connection started.');
                      });

const sendMessage = function(msg) {
  console.log("trying to sendMessage");
  console.log(clientMessages.connected);
  if (clientMessages) {
    console.log('sending message to all');
    clientMessages.emit('message', msg);
  }
};

app.get('/', cache('2 hours'), function (req, res) {
  const paramKeys = []
  for (const paramKey in req.query) {
    if (paramKey != "currentPage") {
      paramKeys.push(`${paramKey}=${req.query[paramKey]}`)
    }
    urlQuery = paramKeys.join("&")
  }
  if (typeof req.query.currentPage !== "undefined") {
    currentPage = req.query.currentPage;
  }
  if (typeof req.query.perPage !== "undefined") {
    perPage = req.query.perPage;
  }
  rows = perPage;
  start = rows * (currentPage - 1);
  query = orcidQueryTools.buildOrcidQuery(req)
  if (query.length > 0) {
    r = 0
    // ORCiD API Search query params:
    // q = query
    // start = first record to return (defaults to 1, max 10000)
    // rows = number of records to return (defaults to 100, max 1000)
    let u = orcidQueryTools.buildOrcidAPIUrl(orcidAPIBase,orcidAPIVersion,orcidAPIType)+
        '/?q='+ query +
        '&rows='+r;
    //to do local testing uncomment the next line
    //var u = "http://localhost:4000/orcid-search-response"
    let t = 'json'
    lastRec = 0;
    let n = 0;

    //set default variables
    let orcidCSV = '';
    let orcidsList = [];
    let orcidsListFetches = [];

    queueRequest(remoteAPIQueue,setOptions(u,t))
    .then(response => {
      return response.data;
    })
    .then(info => {
      //pageSize = 1000
      n = info["num-found"];
      console.log("Query found " + n + " ORCiD IDs");
      numberOfPages = Math.ceil(n/rows);
      //console.log("With a page size of ", rows, " that is ", numberOfPages, " pages.")
      let u = orcidQueryTools.buildOrcidAPIUrl(orcidAPIBase,orcidAPIVersion,'csv-search')+
               '/?q=' + query +
               '&fl=orcid,given-names,family-name,current-institution-affiliation-name,past-institution-affiliation-name,email' +
               '&start=' + start +
               '&rows=' + rows +
               '&sort=' + sortOptions;

      let t = 'csv';
      orcidsListFetches.push(
        queueRequest(remoteAPIQueue,setOptions(u,t),query+start+rows+sortOptions)
         .then(response => {
           return response.data;
         })
         .then(body => {
           orcidCSV = orcidCSV + body
         })
         .catch((error) => {
           console.error('Error:', error);
         })
      );

      Promise.all(orcidsListFetches).then(function () {
        Readable.from(orcidCSV)
         .pipe(csv())
         .on('data', (row) => {
            orcidsList.push(row);
          })
         .on('end', () => {
          res.render('body', {
            count: n,
            orcids: orcidsList,
            itemCount: n,
            perPage: perPage,
      		  currentPage: currentPage,
            numberOfPages: numberOfPages,
            urlQuery: urlQuery,
            organizationIdentifiers: req.query.organizationIdentifiers,
            error: null});
         })
      });
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  } else {
    res.render("body", {
      count: null,
      orcids: [],
      itemCount: 0,
      perPage: null,
      currentPage: null,
      numberOfPages: null,
      req: req,
      error: null});
  }
})

app.get('/download', cache('0 hours'), function(req, res) {
  sendMessage({downloading: true});
  res.type('text/csv');
  query = orcidQueryTools.buildOrcidQuery(req)
  if (query.length > 0) {
    r = 0
    // ORCiD API Search query params:
    // q = query
    // start = first record to return (defaults to 1, max 10000)
    // rows = number of records to return (defaults to 100, max 1000)
    let u = orcidQueryTools.buildOrcidAPIUrl(orcidAPIBase,orcidAPIVersion,orcidAPIType)+
            '/?q='+ query +
            '&rows=' + r +
            '&sort=' + sortOptions;
    //to do local testing uncomment the next line
    //var u = "http://localhost:4000/orcid-search-response"
    let t = 'json';
    lastRec = 0;
    let n = 0;
    let fetchList = [];
    let orcidsList = [];
    let orcidJsonPromises = [];
    let listFullOrcidRecords = [];

    queueRequest(remoteAPIQueue,setOptions(u,t))
    .then(response => {
      return response.data
    })
    .then(searchResult => {
      res.header('Content-Type', 'text/csv');
      res.attachment("id2-csv-export.csv");
      csvHeaders = papa.unparse({
                                	"fields": ["orcid","lastUpdated","name",
                                              "educations","employments","ids",
                                              "emails","workCount"]
                                });
      res.write(csvHeaders+"\r\n");
      pageSize = 1000
      n = searchResult["num-found"];
      console.log("Query found " + n + " ORCiD IDs");
      numberPages = Math.ceil(n/pageSize);
      //console.log("With a page size of ", pageSize, " that is ", numberPages, " pages.")
      for(i = 1; i-1 < numberPages; i++) {
        let u = orcidQueryTools.buildOrcidAPIUrl(orcidAPIBase,orcidAPIVersion,orcidAPIType) +
              '/?q=' + query +
              '&start=' + lastRec +
              '&rows=' + pageSize;
        let t = 'json'
        fetchList.push(
          queueRequest(remoteAPIQueue,setOptions(u,t))
          .then(response => {
            return response.data;
          })
          .then(orcidRecord => {
            orcidRecord["result"].forEach( result => {
              orcidsList.push(result["orcid-identifier"]);
            })
          })
          .catch((error) => {
            console.error('Error:', error);
          })
          );
        lastRec = lastRec+pageSize;
      }
      console.log("Number of fetches:" + fetchList.length);
      Promise.all(fetchList).then(() => {
        for(let i = 0; i < orcidsList.length; i++) {
          // let orcid = orcidsList[i].path;
          let u = orcidsList[i].uri;
          let t = 'json';
          let includeHeader = false
          orcidJsonPromises.push(
            queueRequest(remoteAPIQueue,setOptions(u,t))
            .then(response => {
             return response.data;
            })
            .then(orcidJson => {
             listFullOrcidRecords.push(orcidJson);

             const csv = papa.unparse([{
               orcid: orcidQueryTools.getOrcidId(orcidJson),
               lastUpdated: orcidQueryTools.getLastUpdated(orcidJson),
               name: orcidQueryTools.getName(orcidJson),
               educations: orcidQueryTools.getEducations(orcidJson),
               employments: orcidQueryTools.getEmployments(orcidJson),
               ids: orcidQueryTools.getIds(orcidJson),
               emails: orcidQueryTools.getEmails(orcidJson),
               workCount: orcidQueryTools.getWorkCount(orcidJson)
             }],{header: includeHeader})
             res.write(csv+"\r\n");
            })
            .catch((error) => {
             console.error('Error:', error);
            })
           );
         }
         console.log("Promises for orcidJson length: " +orcidJsonPromises.length);
         return orcidJsonPromises;
      }).then(orcidJsonPromises => {
         Promise.all(orcidJsonPromises).then(() => {
           res.end()
           sendMessage({downloading: false});
          }).catch((error) => {
            console.error('Error:', error);
          });
      }).catch((error) => {
        console.error('Error:', error);
      });
    }).catch((error) => {
      console.error('Error:', error);
    });
  } else {
    console.log("Nothing to download");
  }
});

app.get('/orcid-search-response', function(req, res) {
  res.render('orcid-search-response');
});

app.get('/orcid/:orcid', cache('0 day'), function (req, res) {
  let orcidJson;
  if (typeof req.params["orcid"] !== "undefined") {
    let orcid = req.params["orcid"]
    // ORCiD API Search query params:
    // q = query
    // start = first record to return (defaults to 1)
    // rows = number of records to return (defaults to 100, max 200)
    let u = 'https://pub.orcid.org/v3.0/'+orcid;
    //to do local testing uncomment the next line
    //var u = "http://localhost:4000/orcid-search-response"
    let t = 'json';

    queueRequest(remoteAPIQueue,setOptions(u,t))
    .then(response => {
      return response.data;
    }).then(orcidJson => {
      response = {}
      // LAST UPDATED
      response.lastUpdated = orcidQueryTools.getLastUpdated(orcidJson);
      // NAME
      response.name = orcidQueryTools.getName(orcidJson);
      // EMPLOYMENTS
      response.employments = orcidQueryTools.getEmployments(orcidJson);
      // EDUCATIONS
      response.educations = orcidQueryTools.getEducations(orcidJson);
      // EMAILS
      response.emails = orcidQueryTools.getEmails(orcidJson);
      // IDS
      response.ids = orcidQueryTools.getIds(orcidJson);
      // WORK COUNT
      response.workCount = orcidQueryTools.getWorkCount(orcidJson);
      // Now send it
      res.send(response);
    }).catch((error) => {
      console.error('Error:', error);
    });
  } else {
    res.send({error: 'message'})
  }
});

app.get('/api/cache/clear/', (req, res) => {
  res.json(apicache.clear())
})

function setOptions(url, responseFormat) {
  let options = {
                  url: url,
                  headers: {}
                }
  if (responseFormat === "csv") {
    options.headers['Accept'] = 'text/csv';
  } else if (responseFormat === "json") {
    options.headers['Accept'] = 'application/vnd.orcid+json';
  }
  return options;
}

function queueRequest(queue, options) {
  const u = options.url
  const h = options.headers
  return queue.request((retry) => axios.get(u, {headers: h})
    .then(response => {
      return response;
    })
    .catch(error => {
      retry_after = 10
      try {
        retry_after = error.response.data.parameters.retry_after
      } catch (e) {
        retry_after = 10
      }
      console.log(error.toJSON())
      if (error.code === "ECONNRESET" || error.code === "ECONNTIMEOUT") {
        return retry(retry_after)
      }
      else if (error.response.status === 429 || error.response.status === 503) {
        return retry(retry_after)
      }
      throw error;
    }), 'a4a442ba-5cd5-470a-b65c-81202a088a32')
}
