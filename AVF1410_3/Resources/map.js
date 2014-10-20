
/*
exports.createMap = function(latitude, longitude, name, city) {

	var view = Map.createAnnotation({
		latitude : latitude,
		longitude : longitude,
		title : name,
		subtitle : city,
		pincolor : Map.ANNOTATION_RED,
		myid : 1 
	});

	var mapview = Map.createView({
		mapType : Map.NORMAL_TYPE,
		region: {latitude: latitude, longitude: longitude,
		latitudeDelta:0.01, longitudeDelta:0.01},
		animate : true,
		regionFit : true,
		userLocation : true,
		top:65,
		height: 300,
		annotations : [view]
	});

	DetailView.add(mapview);

	mapview.addEventListener('click', function(evt) {
		Ti.API.info("Annotation " + evt.title + " clicked, id: " + evt.annotation.myid);
	});

}; 
*/



var MapModule = require('ti.map');


function createMap() {
	var mapview = MapModule.createView({
		mapType : MapModule.NORMAL_TYPE,
		animate : true,
		region : {
			latitude : latitude,
			longitude : longitude,
			latitudeDelta : 0.01,
			longitudeDelta : 0.01
		},
		regionFit : true,
		height : 200,
		width : 300,
		bottom : 50,
		userLocation : true
	});

	return mapview;
}

function createAnnotation(){
	var pin = MapModule.createAnnotation({
		latitude : params.lat,
		longitude : lon,
		title : title,
		pincolor : MapModule.ANNOTATION_RED,
	});

	return pin;
}

exports.createAnnotation = createAnnotation;
exports.createMap = createMap; 