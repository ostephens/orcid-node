function selectRegion() {
  var regionSelection = document.getElementById("region").value;

  // Turn display off for all regions
  document.getElementById("us-form").style.display = "none";
  document.getElementById("uk-form").style.display = "none";
  
  // Turn on selected region
  document.getElementById(regionSelection).style.display = "block";
}