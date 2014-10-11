
var components = function(e) {

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

};

exports.components = components;