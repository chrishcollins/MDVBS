var myCloud = require('Cloud');
var geo = require('geoLocation');
geo.runGeo();
var myWeather = 'http://api.wunderground.com/api/c8aa6df478360a59/forecast/q/autoip.json';

//create remote response
var remoteResponse = function(e) {
	if (Ti.Network.online) {
		var json = JSON.parse(this.responseText);
		myCloud.loginAppUser(json);
		var hiTemp = json.forecast.simpleforecast.forecastday[0].high.fahrenheit;
		var loTemp = json.forecast.simpleforecast.forecastday[0].low.fahrenheit;
		var humidity = json.forecast.simpleforecast.forecastday[0].avehumidity;
		var dayconditions = json.forecast.simpleforecast.forecastday[0].conditions;
		//var hiTemp = json.forecast.simpleforecast.forecastday[0].high.fahrenheit;
		var day = json.forecast.txt_forecast.forecastday[0].title;
		var forecast = json.forecast.txt_forecast.forecastday[0].fcttext;
		var weatherImage = json.forecast.txt_forecast.forecastday[0].icon_url;
		var daytwo = json.forecast.txt_forecast.forecastday[2].fcttext;
		var daytwoTitle = json.forecast.txt_forecast.forecastday[2].title;
		var daytwoImage = json.forecast.txt_forecast.forecastday[2].icon_url;
		var daythree = json.forecast.txt_forecast.forecastday[4].fcttext;
		var daythreeTitle = json.forecast.txt_forecast.forecastday[4].title;
		var daythreeImage = json.forecast.txt_forecast.forecastday[4].icon_url;
		var dayfour = json.forecast.txt_forecast.forecastday[6].fcttext;
		var dayfourTitle = json.forecast.txt_forecast.forecastday[6].title;
		var dayfourImage = json.forecast.txt_forecast.forecastday[4].icon_url;
		var todaysdate = json.forecast.simpleforecast.forecastday[0].date.monthname + " " + json.forecast.simpleforecast.forecastday[0].date.day;
		
		
	
// Create an ImageView.
var appNameView = Ti.UI.createImageView({
	image : 'images/Simply.png',
	width : '60%',
	height : '14%',
	top : '1%',
	left : '20%'
});

/*	var thisCity = Ti.UI.createLabel({
 text : thiscity,
 font : {
 fontSize : 30,
 fontWeight : 'bold'
 },
 color : '#fff',
 top : '11%',
 textAlign : 'center'
 }); */

var dayOne = Ti.UI.createLabel({
	text : day + ", " + todaysdate,
	font : {
		fontSize : 20,
		fontWeight : 'bold'
	},
	color : '#fff',
	top : '16%',
	left : '5%',
	textAlign : 'left'
});

var dayConditions = Ti.UI.createLabel({
	text : dayconditions,
	font : {
		fontSize : 14,
		fontWeight : 'thin'
	},
	color : '#fff',
	top : '18%',
	left : '5%',
	textAlign : 'center'
});

var hiLo = Ti.UI.createLabel({
	text : 'hi ' + hiTemp + ' /' + " lo " + loTemp + '° F',
	color : '#fff',
	top : '20%',
	left : '5%',
	font : {
		fontSize : 14,
		fontWeight : 'thin'
	},
	textAlign : 'center'
});

var avghumidity = Ti.UI.createLabel({
	text : 'Avg Humidity ' + humidity + '%',
	color : '#fff',
	top : '22%',
	left : '5%',
	font : {
		fontSize : 14,
		fontWeight : 'thin'
	},
	textAlign : 'center'
});

var dayOneImage = Ti.UI.createImageView({
	image : weatherImage,
	backgroundColor : '#fff',
	borderRadius : 5,
	top : '16%',
	height : '7%',
	width : '10%',
	right : '15%',
	imageAlign : 'center'
});

var dayOneForecast = Ti.UI.createLabel({
	text : forecast,
	font : {
		fontSize : 20,
		fontWeight : 'bold'
	},
	color : '#fff',
	top : '28%',
	textAlign : 'center',
	width : '90%'
});

var dayTwoView = Ti.UI.createView({
	backgroundColor : '#000000',
	opacity : '0.1',
	borderRadius : '10',
	top : '50%',
	left : '5%',
	height : '24%',
	width : '28%'
});

var dayTwo = Ti.UI.createLabel({
	text : daytwo,
	font : {
		fontSize : 11
	},
	color : '#fff',
	top : '54%',
	left : '5%',
	textAlign : 'center',
	width : '27%'
});

var dayTwoTitle = Ti.UI.createLabel({
	text : daytwoTitle,
	font : {
		fontSize : 15,
		fontWeight : 'bold'
	},
	color : '#fff',
	top : '50.5%',
	left : '8%',
	textAlign : 'center',
	width : '20%'
});

var dayTwoImage = Ti.UI.createImageView({
	image : daytwoImage,
	backgroundColor : '#fff',
	borderRadius : 5,
	top : '75%',
	height : '5%',
	width : '7%',
	left : '15.5%',
	imageAlign : 'center'
});

var dayThreeView = Ti.UI.createView({
	backgroundColor : '#000000',
	opacity : '0.1',
	borderRadius : '10',
	top : '50%',
	left : '36%',
	height : '24%',
	width : '28%'
});

var dayThree = Ti.UI.createLabel({
	text : daythree,
	font : {
		fontSize : 11
	},
	color : '#fff',
	top : '54%',
	left : '36%',
	textAlign : 'center',
	width : '27%'
});

var dayThreeTitle = Ti.UI.createLabel({
	text : daythreeTitle,
	font : {
		fontSize : 15,
		fontWeight : 'bold'
	},
	color : '#fff',
	top : '50.5%',
	left : '40%',
	textAlign : 'center',
	width : '20%'
});

var dayThreeImage = Ti.UI.createImageView({
	image : daythreeImage,
	backgroundColor : '#fff',
	borderRadius : 5,
	top : '75%',
	height : '5%',
	width : '7%',
	left : '47%',
	imageAlign : 'center'
});

var dayFourView = Ti.UI.createView({
	backgroundColor : '#000000',
	opacity : '0.1',
	borderRadius : '10',
	top : '50%',
	right : '5%',
	height : '24%',
	width : '28%'
});
var dayFour = Ti.UI.createLabel({
	text : dayfour,
	font : {
		fontSize : 11
	},
	color : '#fff',
	top : '54%',
	right : '5%',
	textAlign : 'center',
	width : '27%'
});

var dayFourTitle = Ti.UI.createLabel({
	text : dayfourTitle,
	font : {
		fontSize : 15,
		fontWeight : 'bold'
	},
	color : '#fff',
	top : '50.5%',
	right : '8%',
	textAlign : 'center',
	width : '20%'
});

var dayFourImage = Ti.UI.createImageView({
	image : dayfourImage,
	backgroundColor : '#fff',
	borderRadius : 5,
	top : '75%',
	height : '5%',
	width : '7%',
	right : '15.5%',
	imageAlign : 'center'
});


mainView.add(dayOneImage);
mainView.add(dayOne);
mainView.add(dayOneForecast);
mainView.add(hiLo);
mainView.add(avghumidity);
mainView.add(appNameView);
mainView.add(dayTwo);
mainView.add(dayTwoImage);
mainView.add(dayTwoView);
mainView.add(dayTwoTitle);
mainView.add(dayThree);
mainView.add(dayThreeTitle);
mainView.add(dayThreeImage);
mainView.add(dayThreeView);
mainView.add(dayFour);
mainView.add(dayFourTitle);
mainView.add(dayFourImage);
mainView.add(dayFourView);
mainView.add(dayConditions);



		
	} else {
		Ti.API.debug('Status: ' + this.status);
		Ti.API.debug('Response: ' + this.responseText);
		Ti.API.debug('Error: ' + e.error);
		alert('There was an error retreiving data.  Please try again later.');
	};
};
var remoteError = function(e) {
	Ti.API.debug('Status: ' + this.status);
	Ti.API.debug('Response: ' + this.responseText);
	Ti.API.debug('Error: ' + e.error);
	alert('You must be connected to a network.');
};
var xhr = Ti.Network.createHTTPClient({
	onload : remoteResponse,
	onerror : remoteError,
	timeout : 50000
});
xhr.open('GET', myWeather);
xhr.send();


