
// Module that saves the JSON data to ACS

var Cloud = require('ti.cloud');

Cloud.debug = true;

Cloud.Users.login({
	login : 'user',
	password : '1234'
}, function(e) {
	if (e.success) {
		var user = e.users[0];
		Ti.API.info('Success:\n' + 'id: ' + user.id + '\n' + 'sessionId: ' + Cloud.sessionId + '\n' + 'first name: ' + user.first_name + '\n' + 'last name: ' + user.last_name);
	} else {
		Ti.API.info('Error:\n' + ((e.error && e.message) || JSON.stringify(e)));
	}
});

exports.loginAppUser = function(json) {

	Cloud.Objects.create({
		classname : 'bands',
		fields : {
			data : json
		}
	}, function(e) {
		if (e.success) {
			alert("Success");
		} else {
			alert('Error:\n' + ((e.error && e.message) || JSON.stringify(e)));
		}
	});

};

exports.Cloud = Cloud;