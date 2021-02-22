// from data.js
var tableData = data;

// Console check
//console.log(tableData);

// Get a reference to the table body
var tbody = d3.select("tbody");

//Put the table loading process in a function to be use repeatedly for table filtering
var tableLoad = (loadData)  => {
// Loop through the data for each table UFO object
loadData.forEach((UFOSighting) => {

    // Append one table row using "tr" tag for each UFO Sighting object
    var row = tbody.append("tr");
    
    // Loop for appending the values for each newly created row
    Object.values(UFOSighting).forEach((value) => {
    
        // Append a cell to the row for each value using "td" tag
        var cell = row.append("td");
         // Append the text from each value to the row
        cell.text(value);
    });
});
};

// Call table loading function with table data for use
tableLoad(tableData);


// Select the button
var button = d3.select("#filter-btn");

// Select the form
//var form =d3.select("#form");

// Create event handlers 
button.on("click", tableFilter);
//form.on("submit", tableFilter);



// Complete the event handler function for the form
function tableFilter() {


    // Prevent the page from refreshing
    d3.event.preventDefault();

    
    // Select the input element and get the raw HTML node
    var inputElementDate = d3.select("#datetime");
    var inputElementCity = d3.select("#city");
    var inputElementState = d3.select("#state");
    var inputElementCountry = d3.select("#country");
    var inputElementShape = d3.select("#shape");

    
  
    // Get the value property of the input element
    var inputValueDate = inputElementDate.property("value");
    var inputValueCity = inputElementCity.property("value").toLowerCase();
    var inputValueState = inputElementState.property("value").toLowerCase();
    var inputValueCountry = inputElementCountry.property("value").toLowerCase();
    var inputValueShape = inputElementShape.property("value").toLowerCase();
  
    // Create an empty array
    filterList = {};
    
    // Check to see if there is a value in the input field
    // If there is a value, create a key (.attr("id")) and value
    // Add it to the filterList array
    if (inputValueDate !== "") { filterList[inputElementDate.attr("id")] = inputValueDate }; 
    if (inputValueCity !== "") { filterList[inputElementCity.attr("id")] = inputValueCity};
    if (inputValueState !== "") { filterList[inputElementState.attr("id")] = inputValueState };
    if (inputValueCountry !== "") { filterList[inputElementCountry.attr("id")] = inputValueCountry } ;
    if (inputValueShape !== "") { filterList[inputElementShape.attr("id")] = inputValueShape };
    
    // Take key value pairs from filterList
    // Loop the table on each pair
    let filteredData = tableData;
    Object.entries(filterList).forEach(([key, value]) => {
        filteredData = filteredData.filter(row => row[key] === value);
       
    });
    tbody.html("");
    tableLoad(filteredData);

    document.getElementById("datetime").value='';
	document.getElementById("city").value='';
	document.getElementById("state").value='';
	document.getElementById("country").value='';
	document.getElementById("shape").value='';	
};

