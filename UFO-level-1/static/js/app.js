// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Loop through the data for each table UFO object
tableData.forEach((UFOSighting) => {

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

// Select the button
var button = d3.select("#filter-btn");

// Create event handlers 
button.on("click", dateFilter);


// Complete the event handler function for the form
function dateFilter() {


    // Prevent the page from refreshing
    d3.event.preventDefault();

  
    // Clear table  
    tbody.html("")
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    // Console check
    console.log(inputValue);

    // Filter on input value property of the input element
    var filteredData = tableData.filter(datevalue => datevalue.datetime === inputValue);
  
    // Console check
    console.log(filteredData);


    // Loop through the filter data for each table UFO object
    filteredData.forEach((NewSighting) => {

        // Append one table row using "tr" tag for each UFO Sighting object
        var row = tbody.append("tr");
        
        // Loop for appending the values for each newly created row
        Object.entries(NewSighting).forEach(([key, value]) => {
        
            // Append a cell to the row for each value using "td" tag
            var cell = row.append("td");
             // Append the text from each value to the row
            cell.text(value);
        });
    });
    
};