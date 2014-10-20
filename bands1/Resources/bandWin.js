var Bands = require ('bands');

bandWin = function(){

/*
	var newbandWin = Ti.UI.createWindow({
		title : this.tour_band,
		url : 'bandWin.js', // Link to file which will handle the code for the window
		backgroundImage : 'images/concert.jpg',
		tabBarHidden : false,
		statusBarHidden : false,
	});*/

	var groupView = Ti.UI.createScrollView({
		height : '100%',
		layout : 'vertical',
		right : 5,
		left : 5
	});

	newbandWin.add(groupView);

	var band1 = Ti.UI.createImageView({
		//backgroundColor : 'red',
		image : 'this.smallImage',
		width : '150',
		height : '150',
		top : 50
	});
	groupView.add(band1);

	// Create a Label.
	var groupName = Ti.UI.createLabel({
		text : this.tour_band,
		color : '#fff',
		font : {
			fontFamily : 'Helvetica',
			fontSize : 24,
			fontWeight : 'bold'
		},
		height : 'auto',
		width : 'auto',
		top : 'band1.top + 170',
		textAlign : 'center'
	});

	// Add to the parent view.
	groupView.add(groupName);

	//console.log(bandInfo.concertDate);

	var tourDate = Ti.UI.createLabel({
		text : this.concertDate,
		color : '#fff',
		font : {
			fontFamily : 'Helvetica',
			fontSize : 20,
			fontWeight : 'bold'
		},
		height : 'auto',
		width : 'auto',
		top : 'groupName.top + 35',
		textAlign : 'center'
	});

	// Add to the parent view.
	groupView.add(tourDate);

	var tourCity = Ti.UI.createLabel({
		text : 'e.source.formatted_location',
		color : '#fff',
		font : {
			fontFamily : 'Helvetica',
			fontSize : 20,
			fontWeight : 'bold'
		},
		height : 'auto',
		width : 'auto',
		top : 'tourDate.top + 35',
		textAlign : 'center'
	});

	// Add to the parent view.
	groupView.add(tourCity);

	var getTickets = Ti.UI.createLabel({
		text : this.ticket_type + ' are ' + this.ticket_status,
		color : '#fff',
		font : {
			fontFamily : 'Helvetica',
			fontSize : 20,
			fontWeight : 'bold'
		},
		height : 'auto',
		width : 'auto',
		top : 'tourCity.top + 100',
		textAlign : 'center'
	});

	// Add to the parent view.
	groupView.add(getTickets);

	// Create a Button.
	var back_btn = Ti.UI.createButton({
		title : 'Back',
		borderColor : 'gray',
		backgroundColor : '#fff',
		borderRadius : 10,
		height : 30,
		width : 80,
		top : 0,
		left : 5
	});

	// Add to the parent view.
	groupView.add(back_btn);



	// Listen for click events.
	back_btn.addEventListener('click', function() {
		newbandWin.close();
	});
return bandWin;
	//newbandWin.open();
};
exports.bandWin = bandWin;
