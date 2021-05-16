// from data.js
var tableData = data;
var tbody = d3.select("tbody");
var button = d3.select("#b#filter-btn");
var form = d3.select("#form");

button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter(){
      d3.event.preventDefault();
      inputElement = d3.select("#ufo-form-input");
      inputValue = inputElement.property("value");
      tbody.html('');

      var results = sightings.filter(sighting => sighting.datetime == inputvalue);
      results.forEach((tabledata) => {
          var row = tbody.append("tr");
          Object.entries(tabledata).forEach(([key, value]) => {
              var cell = row.append("td");
              cell.text(value);
          });
      });
}
