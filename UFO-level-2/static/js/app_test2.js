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

    // Filter on input value Date Scenarios
    var filteredD = tableData.filter(tableinfo => tableinfo.datetime === inputValueDate);
    
    var filteredDCi = tableData.filter(tableinfo => tableinfo.datetime === inputValueDate && tableinfo.city === inputValueCity);
    var filteredDSt = tableData.filter(tableinfo => tableinfo.datetime === inputValueDate && tableinfo.state === inputValueState);
    var filteredDCo = tableData.filter(tableinfo => tableinfo.datetime === inputValueDate && tableinfo.country === inputValueCountry);
    var filteredDSh = tableData.filter(tableinfo => tableinfo.datetime === inputValueDate && tableinfo.shape === inputValueShape);
    
    var filteredDCiSt = tableData.filter(tableinfo => tableinfo.datetime === inputValueDate && tableinfo.city === inputValueCity && tableinfo.state === inputValueState);
    var filteredDCiCo = tableData.filter(tableinfo => tableinfo.datetime === inputValueDate && tableinfo.city === inputValueCity && tableinfo.country === inputValueCountry);
    var filteredDCiSh = tableData.filter(tableinfo => tableinfo.datetime === inputValueDate && tableinfo.city === inputValueCity && tableinfo.shape === inputValueShape);
    var filteredDStCo = tableData.filter(tableinfo => tableinfo.datetime === inputValueDate && tableinfo.state === inputValueState && tableinfo.country === inputValueCountry);
    var filteredDStSh = tableData.filter(tableinfo => tableinfo.datetime === inputValueDate && tableinfo.state === inputValueState && tableinfo.shape === inputValueShape);
    var filteredDCoSh = tableData.filter(tableinfo => tableinfo.datetime === inputValueDate && tableinfo.country === inputValueCountry && tableinfo.shape === inputValueShape);

    var filteredDCiStCo = tableData.filter(tableinfo => tableinfo.datetime === inputValueDate && tableinfo.city === inputValueCity && tableinfo.state === inputValueState && tableinfo.country === inputValueCountry);
    var filteredDCiStSh = tableData.filter(tableinfo => tableinfo.datetime === inputValueDate && tableinfo.city === inputValueCity && tableinfo.state === inputValueState && tableinfo.shape === inputValueShape);
    var filteredDCiCoSh = tableData.filter(tableinfo => tableinfo.datetime === inputValueDate && tableinfo.city === inputValueCity && tableinfo.country === inputValueCountry && tableinfo.shape === inputValueShape);
    var filteredDStCoSh = tableData.filter(tableinfo => tableinfo.datetime === inputValueDate && tableinfo.state === inputValueState && tableinfo.country === inputValueCountry && tableinfo.shape === inputValueShape);
    
    var filteredDCiStCoSh = tableData.filter(tableinfo => tableinfo.datetime === inputValueDate && tableinfo.city === inputValueCity && tableinfo.state === inputValueState && tableinfo.country === inputValueCountry && tableinfo.shape === inputValueShape);
    
     // Filter on input value City Scenarios
    var filteredCi = tableData.filter(tableinfo => tableinfo.city === inputValueCity);

    var filteredCiSt = tableData.filter(tableinfo => tableinfo.city === inputValueCity && tableinfo.state === inputValueState);
    var filteredCiCo = tableData.filter(tableinfo => tableinfo.city === inputValueCity && tableinfo.country === inputValueCountry);
    var filteredCiSh = tableData.filter(tableinfo => tableinfo.city === inputValueCity && tableinfo.shape === inputValueShape);

    var filteredCiStCo = tableData.filter(tableinfo => tableinfo.city === inputValueCity && tableinfo.state === inputValueState && tableinfo.country === inputValueCountry);
    var filteredCiStSh = tableData.filter(tableinfo => tableinfo.city === inputValueCity && tableinfo.state === inputValueState && tableinfo.shape === inputValueShape);
    var filteredCiCoSh = tableData.filter(tableinfo => tableinfo.city === inputValueCity && tableinfo.country === inputValueCountry && tableinfo.shape === inputValueShape);

    var filteredCiStCoSh = tableData.filter(tableinfo => tableinfo.city === inputValueCity && tableinfo.state === inputValueState && tableinfo.country === inputValueCountry && tableinfo.shape === inputValueShape);
    
     // Filter on input value State Scenarios
    var filteredSt = tableData.filter(tableinfo => tableinfo.state === inputValueState);

    var filteredStCo = tableData.filter(tableinfo => tableinfo.state === inputValueState && tableinfo.country === inputValueCountry);
    var filteredStSh = tableData.filter(tableinfo => tableinfo.state === inputValueState && tableinfo.shape === inputValueShape);

    var filteredStCoSh = tableData.filter(tableinfo => tableinfo.state === inputValueState && tableinfo.country === inputValueCountry && tableinfo.shape === inputValueShape);

     // Filter on input value Country Scenarios
    var filteredCo = tableData.filter(tableinfo => tableinfo.country === inputValueCountry);

    var filteredCoSh = tableData.filter(tableinfo => tableinfo.country === inputValueCountry && tableinfo.shape === inputValueShape);
     
    // Filter on input value Shape Scenario
    var filteredSh = tableData.filter(tableinfo => tableinfo.shape === inputValueShape);
    

    // If statements for above scenarios
    
    //dates
    if(filteredD.length !== 0) {tbody.html(""); tableLoad(filteredD);}
    
    if(filteredDCi.length !== 0) {tbody.html(""); tableLoad(filteredCi);}
    if(filteredDSt.length !== 0) {tbody.html(""); tableLoad(filteredSt);}
    if(filteredDCo.length !== 0) {tbody.html(""); tableLoad(filteredCo);}
    if(filteredDSh.length !== 0) {tbody.html(""); tableLoad(filteredSh);}

    if(filteredDCiSt.length !== 0) {tbody.html(""); tableLoad(filteredDCiSt);}
    if(filteredDCiCo.length !== 0) {tbody.html(""); tableLoad(filteredDCiCo);}
    if(filteredDCiSh.length !== 0) {tbody.html(""); tableLoad(filteredDCiSh);}
    if(filteredDStCo.length !== 0) {tbody.html(""); tableLoad(filteredDStCo);}
    if(filteredDStSh.length !== 0) {tbody.html(""); tableLoad(filteredDStSh);}
    if(filteredDCoSh.length !== 0) {tbody.html(""); tableLoad(filteredDCoSh);}

    if(filteredDCiStCo.length !== 0) {tbody.html(""); tableLoad(filteredDCiStCo);}
    if(filteredDCiStSh.length !== 0) {tbody.html(""); tableLoad(filteredDCiStSh);}
    if(filteredDCiCoSh.length !== 0) {tbody.html(""); tableLoad(filteredDCiCoSh);}
    if(filteredDStCoSh.length !== 0) {tbody.html(""); tableLoad(filteredDStCoSh);}

    if(filteredDCiStCoSh.length !== 0) {tbody.html(""); tableLoad(filteredDCiStCoSh);}

    //cities
    if(filteredCi.length !== 0) {tbody.html(""); tableLoad(filteredCi);}

    if(filteredCiSt.length !== 0) {tbody.html(""); tableLoad(filteredCiSt);}
    if(filteredCiCo.length !== 0) {tbody.html(""); tableLoad(filteredCiCo);}
    
    if(filteredCiStCo.length !== 0) {tbody.html(""); tableLoad(filteredCiStCo);}
    if(filteredCiStSh.length !== 0) {tbody.html(""); tableLoad(filteredCiStSh);}
    if(filteredCiCoSh.length !== 0) {tbody.html(""); tableLoad(filteredCiCoSh);}

    if(filteredCiStCoSh.length !== 0) {tbody.html(""); tableLoad(filteredCiStCoSh);}

    //States
    if(filteredSt.length !== 0) {tbody.html(""); tableLoad(filteredCi);}

    if(filteredStCo.length !== 0) {tbody.html(""); tableLoad(filteredStCo);}
    if(filteredStSh.length !== 0) {tbody.html(""); tableLoad(filteredStSh);}
    
    if(filteredStCoSh.length !== 0) {tbody.html(""); tableLoad(filteredStCoSh);}

    //Country
    if(filteredCo.length !== 0) {tbody.html(""); tableLoad(filteredCo);}
    if(filteredCoSh.length !== 0) {tbody.html(""); tableLoad(filteredCoSh);}

    //Shape
    if(filteredSh.length !== 0) {tbody.html(""); tableLoad(filteredSh);}    

    document.getElementById("datetime").value='';
	document.getElementById("forcity").value='';
	document.getElementById("forstate").value='';
	document.getElementById("forcountry").value='';
	document.getElementById("forshape").value='';	
};