// Variables
// ========================

var key ="&appid=a06fa296342383903aed019474f6fedd";
var queryURL ="https://api.openweathermap.org/data/2.5/weather?q=";
var queryDaily = "https://api.openweathermap.org/data/2.5/forecast?q=";



// functions
// ========================
$(document).ready(function (){

  // $("#cities").empty();
  var userInput;
  var cities = [];

  $("#searchBtn").on("click",function(){
    event.preventDefault();
    userInput = $("#cityInput").val();
    $("#cityInput").val("");

    console.log(userInput);
    console.log(cities);
    
    weatherDisplay(userInput);
    fiveDay(userInput);
  
  })


  function weatherDisplay(userInput){

  // api data pull for current weather
$.ajax({
   url: queryURL+userInput+key,
   method: "GET"
 }).then(function(response) {
   console.log(response);
   console.log((((response.main.feels_like)-273.15)*1.8)+32);
   console.log(response.name);

  $("#todaysWeather").empty();
  $("#detailedInfo").empty();

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
 var image = $("<img>").attr("src", "https://openweathermap.org/img/w/" + response.weather[0].icon + ".png")

  console.log(city);

  
 $("#cities").append("<button class='is-info'>"+city);
 
 $("#cities").on("click",function(){
  event.preventDefault();
  $("#cities").empty();
 
  cities[0] = userInput
  userInput = $("#cityInput").val();
    $("#cityInput").val("");
 
  weatherDisplay(userInput);
  fiveDay(userInput);
  console.log(cities);
  });
 
 
  //Append "todays weather" 

$("#todaysWeather").append(city,"<br>", "Temperature: " + temp + "°", "<br>", image);
// $("#todaysWeather").append(image);

// Append "detailed info"
$("#detailedInfo").append(
  "High: "+high+ "°","<br>",
  "Low: "+low+ "°","<br>",
  "Humidity: "+humidity+ "%","<br>",
  "Wind: "+wind,"<br>",
  "Pressure: "+pressure+" in Hg");

 });

}

function fiveDay(userInput){

// api pull for five day
 $.ajax({
  url: queryDaily+userInput+key,
  method: "GET"
}).then(function(response) {
  console.log(response);
  console.log(response.list[4].dt_txt);
  console.log(response.list[4].dt_txt.split("").slice(5,10).join(""));

$("#column1").empty();
$("#column2").empty();
$("#column3").empty();
$("#column4").empty();
$("#column5").empty();

// five day arrays
var day1 = [
//  date
response.list[4].dt_txt.split("").slice(5,10).join(""),"<br>",
  // image
  $("<img>").attr("src", "https://openweathermap.org/img/w/" + response.list[4].weather[0].icon + ".png"), "<br>",
  // temperature
  "Temp: "+((((response.list[4].main.feels_like)-273.15)*1.8)+32).toFixed(0)+"°",
];

var day2 = [
  response.list[12].dt_txt.split("").slice(5,10).join(""), "<br>",
  $("<img>").attr("src", "https://openweathermap.org/img/w/" + response.list[12].weather[0].icon + ".png"), "<br>",
  "Temp: "+((((response.list[12].main.feels_like)-273.15)*1.8)+32).toFixed(0)+"°",
];

var day3 = [
  response.list[20].dt_txt.split("").slice(5,10).join(""), "<br>",
  $("<img>").attr("src", "https://openweathermap.org/img/w/" + response.list[20].weather[0].icon + ".png"), "<br>",
  "Temp: "+((((response.list[20].main.feels_like)-273.15)*1.8)+32).toFixed(0)+"°",
];

var day4 = [
  response.list[28].dt_txt.split("").slice(5,10).join(""), "<br>",
  $("<img>").attr("src", "https://openweathermap.org/img/w/" + response.list[28].weather[0].icon + ".png"), "<br>",
  "Temp: "+((((response.list[28].main.feels_like)-273.15)*1.8)+32).toFixed(0)+"°",
];

var day5 = [
  response.list[36].dt_txt.split("").slice(5,10).join(""), "<br>",
  $("<img>").attr("src", "https://openweathermap.org/img/w/" + response.list[36].weather[0].icon + ".png"), 
  "Temp: "+((((response.list[36].main.feels_like)-273.15)*1.8)+32).toFixed(0)+"°",
];

// append forecast
$("#column1").append(day1);
$("#column2").append(day2);
$("#column3").append(day3);
$("#column4").append(day4);
$("#column5").append(day5);


});
}

// calling of functions
// ========================
// weatherDisplay();
// fiveDay();



});