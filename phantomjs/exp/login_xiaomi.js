var page = require('webpage').create(),
    testindex = 0,
    loadInProgress = false;

page.onLoadStarted = function() {
    loadInProgress = true;
     console.log("load started");
};

page.onLoadFinished = function() {
    loadInProgress = false;
      console.log("load finished");
};

var steps = [
    function() {
      page.open("https://account.xiaomi.com/pass/serviceLogin");
    },
	
    function() {
        page.evaluate(function(obj) {
            var form = document.getElementById("login-main-form");
            form.elements["username"].value = '';
            form.elements["pwd"].value = '';
            form.elements['login-button'].click();

            return document.title;
        });
        loadInProgress = true;
    },
	
    function() {
        page.render('login-succ-xiaomi.png');
    }
];

var interval = setInterval(function() {

    if (!loadInProgress && typeof steps[testindex] == "function") {
        steps[testindex]();
        testindex++;
    }
    if (typeof steps[testindex] != "function") {
        phantom.exit();
    }
}, 2000);