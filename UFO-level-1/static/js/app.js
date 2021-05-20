// from data.js
var tableData = data;
tbody = d3.select("tbody");

function displayData(data){
    tbody.text("")
    data.forEach(function(sighting){
    row = tbody.append("tr")
    Object.entries(sighting).forEach(function([key, value]){
        newTable = row.append("td").text(value)
    })
})}

displayData(tableData);

var inputDate = d3.select("#datetime");
var button = d3.select("filter-btn");

function clickSelect(){
    d3.event.preventDefault();
    console.log(inputDate.property("value"));
    var addedTable = tableData.filter(sighting=>sighting.datetime===inputDate.property("value"))
    displayData(addedTable);
}

inputDate.on("change", clickSelect);
