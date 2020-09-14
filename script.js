$(document).ready(function () {
    console.log("document loaded");

    // let APIKey = "ce818fa75a8998632b2becab04bcb211";

    let queryURL = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid=ce818fa75a8998632b2becab04bcb211";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function (response) {

        // Log the queryURL
        console.log(queryURL);

        // Log the resulting object
        console.log(response);

        
    });





































})