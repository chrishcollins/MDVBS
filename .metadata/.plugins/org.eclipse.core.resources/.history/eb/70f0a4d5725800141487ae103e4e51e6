var Map = require('ti.map');
var geolocation = require('geolocation');
//var win = Titanium.UI.createWindow();

var locationOne = Map.createAnnotation({
    latitude:36.976214,
    longitude: -82.5642,
    title:"David J Prior Convocation Center",
    subtitle:'Wise, VA',
    pincolor:Map.ANNOTATION_RED,
    myid:1 // Custom property to uniquely identify this annotation.
});

var locationTwo = Map.createAnnotation({
    latitude:35.782715,
    longitude: -80.886749,
    title:"Statesville Civic Center",
    subtitle:'Statesville, NC',
    pincolor:Map.ANNOTATION_RED,
    myid:2 // Custom property to uniquely identify this annotation.
});

var mapview = Map.createView({
    mapType: Map.NORMAL_TYPE,
    region: {latitude:e.coords.latitude, longitude:e.coords.longitude,
            latitudeDelta:0.01, longitudeDelta:0.01},
    animate:true,
    regionFit:true,
    userLocation:true,
    annotations:[mountainView]
});

postView.add(mapview);
// Handle click events on any annotations on this map.
mapview.addEventListener('click', function(evt) {
    Ti.API.info("Annotation " + evt.title + " clicked, id: " + evt.annotation.myid);
});
//win.open();
exports.map = map;