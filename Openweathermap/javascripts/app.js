var main = function () {
	"use strict";

	var urlCurrent = "http://api.openweathermap.org/data/2.5/weather" +
	"?q=Bangkok&APPID=c966f85aae7f2a62b218caf34c4f07c0";

	$.getJSON(urlCurrent, function (weather) {
		console.log(weather);
		var temp = weather.main.temp;
		temp = temp - 273; // convert from Kelvins to Celcius
		temp = temp.toFixed(2); // convert to two decimal places
		console.log("The current temperature in Bangkok is: " + temp +" degrees.")
	});

};

$(document).ready(main);