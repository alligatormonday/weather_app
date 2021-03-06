// Load the document
$(document).ready(function () {
    console.log("document loaded");

    // Grabs last city searched from local storage
    const lastSearch = window.localStorage.getItem("city");

    // weatherSearch function with the last searched city from local storage
    weatherSearch(lastSearch);

    // City Search/Submit Form
    const citySearch = `<form id="city-form" class="form-inline my-2 my-lg-0 pt-2">
    <input id="city-input" class="form-control mr-sm-2" type="text" placeholder="City">
    <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
    </form>`;

    // Append 'citySearch' to the HTML
    $("#city-search").append(citySearch);

    // Renders current date for the 'day of' forecast
    $("#date").text(moment().format("[Forecast for:] MM/D/YYYY"));

    // Click-Event to search for a city
    $("#city-form").on("submit", function (event) {
        event.preventDefault();

        // Clear the previous five day forecast
        $("#forecast-container").empty();
        let location = $("#city-input").val();
        weatherSearch(location);

        // Creates dynamic buttons for searched cities and appends to HTML
        let forecastHistory = $("<button>");
        forecastHistory.addClass("saved-location my-2 btn btn-primary");
        forecastHistory.text($("#city-input").val());
        $(".location-list").append(forecastHistory);
        console.log(forecastHistory);
    });

    // Renders previous searched cities forecast on click
    $(document).on("click", ".saved-location", function (event) {
        event.preventDefault();
        $("#forecast-container").empty();
        let locEle = $(this).text();
        weatherSearch(locEle);
    });

    // Function for all AJAX calls and additional dynamic code
    function weatherSearch(location) {
        let APIKey = "ce818fa75a8998632b2becab04bcb211";

        // Saves most recent searched city to local storage
        window.localStorage.setItem("city", location)

        // AJAX call to the OpenWeatherMap API
        let queryURL =
            "https://api.openweathermap.org/data/2.5/weather?q=" +
            location +
            "&appid=" +
            APIKey +
            "&units=imperial";

        $.ajax({
            url: queryURL,
            method: "GET",
        }).then(function (response) {
            console.log(queryURL);
            console.log(response);

            // Current day forecast
            $("#city").html("<h3>" + response.name + "</h3>");
            $("#temp").text("Temperature: " + response.main.temp + " ℉");
            $("#humidity").text("Humidity: " + response.main.humidity + "%");
            $("#wind").text("Wind Speed: " + response.wind.speed + " MPH");
            console.log("Wind Speed: " + response.wind.speed);
            console.log("Humidity: " + response.main.humidity);
            console.log("Temperature: " + temp);

            let uvQuery =
                "https://api.openweathermap.org/data/2.5/uvi?appid=" +
                APIKey +
                "&lat=" +
                response.coord.lat +
                "&lon=" +
                response.coord.lon;
            console.log(uvQuery);

            $.ajax({
                url: uvQuery,
                method: "GET",
            }).then(function (res) {
                console.log(res);
                // UV Index color for favorable, moderate, and severe
                $("#uv").attr("class","");
                $("#uv").text("UV Index: " + res.value);
                if (res.value < 3) {
                    $("#uv").addClass("text-white bg-success");
                } else if (res.value >= 3 && res.value < 6) {
                    $("#uv").addClass("text-white bg-danger");
                } else if (res.value >= 6) {
                    $("#uv").addClass("text-white bg-primary");
                }
                console.log("UV");

                // Five-Day Forecast
                let fiveDayQuery =
                    "https://api.openweathermap.org/data/2.5/forecast?q=" +
                    location +
                    "&appid=" +
                    APIKey +
                    "&units=imperial";
                console.log(fiveDayQuery);

                $.ajax({
                    url: fiveDayQuery,
                    method: "GET",
                }).then(function (forecast) {
                    console.log(forecast);

                    let list = forecast.list;
                    console.log(list);

                    for (let i = 7; i < list.length; i++) {
                        // Five-Day Forecast cards
                        if ((i + 1) % 8 === 0) {
                            console.log(i);
                            // create variables from forecast data
                            let forecastDate = list[i].dt_txt.split(" ")[0];
                            // console.log(typeof forecastDate);

                            // Dynamic code to render five-day forecast response
                            let forecastDay = `<div class="text-white bg-warning mb-3" style="max-width: 20rem;">
                            <div class="card-body">
                            <h4 class="card-title">${forecastDate}</h4>
                            <img alt="weather icon" src="https://openweathermap.org/img/wn/${list[i].weather[0].icon}@2x.png"/>
                            <p class="card-text">Temperature: ${list[i].main.temp} ℉</p>
                            <p class="card-text">Humidity: ${list[i].main.humidity}%</p>
                            </div>
                            </div>`;
                            console.log(forecastDay);

                            // append template to html
                            $("#forecast-container").append(forecastDay);
                        }
                    }
                });
            });
        });
    }
});