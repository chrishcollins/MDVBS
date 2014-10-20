function geo() {
	var latitude, longitude;

if (Ti.Geolocation.locationServicesEnabled) {
    Titanium.Geolocation.purpose = 'Get Current Location';
    Ti.Geolocation.accuracy = Ti.Geolocation.ACCURACY_BEST;
    Titanium.Geolocation.getCurrentPosition(function(e) {
        if (e.error) {
            Ti.API.error('Error: ' + e.error);
        } else {
            Ti.API.info(e.coords);
        }
    });
} else {
    alert('Please enable location services');
}


}
exports.geoloco = geo;