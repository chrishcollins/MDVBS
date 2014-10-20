function createRow(band){
	var row = Ti.UI.createTableViewRow({
		height: Ti.UI.SIZE,
		width: Ti.UI.SIZE,
		backgroundColor: 'transparent',
		mainImage: band.mainImage,
		hasChild: band.hasChild,
		detailTitle: band.title,
		detail: band.detail,
		className: band.className,
	});
	
	var leftImage = Ti.UI.createImageView({
		image: band.leftImage,
		width: "50dp",
		left: 0
	});

	var headerLabel = Ti.UI.createLabel({
		text: band.title,
		font: {
			fontSize: "16dp",
			fontFamily: (Ti.Platform.osname === "android") ? "Helvetica" : "Helvetica",
			fontWeight: "bold" 
		},
		top: "3dp",
		left: "54dp",
		height: Ti.UI.SIZE,
		color: band.color
	});
	
	var shortDescription = Ti.UI.createLabel({
		text: band.shortDescription,
		font:{
			fontSize: "10dp",
			fontFamily: (Ti.Platform.osname === "android") ? "Aller_Lt" : "Aller Light"
		},
		color: "#fff",
		top: "24dp",
		height:"auto",
		left: "54dp"
	});
	
	row.add(leftImage);
	row.add(headerLabel);
	row.add(shortDescription);

	return row;
}

var Bands = [
	createRow({
		title: "Skillet",
		shortDescription: "Explore California our favorite way...by foot! Get outdoors and into the millions of acres of forests, desert, and spectacular scenery that California is famous for.",
		color: "#fff",
		leftImage: "/images/Skillet_small.jpg",
		mainImage: "/images/Skillet_medium.jpg",
		detail: "/detail/skillet.html",
		hasChild: true,
		className: "tableRow"
	}),
	createRow({
		title: "Family Force Five",
		shortDescription: "Looking for a little relaxation? California Calm is our hand-picked collection of incredible California Spas and therapy retreats.",
		color: "#fff",
		leftImage: "/images/FF5_small.jpg",
		mainImage: "/images/FF5_medium.jpg",
		detail: "/detail/FF5.html",
		hasChild: true,
		className: "tableRow"
	}),
	createRow({
		title: "Relient K",
		shortDescription: "Let's be honest, you have no idea what a hot spring is...do you? Well, we do, and we can't wait for you to experience the relaxing warmth of nature's hot-tubs!",
		color: "#fff",
		leftImage: "/images/RelientK_small.jpg",
		mainImage: "/images/RelientK_medium.jpg",
		detail: "/detail/RK.html",
		hasChild: true,
		className: "tableRow"
	}),
	createRow({
		title: "Manic Drive",
		shortDescription: "Whether you are a hard-core mountain biking enthusiast, or just looking for a cool way to see the many scenic towns and vistas of our great state, Cycle California has a package for you!",
		color: "#fff",
		leftImage: "/images/ManicDrive_small.jpg",
		mainImage: "/images/ManicDrive_medium.jpg",
		detail: "/detail/MD.html",
		hasChild: true,
		className: "tableRow"
	}),
	createRow({
		title: "Fireflight",
		shortDescription: "Our most wide-ranging tour option! Come explore California from the stunning deserts all the way to our beautiful coast.",
		color: "#fff",
		leftImage: "/images/Fireflight_small.jpg",
		mainImage: "/images/Fireflight_medium.jpg",
		detail: "/detail/fireflight.html",
		hasChild: true,
		className: "tableRow"
	}),
	createRow({
		title: "7eventh Time Down",
		shortDescription: "California is an amazing playground for everyone and should be experienced by all. From amazing museums, outstanding parks, Disney, and kid-centered nature experiences, Kids California truly has it all! ",
		color: "#fff",
		leftImage: "/images/7TD_small.jpg",
		mainImage: "/images/7TD_medium.jpg",
		detail: "/detail/7TD.html",
		hasChild: true,
		className: "tableRow",
	}),
	createRow({
		title: "Andy Mineo",
		shortDescription: "If you love the outdoors, nature, and the environment, California is the place for you! Our eco-Bands range from watching seals and whales to exploring the desert for rare lizards and fauna.",
		color: "#fff",
		leftImage: "/images/AndyMinoe_small.jpg",
		mainImage: "/images/AndyMinoe_medium.jpg",
		detail: "/detail/Andy.html",
		hasChild: true,
		className: "tableRow"
	}),
	createRow({
		title: "Lecrae",
		shortDescription: "California has some of the best snowboarding in the US and at Explore California we've combed the runs to offer you the best resorts in the state. ",
		color: "#fff",
		leftImage: "/images/Lecrae_small.jpg",
		mainImage: "/images/Lecrae_medium.jpg",
		detail: "/detail/lecrae.html",
		hasChild: true,
		className: "tableRow"
	}),
	createRow({
		title: "DJ Promote",
		shortDescription: "Taste of California immerses you in the serene, romantic lifestyle of the California wine country and olive groves. Along the way you'll experience some of the best cuisine in the world, all made from fresh local ingredients by some of the nation's most renown chefs.",
		color: "#fff",
		leftImage: "/images/DJPromote_small.jpg",
		mainImage: "/images/DJPromote_medium.jpg",
		detail: "/detail/dj.html",
		hasChild: true,
		className: "tableRow"
	})
];
module.exports = Bands;