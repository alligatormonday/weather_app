$(document).ready(function () {
    console.log("document loaded");


let APIKey = "ce818fa75a8998632b2becab04bcb211";

let location = "Tempe";

// Here we are building the URL we need to query the database
let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=" + APIKey;

// Here we run our AJAX call to the OpenWeatherMap API
$.ajax({
    url: queryURL,
    method: "GET"
})
    .then(function (response) {

        // Log the queryURL
        console.log(queryURL);

        // Log the resulting object
        console.log(response);

        $("#city").html("<h1>" + response.name + "</h1>");
        $("#wind").text("Wind Speed: " + response.wind.speed);
        $("#humidity").text("Humidity: " + response.main.humidity);
        

        // Convert the temp to fahrenheit
        let temp = (response.main.temp - 273.15) * 1.80 + 32;

        // add temp content to html
        // $("#temp").text("Temperature (K) " + response.main.temp);
        $("#temp").text("Temperature (F) " + temp.toFixed(2));

        // Log the data in the console as well
        console.log("Wind Speed: " + response.wind.speed);
        console.log("Humidity: " + response.main.humidity);
        console.log("Temperature (F): " + temp);

        let uvQuery = "http://api.openweathermap.org/data/2.5/uvi?appid=" + APIKey + "&lat=" + response.coord.lat + "&lon=" + response.coord.lon;
        console.log(uvQuery)
        
        $.ajax({
            url: uvQuery,
            method: "GET"
        })
        .then(function(res){
            console.log(res)
            $("#uv").text("UV Index: " + res.value);
            console.log("UV")

        let fiveDayQuery = "http://api.openweathermap.org/data/2.5/forecast?q=" + location + "&appid=" + APIKey;
        console.log(fiveDayQuery)

        $.ajax({
            url: fiveDayQuery,
            method: "GET"
        })
        .then(function(forecast){
            console.log(forecast)

            let list = forecast.list;
        
            for (let i = 7; i < list.length; i+8){
                // append forecast box

            }
        })
        })

        
       


    });



})

// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city
// WHEN I open the weather dashboard
// THEN I am presented with the last searched city forecast

