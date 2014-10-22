var Map = require('ti.map');
var geolocation = require('geolocation');


	////////////////starts map//////////////////////////////

	function createMap() {

		var annotation = Map.createAnnotation({
			latitude : e.row.content.venue.latitude, //params.lat,
			longitude : e.row.content.venue.longitude, //lon
			title : e.row.content.artists[0].name, //title,
			subtitle : e.row.content.venue.name,
			image : 'images/guitar',
			animate : true,
			customProperty : "Concert"
		});

		var mapview = Map.createView({
			mapType : Map.NORMAL_TYPE,
			animate : true,
			region : {
				latitude : e.row.content.venue.latitude, //'latitude',
				longitude : e.row.content.venue.longitude, //'longitude',
				latitudeDelta : 0.05,
				longitudeDelta : 0.05
			},
			regionFit : false,
			height : 300,
			width : 400,
			bottom : 320,
			userLocation : true,
			annotations : [annotation]
		});
		mapview.selectAnnotation(annotation);

		groupView.add(mapview);
		return mapview;
	}


module.exports = createMap;