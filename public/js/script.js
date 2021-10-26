function selectRegion() {
  var regionSelection = document.getElementById('region').value;

  // Turn display off for all regions
  document.getElementById('us-form').style.display = 'none';
  document.getElementById('uk-form').style.display = 'none';
  
  // Turn on selected region
  document.getElementById(regionSelection).style.display = 'block';
}

function selectBoxes() {
  new TomSelect('#ringgold-identifiers',{
    maxItems: 1,
    valueField: 'id',
    labelField: 'name',
    searchField: 'name',
    plugins: ['remove_button'],
    persist: false,
    create: true,
    onDelete: function(values) {
      return confirm(values.length > 1 ? 'Are you sure you want to remove these ' + values.length + ' items?' : 'Are you sure you want to remove ' + values[0] + '?');
    },
    options: ringgolds
  });
  new TomSelect('#grid-identifiers',{
    maxItems: 1,
    valueField: 'id',
    labelField: 'name',
    searchField: 'name',
    plugins: ['remove_button'],
    persist: false,
    create: true,
    onDelete: function(values) {
      return confirm(values.length > 1 ? 'Are you sure you want to remove these ' + values.length + ' items?' : 'Are you sure you want to remove '  + values[0] + '?');
    },
    options: grids
  });
  new TomSelect('#email-domains',{
    create: true,
    createFilter: '([^<>()[\\]\\.,;:\\s@\\"]\\.(ac\\.uk|edu)\\|?)+'
  });
  new TomSelect('#org-names',{
    create: true,
    createFilter: '(.+\\|?)+'
  });
  
  new TomSelect('#ror-api',{
  valueField: 'idList',
  labelField: 'name',
  searchField: 'name',
  maxOptions: 20,
  load: function(query, callback) {
    var url = 'https://api.ror.org/organizations?query=' + encodeURIComponent(query);
    fetch(url)
      .then(response => response.json())
      .then(json => {
        let data = json.items.map(item => {
          let idList = {
            ror: item.id,
            grid: item.external_ids.GRID.preferred
          }
          let i = {
            id: item.id,
            name: item.name,
            idList: JSON.stringify(idList)
          }
          console.log(i);
          return i
        })
        callback(data);
      }).catch(()=>{
        callback();
      });
    }
  });
}
