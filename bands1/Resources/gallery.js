var galleryButton = Titanium.UI.createButton({
		title : "Photos",
		color : '#fff',
		backgroundImage : 'images/redbtn.png',
		height : 30,
		width : 80,
		top : 20,
		right : 15,
		zIndex : 2
	});

	groupView.add(galleryButton);

	galleryButton.addEventListener("click", function(e) {
		//Open the photo gallery
		Titanium.Media.openPhotoGallery({
			//function to call upon successful load of the gallery
			success : function(e) {
				alert("Your image was saved.");
			},
			error : function(e) {
				alert("There was an error");
			},
			cancel : function(e) {
				alert("The photo gallery was cancelled");
			},
			//Allow editing of media before success
			allowEditing : true,
			saveToPhotoGallery : true,
			mediaTypes : [Ti.Media.MEDIA_TYPE_PHOTO, Titanium.Media.MEDIA_TYPE_VIDEO]
		});

	});