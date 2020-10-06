# weather_app

## Author: Joseph Jepson (alligatormonday)

## Technologies Used:

* Moment.js
* Bootstrap
* Open Weather API

## Deployment

![Image of weather application](/image/screenshot.png)

View deployment: [weather_app](https://alligatormonday.github.io/weather_app/)

## Description 

This is my submission for my sixth homework assignment for the University of Arizona - Coding Bootcamp for Full-Stack Web Development program.

In this assignment I was tasked with creating a weather forecast application that does the following: 
* User is able to search for a city, and is then presented with current and future conditions for that location
* Once a location is searched, that city is added to a search history
* Upon a given search, the city name, the date, an icon representing the weather conditions, the temperature, the humidity, the wind speed, and the UV index are displayed
    * The UV index indicates whether the conditions are favorable, moderate, or severe
* The future conditions for that city will display the date, icon of weather conditions, the temperature, and the humidity
* Upon clicking on the city in the search history, the current and future conditions for that city are displayed again
* When the application is reloaded, the most recent searched city forecast is displayed

This assignment was created entirely from scratch using HTML, JavaScript, Moment.js and the Bootstrap framework.

This was the most challenging assignment in the coding bootcamp thus far. I might have spent too much time on this assignment, especially during our first group project for our cohort. There were a few times that I was tempted to throw in the towel, but thankfully I had some help from my peers (credited below).

I learned a lot about how APIs and ajax calls function and how their responses can be pulled to render the given data. I used this assignment as a challenge to try and code some of my page dynamically using JavaScript. In the HTML code you will see part of what is displayed uses HTML, then most of the remaining page is loaded in the JS. 

The end result isn't perfect. For example, the five-date forecast doesn't display a consecutive five-days after 1800 hours (MST). I understand why. The API is using GMT, producing a weather update every three hours. My 'for loop' is structured in a way that is just ever so slightly out the range for grabbing the direct next day after this certain time for my timezone. I decided that this will have to be something that I will come back and try to fix at a later date. 

Overall, I feel really good about what my MVP ended up as by the time this assignment was due. 

## Credits

* [Andrew Moses](https://github.com/andrewmosesdrive) - collaborated on JS functionality
* [Dane Burns](https://github.com/daneburns) - trouble-shooting and working with local storage
* [Brandon Burrus](https://github.com/BrandonBurrus) - helped me with functionality of click-events
* [John Hernandez](https://github.com/jdhern17) - helped me get off to a strong start and using template literals
* [David Lovett](https://github.com/davidevanlovett) - being an awesome instructor and helping anytime I have questions
