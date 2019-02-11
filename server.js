const request = require('request');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  //res.send('Hello World!')
  res.render('index');
})

app.post('/', function(req,res) {  
  var u = 'https://pub.orcid.org/v2.0/search/?q=ringgold-org-id:'+ req.body.ringgold;
  var options = {
    url: u,
    headers: {
    'Accept': 'application/vnd.orcid+json'
    }
  };
  console.log(options.url);
 
  function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
      var info = JSON.parse(body);
      console.log("");
      console.log(info["num-found"]);
    }
  }

  request(options, callback)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})
