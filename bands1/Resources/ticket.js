// Create a Button.
	var tktButton = Ti.UI.createButton({
		title : 'Buy Tickets',
		color : 'red',
		font : {
			fontFamily : 'Helvetica',
			fontSize : 20,
			fontWeight : 'bold'
		},
		height : 20,
		width : 200,
		top : getTickets.top + 30
	});

	// Listen for click events.
	tktButton.addEventListener('click', function() {
		alert('You will now be redirected to the ticket site.');

		var tktWebView = Ti.UI.createWebView({// Create a WebView
			url : e.row.content.ticket_url,
			height : 'auto',
			width : 'auto',

		});
		tktWebView.addEventListener('load', function(e) {
			Ti.API.info('webview loaded: ' + e.url);
		});

		// Add to the parent view.
		groupView.add(tktWebView);

		// Create a Button.
		var backButton = Ti.UI.createButton({
			title : 'Back',
			color : '#fff',
			backgroundImage : 'images/redbtn.png',
			height : 30,
			width : 80,
			top : 20,
			left : 15
		});

		// Listen for click events.
		backButton.addEventListener('click', function() {
			tktWebView.hide();
		});

		// Add to the parent view.
		tktWebView.add(backButton);

	});

	// Add to the parent view.
	groupView.add(tktButton);