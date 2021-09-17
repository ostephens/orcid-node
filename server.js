const express = require('express');
const fetch = require('node-fetch');
const apicache = require('apicache');
const csv = require('csv-parser');
const Readable = require('stream').Readable;
const cache = apicache.middleware
const app = express();
const bodyParser = require('body-parser');
var lastRec = 0,
    query = "",
    perPage = 10,
    currentPage = 1,
    urlQuery = "";
    

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
  queryparts = [];
  if (typeof req.query.ringgold !== "undefined") {
    req.query.ringgold.split("|").forEach(function(q) {
      queryparts.push("ringgold-org-id:" + q)
    });
  }
  if (typeof req.query.grid !== "undefined") {
    req.query.grid.split("|").forEach(function(q) {
      queryparts.push("grid-org-id:" + q)
    });
  }
  if (typeof req.query.emaildomain !== "undefined") {
    req.query.emaildomain.split("|").forEach(function(q) {
      queryparts.push("email:*@" + q)
    });
  }
  if (typeof req.query.orgname !== "undefined") {
    req.query.orgname.split("|").forEach(function(q) {
      queryparts.push("affiliation-org-name:%22" + encodeURI(q) + "%22")
    });
  }
  query = queryparts.join("%20OR%20")
  if (query.length > 0) {
    r = 0
    // ORCiD API Search query params:
    // q = query
    // start = first record to return (defaults to 1, max 10000)
    // rows = number of records to return (defaults to 100, max 1000)
    var u = 'https://pub.orcid.org/v3.0/expanded-search/?q='+
             query +
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

      url = 'https://pub.orcid.org/v3.0/csv-search/?q='+
               query +
               '&fl=orcid,given-names,family-name,current-institution-affiliation-name,past-institution-affiliation-name,email' +
               '&start='+start+
               '&rows='+rows;
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
        lastUpdated = getNested(orcidJson, "history", "last-modified-date", "value");
        if(typeof lastUpdated != undefined || lastUpdated != null) {
          var ud = new Date(lastUpdated).toISOString();
          response.lastUpdated = ud.substring(0,10);
        } else {
          response.lastUpdated = "No last updated date";
        }
        // NAME
        givenName = getNested(orcidJson, "person","name","given-names","value");
        familyName = getNested(orcidJson, "person","name","family-name","value");
        name = [givenName, familyName].join(' ');
        if(name.trim().length === 0) {
          name = "Anonymous"
        }
        response.name = name
        // EMPLOYMENTS
        employments = new Array();
        employmentAffiliationGroups = getNested(orcidJson, "activities-summary","employments","affiliation-group")
        employmentAffiliationGroups.forEach(function(ag){
          ag["summaries"].forEach(function(emp){
            var org = getNested(emp, "employment-summary","organization","name");
            if(typeof org === undefined || org === null) {
              org =  "No organization name";
            }
            var role = getNested(emp, "employment-summary", "role-title");
            if(typeof role === undefined || role === null) {
              role = "No job title";
            } 
            var startYear = getNested(emp, "employment-summary", "start-date", "year", "value")
            if(typeof startYear === undefined || startYear === null) {
              startYear = "*";
            }
            var endYear = getNested(emp, "employment-summary", "end-date", "year", "value")
            if(typeof endYear === undefined || endYear === null) {
              endYear = "*";
            }
            employments.push(org + ": " + role + " " +
            startYear+" -> "+endYear)
          });
        });
        response.employments = employments;
        // EDUCATIONS
        educations = new Array();
        educationAffiliationGroups = getNested(orcidJson, "activities-summary","educations","affiliation-group")
        educationAffiliationGroups.forEach(function(ag){
          ag["summaries"].forEach(function(emp){
            var org = getNested(emp, "education-summary","organization","name");
            if(typeof org === undefined || org === null) {
              org =  "No organization name";
            }
            var role = getNested(emp, "education-summary", "role-title");
            if(typeof role === undefined || role === null) {
              role = "No course of study";
            } 
            var startYear = getNested(emp, "education-summary", "start-date", "year", "value")
            if(typeof startYear === undefined || startYear === null) {
              startYear = "*";
            }
            var endYear = getNested(emp, "education-summary", "end-date", "year", "value")
            if(typeof endYear === undefined || endYear === null) {
              endYear = "*";
            }
            educations.push(org + ": " + role + " " +
            startYear+" -> "+endYear)
          });
        });
        response.educations = educations
        // EMAILS
        emails = new Array();
        emailList = getNested(orcidJson, "person", "emails", "email")
        if(typeof emailList != undefined && emailList != null) {
          emailList.forEach(function(em){
            emails.push(getNested(em, "email"));
          });
        }
        response.emails = emails
        // IDS
        ids = new Array();
        idList = getNested(orcidJson, "person", "external-identifiers", "external-identifier")
        if(typeof idList != undefined && idList != null) {
          idList.forEach(function(id){
            ids.push(getNested(id, "external-id-type") + ": "+getNested(id, "external-id-value"));
          });
        }
        response.ids = ids
        // WORK COUNT
        workCount = getNested(orcidJson, "activities-summary", "works", "group", "length");
        response.workCount = workCount;
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

// Handy function to check all levels of a path in some json from
// https://stackoverflow.com/questions/2631001/test-for-existence-of-nested-javascript-object-key
// Returns undefined if the path doesn't exist in the JSON
function getNested(obj, ...args) {
  return args.reduce((obj, path) => obj && obj[path], obj)
}
