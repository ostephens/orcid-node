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

const orcidQueryTools = require('./orcidQueryTools.js')
var orcidAPIBase = 'https://pub.orcid.org',
    orcidAPIVersion = 'v3.0',
    orcidAPIType = 'search';
    
var lastRec = 0,
    query = "",
    perPage = 10,
    currentPage = 1,
    urlQuery = "",
    sortOptions = "orcid%20asc";

const remoteAPIQueue = new Queue({
  rules: {
    common: {
      rate: 1,
      limit: 1,
      priority: 1
    },
    default: {
      rate: 1,
      limit: 1,
    },
    overall: {
      rate: 1,
      limit: 1
    },
    retryTime: 5,
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
    var u = orcidQueryTools.buildOrcidAPIUrl(orcidAPIBase,orcidAPIVersion,orcidAPIType)+
        '/?q='+ query +
        '&rows='+r;
    //to do local testing uncomment the next line
    //var u = "http://localhost:4000/orcid-search-response"
    var options = {
      url: u,
      headers: {
      'Accept': 'application/vnd.orcid+json'
      }
    };
    lastRec = 0;
    var n = 0;
    
    //set default variables
    var orcidCSV = '';
    var orcidsList = [];
    var orcidsListFetches = [];
  
    queueRequest(remoteAPIQueue,options,query+rows)
    .then(response => {
      return response.data;
    })
    .then(info => {
      //pageSize = 1000
      n = info["num-found"];
      console.log("Query found " + n + " ORCiD IDs");
      numberOfPages = Math.ceil(n/rows);
      console.log("With a page size of ", rows, " that is ", numberOfPages, " pages.")
      options.url = orcidQueryTools.buildOrcidAPIUrl(orcidAPIBase,orcidAPIVersion,'csv-search')+
               '/?q=' + query +
               '&fl=orcid,given-names,family-name,current-institution-affiliation-name,past-institution-affiliation-name,email' +
               '&start=' + start +
               '&rows=' + rows +
               '&sort=' + sortOptions;

      options.headers = {
        'Accept': 'text/csv'
        }
      orcidsListFetches.push(
        queueRequest(remoteAPIQueue,options,query+start+rows+sortOptions)
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
          res.render('index', {
            count: n,
            orcids: orcidsList,
            itemCount: n,
            perPage: perPage,
      		  currentPage: currentPage,
            numberOfPages: numberOfPages,
            urlQuery: urlQuery,
            error: null});
         })
      });
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  } else {
    res.render("index", {
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
  res.type('text/csv');
  query = orcidQueryTools.buildOrcidQuery(req)
  if (query.length > 0) {
    r = 0
    // ORCiD API Search query params:
    // q = query
    // start = first record to return (defaults to 1, max 10000)
    // rows = number of records to return (defaults to 100, max 1000)
    var u = orcidQueryTools.buildOrcidAPIUrl(orcidAPIBase,orcidAPIVersion,orcidAPIType)+
            '/?q='+ query +
            '&rows=' + r +
            '&sort=' + sortOptions;
    //to do local testing uncomment the next line
    //var u = "http://localhost:4000/orcid-search-response"
    var options = {
      url: u,
      headers: {
      'Accept': 'application/vnd.orcid+json'
      }
    };
    lastRec = 0;
    var n = 0;
    var orcidsList = [];
    var orcidJsonPromises = [];
    var listFullOrcidRecords = [];
    
    queueRequest(remoteAPIQueue,options,query+r+sortOptions)
    .then(response => {
      return response.data
    })
    .then(searchResult => {
      pageSize = 1000
      n = searchResult["num-found"];
      console.log("Query found " + n + " ORCiD IDs");
      numberPages = Math.ceil(n/pageSize);
      console.log("With a page size of ", pageSize, " that is ", numberPages, " pages.")
      fetchList = [];
      for(i = 1; i-1 < numberPages; i++) {
        options.url = orcidQueryTools.buildOrcidAPIUrl(orcidAPIBase,orcidAPIVersion,orcidAPIType) +
              '/?q=' + query +
              '&start=' + lastRec +
              '&rows=' + pageSize;
        fetchList.push(
          queueRequest(remoteAPIQueue,options,query+lastRec+pageSize)
          .then(response => {
            return response.data;
          })
          .then(orcidRecord => {
            for (var k in orcidRecord["result"]) {
              orcidsList.push(orcidRecord["result"][k]["orcid-identifier"]);
            }
          })
          .catch((error) => {
            console.error('Error:', error);
          })
          );
        lastRec = lastRec+pageSize;
      }
      console.log("Number of fetches:" + fetchList.length);
      return fetchList;
    })
    .then(fetchList => {
      Promise.all(fetchList).then(() => {
        for(let i = 0; i < orcidsList.length; i++) {
          orcid = orcidsList[i].path
          options = {
            url: orcidsList[i].uri,
            headers: {
            'Accept': 'application/vnd.orcid+json'
            }
          }
          orcidJsonPromises.push(
            queueRequest(remoteAPIQueue,options,orcid)
            .then(response => {
             return response.data;
            })
            .then(orcidJson => {
             listFullOrcidRecords.push(orcidJson);
            })
            .catch((error) => {
             console.error('Error:', error);
            })
           );
         }
         return orcidJsonPromises;
      }).then(orcidJsonPromises => {
         Promise.all(orcidJsonPromises).then(() => {
            csvRecords = []
            listFullOrcidRecords.forEach( orcidRecord => {
              // orcidId = orcidQueryTools.getOrcidId(orcidJson);
              // lastUpdated = orcidQueryTools.getLastUpdated(orcidJson);
              // name = orcidQueryTools.getName(orcidJson);
              // employments = orcidQueryTools.getEmployments(orcidJson);
              // educations = orcidQueryTools.getEducations(orcidJson);
              // emails = orcidQueryTools.getEmails(orcidJson);
              // ids = orcidQueryTools.getIds(orcidJson);
              // workCount = orcidQueryTools.getWorkCount(orcidJson);
              csvRecords.push(
                {
                  orcid: orcidQueryTools.getOrcidId(orcidRecord),
                  lastUpdated: orcidQueryTools.getLastUpdated(orcidRecord),
                  name: orcidQueryTools.getName(orcidRecord),
                  educations: orcidQueryTools.getEducations(orcidRecord),
                  employments: orcidQueryTools.getEmployments(orcidRecord),
                  ids: orcidQueryTools.getIds(orcidRecord),
                  emails: orcidQueryTools.getEmails(orcidRecord),
                  workCount: orcidQueryTools.getWorkCount(orcidRecord)
                }
              )
            })
            return papa.unparse(csvRecords);
          }).then (attach => {
            console.log(attach)
            res.send(attach)
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
  var orcidJson;
  if (typeof req.params["orcid"] !== "undefined") {
    orcid = req.params["orcid"]
    // ORCiD API Search query params:
    // q = query
    // start = first record to return (defaults to 1)
    // rows = number of records to return (defaults to 100, max 200)
    var u = 'https://pub.orcid.org/v3.0/'+orcid;
    //to do local testing uncomment the next line
    //var u = "http://localhost:4000/orcid-search-response"
    var options = {
      url: u,
      headers: {
      'Accept': 'application/vnd.orcid+json'
      }
    };
    
    queueRequest(remoteAPIQueue,options,orcid)
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

function queueRequest(queue, options, requestId) {
  console.log("Adding to queue: " + options.url)
  return queue.request((retry) => axios.get(options.url, {headers: options.headers})
    .then(response => response)
    .catch(error => {
      retry_after = 3
      try {
        retry_after = error.response.data.parameters.retry_after
      } catch (e) {
        retry_after = 3
      }
      console.log(error.toJSON())
      if (error.code === "ECONNRESET" || error.code === "ECONNTIMEOUT") {
        return retry(retry_after)
      }
      else if (error.response.status === 429 || error.response.status === 503) {
        return retry(retry_after)
      }
      throw error;
    }), requestId)
}
