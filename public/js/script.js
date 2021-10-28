function selectRegion() {
  var regionSelection = document.getElementById('region').value;

  // Turn display off for all regions
  document.getElementById('us-form').style.display = 'none';
  document.getElementById('uk-form').style.display = 'none';

  // Turn on selected region
  document.getElementById(regionSelection).style.display = 'block';
}

function selectBoxes() {
  /*
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
  */
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
          let idMapping = idMappings.find(inst => inst.ror === item.id);
          if(idMapping != undefined) {
            idList.ringgold = idMapping.ringgold
            idList.domains = idMapping.domains
            idList.name = idMapping.name
          }
          let i = {
            id: item.id,
            name: item.name,
            idList: JSON.stringify(idList)
          }
          //console.log(i);
          return i
        })
        callback(data);
      }).catch(()=>{
        callback();
      });
    },
  render: {
    item: function(item, escape) {
  				return `<div>
                  <span class="h4">
  									${ escape(item.name) }
  								</span>
  								<div class="text-muted">ROR: ${ JSON.parse(item.idList).ror }</div>
                  <div class="text-muted">GRID: ${ JSON.parse(item.idList).grid }</div>
                  <div class="text-muted">Ringgold: ${ JSON.parse(item.idList).ringgold }</div>
                  <div class="text-muted">Email domains: ${ JSON.parse(item.idList).domains }</div>
    						</div>`;
  			}
  }
  });
}
