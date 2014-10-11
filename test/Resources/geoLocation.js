var latitude;
var longitude;

var runGeo = function(){
	
	Ti.Geolocation.purpose = "Your location is needed to gather lat/long coords."; 
	Ti.Geolocation.getCurrentPosition(function(e){
		latitude = e.coords.latitude;
		longitude = e.coords.longitude;
		var coordinateLabel = Ti.UI.createLabel({
			color: '#fff',
			text: 'Latitude: ' + latitude + ', Longitude: ' + longitude,
			height: Ti.UI.SIZE,
			textAlign: 'center',
			font: {
				fontSize: '20dp',
				fontWeight: 'bold'
			}
		});
		//myView.add(coordinateLabel);  //myView would be a reference from app.js perhaps
	}); //getCurrentPosition closing
}; //runGeo closing
exports.runGeo = runGeo;