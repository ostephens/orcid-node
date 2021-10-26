const buildOrcidAPIUrl = function(base,version,type) {
  return base + '/' + version + '/' + type
}

const buildOrcidQuery = function(req) {
  queryparts = [];
  if (typeof req.query.ringgold !== "undefined" && req.query.ringgold.length > 0) {
    req.query.ringgold.split("|").forEach(function(q) {
      queryparts.push("ringgold-org-id:" + q)
    });
  }
  if (typeof req.query.grid !== "undefined" && req.query.grid.length > 0) {
    req.query.grid.split("|").forEach(function(q) {
      queryparts.push("grid-org-id:" + q)
    });
  }
  if (typeof req.query.emaildomain !== "undefined" && req.query.emaildomain.length > 0) {
    req.query.emaildomain.split("|").forEach(function(q) {
      queryparts.push("email:*@" + q)
    });
  }
  if (typeof req.query.orgname !== "undefined" && req.query.orgname.length > 0) {
    req.query.orgname.split("|").forEach(function(q) {
      queryparts.push("affiliation-org-name:%22" + encodeURI(q) + "%22")
    });
  }
  query = queryparts.join("%20OR%20")
  return query
}

const getOrcidId = function (orcidJson) {
  return orcidJson['orcid-identifier']['path'];
}

const getLastUpdated = function (orcidJson) {
  lastUpdated = getNested(orcidJson, "history", "last-modified-date", "value");
  if(typeof lastUpdated != undefined || lastUpdated != null) {
    let ud = new Date(lastUpdated).toISOString();
    lastUpdated = ud.substring(0,10);
  } else {
    lastUpdated = "No last updated date";
  }
  return lastUpdated;
}

const getName = function (orcidJson) {
  givenName = getNested(orcidJson, "person","name","given-names","value");
  familyName = getNested(orcidJson, "person","name","family-name","value");
  name = [givenName, familyName].join(' ');
  if(name.trim().length === 0) {
    name = "Anonymous"
  }
  return name;
}

const getEmployments = function (orcidJson) {
  employments = new Array();
  employmentAffiliationGroups = getNested(orcidJson, "activities-summary","employments","affiliation-group")
  employmentAffiliationGroups.forEach(function(ag){
    ag["summaries"].forEach(function(emp){
      let org = getNested(emp, "employment-summary","organization","name");
      if(typeof org === undefined || org === null) {
        org =  "No organization name";
      }
      let role = getNested(emp, "employment-summary", "role-title");
      if(typeof role === undefined || role === null) {
        role = "No job title";
      } 
      let startYear = getNested(emp, "employment-summary", "start-date", "year", "value")
      if(typeof startYear === undefined || startYear === null) {
        startYear = "*";
      }
      let endYear = getNested(emp, "employment-summary", "end-date", "year", "value")
      if(typeof endYear === undefined || endYear === null) {
        endYear = "*";
      }
      employments.push(org + ": " + role + " " +
      startYear+" -> "+endYear)
    });
  });
  return employments;
}

const getEducations = function (orcidJson) {
  educations = new Array();
  educationAffiliationGroups = getNested(orcidJson, "activities-summary","educations","affiliation-group")
  educationAffiliationGroups.forEach(function(ag){
    ag["summaries"].forEach(function(emp){
      let org = getNested(emp, "education-summary","organization","name");
      if(typeof org === undefined || org === null) {
        org =  "No organization name";
      }
      let role = getNested(emp, "education-summary", "role-title");
      if(typeof role === undefined || role === null) {
        role = "No course of study";
      } 
      let startYear = getNested(emp, "education-summary", "start-date", "year", "value")
      if(typeof startYear === undefined || startYear === null) {
        startYear = "*";
      }
      let endYear = getNested(emp, "education-summary", "end-date", "year", "value")
      if(typeof endYear === undefined || endYear === null) {
        endYear = "*";
      }
      educations.push(org + ": " + role + " " +
      startYear+" -> "+endYear)
    });
  });
  return educations;
}

const getEmails = function (orcidJson) {
  emails = new Array();
  emailList = getNested(orcidJson, "person", "emails", "email")
  if(typeof emailList != undefined && emailList != null) {
    emailList.forEach(function(em){
      emails.push(getNested(em, "email"));
    });
  }
  return emails;
}

const getIds = function (orcidJson) {
  ids = new Array();
  idList = getNested(orcidJson, "person", "external-identifiers", "external-identifier")
  if(typeof idList != undefined && idList != null) {
    idList.forEach(function(id){
      ids.push(getNested(id, "external-id-type") + ": "+getNested(id, "external-id-value"));
    });
  }
  return ids;
}

const getWorkCount = function (orcidJson) {
  workCount = getNested(orcidJson, "activities-summary", "works", "group", "length");
  return workCount;
}

getNested = function(obj, ...args) {
  // Handy function to check all levels of a path in some json from
  // https://stackoverflow.com/questions/2631001/test-for-existence-of-nested-javascript-object-key
  // Returns undefined if the path doesn't exist in the JSON
  return args.reduce((obj, path) => obj && obj[path], obj)
}

module.exports ={
  buildOrcidAPIUrl,buildOrcidQuery,getOrcidId,getLastUpdated,getName,getEmployments,getEducations,getEmails,getIds,getWorkCount
}