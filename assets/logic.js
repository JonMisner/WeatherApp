// Variables
// ========================

var key ="a06fa296342383903aed019474f6fedd";
// var search =$("#input").val();
var queryURL ="https://api.openweathermap.org/data/2.5/weather?q="+"chicago"+"&appid="+key;
var queryDaily = "https://api.openweathermap.org/data/2.5/forecast?q="+"chicago"+"&appid="+key;



// functions
// ========================
$(document).ready(function (){

function weatherDisplay(){

  // api data pull for current weather
$.ajax({
   url: queryURL,
   method: "GET"
 }).then(function(response) {
   console.log(response);
   console.log((((response.main.feels_like)-273.15)*1.8)+32);
   console.log(response.name);

  //weather info Variables and conversion math 
 var city = response.name;
 var temp = ((((response.main.feels_like)-273.15)*1.8)+32);
  temp = Math.round(temp);
 var humidity = response.main.humidity;
 var pressure = ((response.main.pressure)/33.863886667).toFixed(2);
 var wind = response.wind.speed;
 var high = ((((response.main.temp_max)-273.15)*1.8)+32);
  high = Math.round(high);
 var low = ((((response.main.temp_min)-273.15)*1.8)+32);
  low = Math.round(low);
 
  console.log(city);

 //Append "todays weather" 
$("#todaysWeather").append(city,"<br>", "Temperature: " + temp + "°");

// Append "detailed info"
$("#detailedInfo").append("High: "+high+ "°","<br>","Low: "+low+ "°","<br>","Humidity: "+humidity+ "%","<br>","Wind: "+wind,"<br>","Pressure: "+pressure+" in Hg");



 });

}

function fiveDay(){

// api pull for five day
 $.ajax({
  url: queryDaily,
  method: "GET"
}).then(function(response) {
  console.log(response);

// five day variables


});
}

// calling of functions
// ========================
weatherDisplay();
fiveDay();



});