var Bands = require("/views/Bands");

function BandView(){
	var bandView = Ti.UI.createTableView({
		top: 0,
		height: Ti.UI.FILL,
		backgroundImage: "images/Background_01.png",
		data: Bands
	});
	return bandView;
}

module.exports = BandView;