// from data.js
var tableData = data;

// Console.log the data from data.js
// console.log(data);

// Get a reference to the table body
var tbody = d3.select("tbody");

// Loop through the data for each table UFO object
tableData.forEach((UFOSighting) => {

    // Console.log the data to see if being read by the function
    console.log(UFOSighting);
    
    // Append one table row using "tr" tag for each UFO Sighting object
    var row = tbody.append("tr");
});

