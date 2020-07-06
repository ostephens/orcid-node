const request = require('request');
const express = require('express');
const fetch = require('node-fetch');
const apicache = require('apicache');
const cache = apicache.middleware
const app = express();
const bodyParser = require('body-parser');
var lastRec = 0;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', cache('2 hours'), function (req, res) {
  if (typeof req.query.ringgold !== "undefined") {
    r = 999
    //the public API limits the "start" parameter to 10000
    //by starting with 999 we get the maximum number of responses (11000)
    //
    // ORCiD API Search query params:
    // q = query
    // start = first record to return (defaults to 1)
    // rows = number of records to return (defaults to 100, max 1000)
    var u = 'https://pub.orcid.org/v3.0/search/?q=ringgold-org-id:'+
             req.query.ringgold +
             '&rows='+r;
    //to do local testing uncomment the next line
    //var u = "http://localhost:4000/orcid-search-response"
    var options = {
      url: u,
      headers: {
      'Accept': 'application/vnd.orcid+json'
      }
    };
    lastRec = 999;
    var n = 0;
    
    //set default variables
   var orcidsList = [];
   
    async function c() {
      
    }
   
    async function callback(error, response, body) {
      if (!error && response.statusCode == 200) {
        var info = JSON.parse(body);
        pageSize = 1000
        n = info["num-found"];
        console.log("Query found " + n + " ORCiD IDs");
        for (var k in info["result"]) {
          orcidsList.push(info["result"][k]["orcid-identifier"]);
        }
        if(n > pageSize){          
          for(i = 1; i-1 < Math.floor(n/pageSize); i++) {
            options.url = 'https://pub.orcid.org/v3.0/search/?q=ringgold-org-id:'+
                     req.query.ringgold +
                     '&start='+(lastRec+1)+
                     '&rows='+pageSize;
            console.log("Attempting to fetch: "+options.url);
            console.log("Before fetch we have: "+orcidsList.length+" orcIDs listed");
             let response = await fetch(options.url, {
               headers: options.headers
             })
             let data = await response.json()
             for (var k in data["result"]) {
               orcidsList.push(data["result"][k]["orcid-identifier"]);
               //console.log(data["result"][k]["orcid-identifier"]);
             }
            console.log("After fetch we have: "+orcidsList.length+" orcIDs listed");
            lastRec = lastRec+pageSize;
          }
        }
        console.log(orcidsList.length);
        res.render('index', {count: n, orcids: orcidsList, itemCount: n, error: null});
      }
    }
    request(options, callback);
  } else {
    res.render("index", {count: null, orcids: [], itemCount: 0, error: null});
  }
})

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
    function callback(error, response, body) {
      if (!error && response.statusCode == 200) {
        orcidJson = JSON.parse(body);
        res.send(orcidJson);
      }
    }
    request(options, callback);
  } else {
    res.send({error: 'message'})
  }
});

app.listen(process.env.PORT || 4000, function () {
  console.log('Example app listening on port ' + (process.env.PORT || 4000));
})
