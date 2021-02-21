// from data.js
var tableData = data;

// Console check
console.log(tableData);

// Get a reference to the table body
var tbody = d3.select("tbody");

//Put the table loading process in a function to be use repeatedly for table filtering
var tableLoad = (loadData)  => {
// Loop through the data for each table UFO object
loadData.forEach((UFOSighting) => {

    // Append one table row using "tr" tag for each UFO Sighting object
    var row = tbody.append("tr");
    
    // Loop for appending the values for each newly created row
    Object.entries(UFOSighting).forEach(([key, value]) => {
    
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
var form = d3.select("#form");

// Create event handlers 
button.on("click", tableFilter);


// Complete the event handler function for the form
function tableFilter() {


    // Prevent the page from refreshing
    d3.event.preventDefault();

    
    // Select the input element and get the raw HTML node
    var inputElementDate = d3.select("#datetime");
    var inputElementCity = d3.select("#forcity");
    var inputElementState = d3.select("#forstate");
    var inputElementCountry = d3.select("#forcountry");
    var inputElementShape = d3.select("#forshape");
  
    // Get the value property of the input element
    var inputValueDate = inputElementDate.property("value");
    var inputValueCity = inputElementCity.property("value").toLowerCase();
    var inputValueState = inputElementState.property("value").toLowerCase();
    var inputValueCountry = inputElementCountry.property("value").toLowerCase();
    var inputValueShape = inputElementShape.property("value").toLowerCase();
  
    // Console check
    console.log(inputValueDate);
    console.log(inputValueCity);
    console.log(inputValueState);
    console.log(inputValueCountry);
    console.log(inputValueShape);

    // Filter on input value property of the input element - Dates
    var filteredDate = tableData.filter(tableinfo => tableinfo.datetime === inputValueDate);
    var filteredCity = tableData.filter(tableinfo => tableinfo.city === inputValueCity);
    var filteredState = tableData.filter(tableinfo => tableinfo.state === inputValueState);
    var filteredCountry = tableData.filter(tableinfo => tableinfo.country === inputValueCountry);
    var filteredShape = tableData.filter(tableinfo => tableinfo.shape === inputValueShape);
    
    // Console check
    console.log(filteredDate);
    console.log(filteredCity);
    console.log(filteredState);
    console.log(filteredCountry);
    console.log(filteredShape);

    if(filteredDate.length !== 0) 
    {
         // Clear table  
        tbody.html("")
        
        // Call table loading function with filtered table data for use
        tableLoad(filteredDate);
    }
    else if (filteredCity.length !== 0) {
        // Clear table  
        tbody.html("")

        // Call table loading function with filtered table data for use
        tableLoad(filteredCity);
        
    } else if (filteredState.length !== 0) {
        // Clear table  
        tbody.html("")
        
        // Call table loading function with filtered table data for use
        tableLoad(filteredState);

    } else if (filteredCountry.length !== 0) {
        // Clear table  
        tbody.html("")

        // Call table loading function with filtered table data for use
        tableLoad(filteredCountry);
        
    } else if (filteredShape.length !== 0) {
        // Clear table  
        tbody.html("")

        // Call table loading function with filtered table data for use
        tableLoad(filteredShape);
        
    }else
    {
        // Warning that the date entered or not entered was not found
        alert("Date not found. Please enter a value");

        // Reset to the orignal table dataset
        tableLoad(tableData);
    }  

    document.getElementById("datetime").value='';
	document.getElementById("forcity").value='';
	document.getElementById("forstate").value='';
	document.getElementById("forcountry").value='';
	document.getElementById("forshape").value='';	
};