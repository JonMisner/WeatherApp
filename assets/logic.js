// Variables
// ========================

var key ="a06fa296342383903aed019474f6fedd";
// var search =$(".input").val();
var queryURL ="https://api.openweathermap.org/data/2.5/weather?q="+"chicago"+"&appid="+key;
var queryDaily = "https://api.openweathermap.org/data/2.5/forecast?q="+"chicago"+"&appid="+key;



// functions
// ========================
$(document).ready(function (){

  $("#cities").empty();

  var city = [];

  $(searchBtn).on("click",function(){
    var userInput = $(this).siblings('.input').val();

    // var time = $(this).parent().attr('id');

    // localStorage.setItem(time, userInput)

  })







  function weatherDisplay(){

  // api data pull for current weather
$.ajax({
   url: queryURL,
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

function fiveDay(){

// api pull for five day
 $.ajax({
  url: queryDaily,
  method: "GET"
}).then(function(response) {
  console.log(response);
  console.log(response.list[4].dt_txt);

$("#column1").empty();
$("#column2").empty();
$("#column3").empty();
$("#column4").empty();
$("#column5").empty();

// five day arrays
var day1 = [
//  date
  response.list[4].dt_txt.split("-")[1],"<br>",
  // image
  $("<img>").attr("src", "https://openweathermap.org/img/w/" + response.list[4].weather[0].icon + ".png"), "<br>",
  // temperature
  "Temp: "+((((response.list[4].main.feels_like)-273.15)*1.8)+32).toFixed(0)+"°",
];

var day2 = [
  response.list[12].dt_txt.split("-")[1], "<br>",
  $("<img>").attr("src", "https://openweathermap.org/img/w/" + response.list[12].weather[0].icon + ".png"), "<br>",
  "Temp: "+((((response.list[12].main.feels_like)-273.15)*1.8)+32).toFixed(0)+"°",
];

var day3 = [
  response.list[20].dt_txt.split("-")[1], "<br>",
  $("<img>").attr("src", "https://openweathermap.org/img/w/" + response.list[20].weather[0].icon + ".png"), "<br>",
  "Temp: "+((((response.list[20].main.feels_like)-273.15)*1.8)+32).toFixed(0)+"°",
];

var day4 = [
  response.list[28].dt_txt.split("-")[1], "<br>",
  $("<img>").attr("src", "https://openweathermap.org/img/w/" + response.list[28].weather[0].icon + ".png"), "<br>",
  "Temp: "+((((response.list[28].main.feels_like)-273.15)*1.8)+32).toFixed(0)+"°",
];

var day5 = [
  response.list[36].dt_txt.split("-")[1], "<br>",
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
weatherDisplay();
fiveDay();



});