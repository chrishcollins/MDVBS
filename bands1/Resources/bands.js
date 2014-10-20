var win = Titanium.UI.currentWindow;

var Geolocation = require('geolocation');
//var Map = require('map');


var tableView = Titanium.UI.createTableView({});

var bandInfo = {};

function loadBands() {
	// Empty array "rowData" for our tableview
	var rowData = [];

	
	var xhr = Titanium.Network.createHTTPClient();

	xhr.open("GET", "http://api.bandsintown.com/artists/Family%20Force%205/events/recommended?location=Wise,VA&radius=100&app_id=CHRIS_COLLINS&api_version=2.0&format=json");
	

	// Runs the function when the data is ready for us to process
	xhr.onload = function() {
		var bands = eval('(' + this.responseText + ')');
		for (var i = 0; i < bands.length; i++) {
			var concertDate = bands[i].formatted_datetime;
			bandInfo.shortconcertDate = bands[i].datetime;
			var tour_dates = bands[i].artists.facebook_tour_dates_url;
			var smallImage = bands[i].artists.thumb_url;
			var medImage = bands[i].artists.image_url;
			var city_lbl = bands[i].venue.city;
			var state_lbl = bands[i].venue.region;
			var arena = bands[i].venue.name;
			var tour_lbl = bands[i].title;
			var tour_band = bands[i].artists.name;
			var concert_location = bands[i].formatted_location;
			var lat = bands[i].venue.latitude;
			var lon = bands[i].venue.longitude;
			var ticket_type = bands[i].ticket_type;
			var ticket_status = bands[i].ticket_status;
			

			var row = Titanium.UI.createTableViewRow({
				height : '80',
				backgroundColor : '#000',
				hasChild : 'yes'
			});

			// Create the view that will contain the text and Images
			var post_view = Titanium.UI.createView({
				height : 'auto',
				layout : 'vertical',
				top : 5,
				right : 5,
				bottom : 5,
				left : 5
			});

			// Create image view to hold profile pic
			var bandImage = Titanium.UI.createImageView({
				image : 'smallImage', // the image for the image view
				top : 2.5,
				left : 5,
				height : 70,
				width : 70
			});
			post_view.add(bandImage);

			// Create the label to hold the screen name
			var date_lbl = Titanium.UI.createLabel({
				text :concertDate,
				color : '#fff',
				left : 85,
				width : 'auto',
				top : -48,
				bottom : 2,
				height : 'auto',
				textAlign : 'left',
				font : {
					fontFamily : 'Helvetica',
					fontSize : 14,
					fontWeight : 'thin'
				}
			});
			post_view.add(date_lbl);

			// Create the label to hold the band message
			var tour_lbl = Titanium.UI.createLabel({
				text : tour_lbl,
				color : 'red',
				left : 85,
				right : 5,
				top : 10,
				bottom : 2,
				height : 'auto',
				width : 'auto',
				textAlign : 'left',
				font : {
					fontFamily : 'Helvetica',
					fontSize : 14,
					fontWeight : 'bold'
				}
			});
			post_view.add(tour_lbl);

			// Add the post view to the row
			row.add(post_view);
			// Give each row a class name
			row.className = "item" + i;
			// Add row to the rowData array
			rowData[i] = row;
		}
		// Create the table view and set its data source to "rowData" array
		tableView.data=rowData;
		tableView.backgroundImage='images/concert.jpg';
		tableView.separatorColor='red';
		

		//Add the table view to the window
		win.add(tableView);

	};
	// Send the HTTP request
	xhr.send();
}

loadBands();


function createNewWindow(params) {
	var win = Ti.UI.createWindow({
		title: params.title,
		backgroundColor: '#fff'
	});
	return win;
}

// Listen for click events.
tableView.addEventListener('click', function(){	
	var newbandWin = createNewWindow({
		title : 'tour_band',
		url : 'bandWin.js', // Link to file which will handle the code for the window
		backgroundImage : 'images/concert.jpg',
		tabBarHidden : false,
		statusBarHidden : false,
	});


	var groupView = Ti.UI.createScrollView({
		height : '100%',
		layout : 'vertical',
		backgroundColor: 'black',
		right : 5,
		left : 5
	});

	newbandWin.add(groupView);

	var band1 = Ti.UI.createImageView({
		//backgroundColor : 'red',
		image : 'smallImage',
		width : '150',
		height : '150',
		top : 50
	});
	groupView.add(band1);

	// Create a Label.
	var groupName = Ti.UI.createLabel({
		text : 'tour_band',
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
		text : this.formatted_datetime,
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
		text : this.formatted_location,
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

var Map = new MapModule();

//newbandWin.add('Map');

	//newbandWin.open();

	// Listen for click events.
	back_btn.addEventListener('click', function() {
		newbandWin.close();
	});

});