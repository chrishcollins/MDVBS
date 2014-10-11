var latitude;
var longitude;
var reverseGeocoder;

var geolocation = function(){
	
	Ti.Geolocation.purpose = "Your location is needed to determine current location."; 
	Ti.Geolocation.accuracy = Ti.Geolocation.ACCURACY_BEST;
	Ti.Geolocation.getCurrentPosition(function(e){
		latitude = e.coords.latitude;
		longitude = e.coords.longitude;
		var locLabel = Ti.UI.createLabel({
			color: '#fff',
			text: 'Latitude: ' + latitude + ', Longitude: ' + longitude,
			top: '10%',
			height: Ti.UI.SIZE,
			textAlign: 'center',
			font: {
				fontSize: '12',
				fontWeight: 'bold'
			}
		});
		mainView.add(locLabel);  
	}); 
}; 
exports.geolocation = geolocation;

 // try to get address
    var cityLocation = function(){
    	Titanium.Geolocation.reverseGeocoder(latitude,longitude, function(e) {
        var city;
       
        if (e.success) {
            var places = evt.places;
            if (places && places.length) {
                city = places[0].city;
            } else {
                address = "No address found";
            }
        }
        
    });
 };   
exports.cityLocation = cityLocation;