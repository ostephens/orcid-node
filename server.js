const request = require('request');
const express = require('express');
const paginate = require('express-paginate');
const app = express();
const bodyParser = require('body-parser');

app.use(paginate.middleware(100, 200));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  var limit = 10;
  var offset = 0;
  if (typeof req.query.ringgold !== "undefined") {
    if (typeof req.query.limit !== "undefined") {
      limit = req.query.limit;
    }
    if (typeof req.query.offset !== "undefined") {
      offset = req.query.offset;
    }
    // ORCiD API Search query params:
    // q = query
    // start = first record to return (defaults to 1)
    // rows = number of records to return (defaults to 100, max 200)
    var u = 'https://pub.orcid.org/v2.0/search/?q=ringgold-org-id:'+
             req.query.ringgold +
             '&start=' + offset +
             '&rows=' + limit;
    //to do local testing uncomment the next line
    //var u = "http://localhost:3000/orcid-search-response"
    console.log(u);
    var n = "Test";  
    var options = {
      url: u,
      headers: {
      'Accept': 'application/vnd.orcid+json'
      }
    };
    
    //set default variables
   var totalOrcids = 0,
   pageSize = 100,
   currentPage = 1,
   orcidsList = [];
   
    function callback(error, response, body) {
      if (!error && response.statusCode == 200) {
        var info = JSON.parse(body);
        n = info["num-found"];
        console.log("Query found " + n + " ORCiD IDs");
        orcidsList = info.result;
        //console.log(orcidsList);
        res.render('index', {count: n, orcids: orcidsList, pageCount: 0, currentPage: currentPage, error: null});
      }
    }
    request(options, callback);
  } else {
    res.render("index", {count: null, orcids: [], pageCount: 0, currentPage: 1, error: null});
  }
})

app.get('/orcid-search-response', function(req, res) {
  res.render('orcid-search-response');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})
