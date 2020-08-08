// Variables
// ========================
var queryURL ="https://api.openweathermap.org/data/2.5/weather?q="+search+"&appid="+key;
var key ="a06fa296342383903aed019474f6fedd";
var search ="chicago";




// functions
// ========================
$.ajax({
   url: queryURL,
   method: "GET"
 }).then(function(response) {
   console.log(response);
   console.log(response.Runtime);
 });




// calling of functions
// ========================





