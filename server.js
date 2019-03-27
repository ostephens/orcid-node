const request = require('request');
const express = require('express');
const fetch = require('node-fetch');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  if (typeof req.query.ringgold !== "undefined") {
    
    // ORCiD API Search query params:
    // q = query
    // start = first record to return (defaults to 1)
    // rows = number of records to return (defaults to 100, max 200)
    var u = 'https://pub.orcid.org/v2.0/search/?q=ringgold-org-id:'+
             req.query.ringgold +
             '&rows=200';
    //to do local testing uncomment the next line
    //var u = "http://localhost:3000/orcid-search-response"
    var options = {
      url: u,
      headers: {
      'Accept': 'application/vnd.orcid+json'
      }
    };
    var n = 0;
    
    //set default variables
   var orcidsList = [];
   
    async function c() {
      
    }
   
    async function callback(error, response, body) {
      if (!error && response.statusCode == 200) {
        var info = JSON.parse(body);
        n = info["num-found"];
        console.log("Query found " + n + " ORCiD IDs");
        for (var k in info["result"]) {
          orcidsList.push(info["result"][k]["orcid-identifier"]);
        }
        if(n > 200){          
          for(i = 1; i-1 < Math.floor(n/200); i++) {
            options.url = 'https://pub.orcid.org/v2.0/search/?q=ringgold-org-id:'+
                     req.query.ringgold +
                     '&start='+((i*200)+1)+
                     '&rows=200';
             let response = await fetch(options.url, {
               headers: options.headers
             })
             let data = await response.json()
             for (var k in data["result"]) {
               orcidsList.push(data["result"][k]["orcid-identifier"]);
               //console.log(data["result"][k]["orcid-identifier"]);
             }
            console.log(orcidsList.length);
            console.log(options.url);
            console.log(orcidsList.length);
            
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

app.listen(process.env.PORT || 4000, function () {
  console.log('Example app listening on port ' + (process.env.PORT || 4000));
})
