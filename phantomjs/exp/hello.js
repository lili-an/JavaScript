var page = require('webpage').create();

phantom.outputEncoding="gbk";

page.open("http://es6.ruanyifeng.com/#docs/let", function(status) {

	if ( status === "success" ) {
		console.log(page.title, page.content, page.cookies); 
	} else {
		console.log("Page failed to load."); 
	}

	phantom.exit();

});