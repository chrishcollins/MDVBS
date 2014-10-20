//var localData = require("localData");
var cloud = require("cloud");

//Function that will call to API and return JSON object

exports.getData = function(latitude, longitude) {
	if (Ti.Network.online === true) {

		var remoteResponse = function() {

			Ti.API.debug(this.responseText);
			var json = JSON.parse(this.responseText);

			console.log(json);

			//localData.trash();

			for ( i = 0, j = json.response.artists.length; i < j; i++) {
				localData.insert(json.response.artists[i].name, json.response.artists[i].image_url, json.response.venue[i].city, json.response.venue[i].region, json.response.venue[i].name, json.response.venue[i].country, json.response.venue[i].latitude, json.response.venue[i].longitude);
				//localData.insert(json.response.venues[i].name, json.response.venues[i].location.city, json.response.venues[i].location.state, json.response.venues[i].location.formattedAddress[0], json.response.venues[i].contact.formattedPhone, json.response.venues[i].location.country, json.response.venues[i].location.lat, json.response.venues[i].location.lng);
			}

			//localData.getData1();
			cloud.loginAppUser(json);
		};

		//Runs if any errors occur

		var remoteError = function(e) {
			Ti.API.debug("Status: " + this.status);
			Ti.API.debug("Text: " + this.responseText);
			Ti.API.debug("Error: " + e.error);
		};

		//HTTP Client request

		var xhr = Ti.Network.createHTTPClient({
			onload : remoteResponse,
			onerror : remoteError,
			timeout : 3000
		});

		xhr.open("GET", "https://http://api.bandsintown.com/artists/Family%20Force%205/events/recommended?location=" + latitude + "," + longitude + "&radius=100&app_id=CHRIS_COLLINS&api_version=2.0&format=json");
		xhr.send();

	} else {//This is run if there is no network connection

		localData.getData1();

		alert("Please connect to a Wi-Fi network or cellular data to use this application.");

	}
}; 