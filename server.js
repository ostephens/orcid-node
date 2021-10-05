const express = require('express');
const fetch = require('node-fetch');
const apicache = require('apicache');
const csv = require('csv-parser');
const papa = require("papaparse");
const Readable = require('stream').Readable;
const cache = apicache.middleware
const app = express();
const bodyParser = require('body-parser');

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
    

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'pug');

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
    console.log(u);
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
  
  fetch(options.url, {headers: options.headers})
    .then(response => {
      return response.json();
    })
    .then(info => {
      //pageSize = 1000
      n = info["num-found"];
      console.log("Query found " + n + " ORCiD IDs");
      numberOfPages = Math.ceil(n/rows);
      console.log("With a page size of ", rows, " that is ", numberOfPages, " pages.")
      url = orcidQueryTools.buildOrcidAPIUrl(orcidAPIBase,orcidAPIVersion,'csv-search')+
               '/?q=' + query +
               '&fl=orcid,given-names,family-name,current-institution-affiliation-name,past-institution-affiliation-name,email' +
               '&start=' + start +
               '&rows=' + rows +
               '&sort=' + sortOptions;
      //If you want to see which URLs are being fetched, uncomment the next line
      options.headers = {
        'Accept': 'text/csv'
        }
      console.log(url);
      orcidsListFetches.push(
        fetch(url, {headers: options.headers})
         .then(response => {
           return response.text();
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
          console.log("Length of orcidsList: ",orcidsList.length);
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

app.get('/download', cache('2 hours'), function(req, res) {
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
    console.log(u);
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
  
    fetch(options.url, {headers: options.headers})
    .then(searchResultResponse => {
      return searchResultResponse.json();
    })
    .then(searchResult => {
      pageSize = 1000
      n = searchResult["num-found"];
      console.log("Query found " + n + " ORCiD IDs");
      numberPages = Math.ceil(n/pageSize);
      console.log("With a page size of ", pageSize, " that is ", numberPages, " pages.")
      fetchList = [];
      for(i = 1; i-1 < numberPages; i++) {
        url = orcidQueryTools.buildOrcidAPIUrl(orcidAPIBase,orcidAPIVersion,orcidAPIType) +
              '/?q=' + query +
              '&start=' + lastRec +
              '&rows=' + pageSize;
        //If you want to see which URLs are being fetched, uncomment the next line
        console.log(url);
        fetchList.push(
          fetch(url, {headers: options.headers})
           .then(response => {
             return response.json();
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
      //console.log(fetchList[0])
      Promise.all(fetchList)
      .then(function () {
        for(let i = 0; i < orcidsList.length; i++) {
          u = orcidsList[i].uri
          orcidJsonPromises.push(
            fetch(u, {headers: options.headers})
             .then(response => {
               return response.json();
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
       })
       .then(function () {
         //console.log(orcidJsonPromises);
         Promise.all(orcidJsonPromises)
          .then(function () {
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
          }).
          then (attach => {
            //response = "";
            //res.attachment(attach)
            res.send(attach)
          })
          .catch((error) => {
            console.error('Error:', error);
          });
       })
      .catch((error) => {
        console.error('Error:', error);
      });
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  } else {
    console.log("Nothing to download");
  }
});

app.get('/orcid-search-response', function(req, res) {
  res.render('orcid-search-response');
});

app.get('/orcid/:orcid', cache('1 day'), function (req, res) {
  var orcidJson;
  if (typeof req.params["orcid"] !== "undefined") {
    
    // ORCiD API Search query params:
    // q = query
    // start = first record to return (defaults to 1)
    // rows = number of records to return (defaults to 100, max 200)
    var u = 'https://pub.orcid.org/v3.0/'+req.params["orcid"];
    //to do local testing uncomment the next line
    //var u = "http://localhost:4000/orcid-search-response"
    var options = {
      url: u,
      headers: {
      'Accept': 'application/vnd.orcid+json'
      }
    };
    fetch(options.url, {headers: options.headers})
      .then(response => {
        return response.json();
      })
      .then(orcidJson => {
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
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  } else {
    res.send({error: 'message'})
  }
});

app.listen(process.env.PORT || 4000, function () {
  console.log('Example app listening on port ' + (process.env.PORT || 4000));
})
