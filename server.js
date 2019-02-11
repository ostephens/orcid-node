const request = require('request');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  if (typeof req.query.ringgold !== "undefined") {
    //var u = 'https://pub.orcid.org/v2.0/search/?q=ringgold-org-id:'+ req.query.ringgold;
    var u = "http://localhost:3000/orcid-search-response"
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
        console.log("");
        console.log(info["num-found"]);
        n = info["num-found"];
        orcidsList = info.result;
        console.log(orcidsList);
        res.render('index', {count: n, orcids: orcidsList, error: null});
      }
    }
    request(options, callback);
  } else {
    res.render("index", {count: null, orcids: [], error: null});
  }
})

app.get('/orcid-search-response', function(req, res) {
  res.render('orcid-search-response');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})
