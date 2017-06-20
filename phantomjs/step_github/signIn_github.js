var Promise = require('es6-promise-polyfill').Promise;

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
      page.open("https://github.com/login");
    },
	
    function() {
        page.evaluate(function(obj) {
            var form = document.getElementsByTagName('form')[0];
            var btn = document.getElementsByClassName('btn-block')[0];
            form.elements["login_field"].value = '929420309@qq.com';
            form.elements["password"].value = 'wang0000';
            btn.click();

            return document.title;
        });
        loadInProgress = true;
    },
	
    function() {
        page.render('login-succ-github.png');
    },

    function() {
        page.evaluate(function(obj) {

            document.getElementsByClassName('dropdown-item')[4].click();

            return document.title;
        });
        loadInProgress = true;
    },

     function() {
        page.render('login-succ1-github.png');
    },
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