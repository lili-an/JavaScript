// var Promise = require('es6-promise-polyfill').Promise;

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
            form.elements["login_field"].value = '707865641@qq.com';
            form.elements["password"].value = 'wang0000';
            btn.click();

            return document.title;
        });
        loadInProgress = true;
    },
	
    function() {
        page.render('login-succ-github.png');
    },

    // function() {
    //     page.evaluate(function(obj) {

    //         document.getElementsByClassName('dropdown-item')[4].click();

    //         return document.title;
    //     });
    //     loadInProgress = true;
    // },

    //  function() {
    //     page.render('login-succ1-github.png');
    // },

    function() {
      page.open("https://github.com/lili-an/zhihu-daily");
    },

    function() {
        page.render('login-succ2-github.png');
    },

    function() {
        page.evaluate(function(obj) {

            document.getElementsByClassName('js-toggler-target')[0].click();

            return document.title;
        });
        loadInProgress = true;
    },

    function() {
        page.render('login-star-github.png');
    },

    // function() {
    //     page.evaluate(function(obj) {

    //         document.getElementsByClassName('js-site-search-focus')[0].value = 'lili-an';
    //         document.getElementsByClassName('js-site-search-form')[0].submit();

    //         return document.title;
    //     });
    //     loadInProgress = true;
    // },

    //  function() {
    //     page.render('login-search-github.png');
    // },

    //  function() {
    //     page.evaluate(function(obj) {

    //         document.getElementsByClassName('js-site-search-focus')[0].value = 'lili-an';
    //         document.getElementsByClassName('js-site-search-form')[0].submit();

    //         return document.title;
    //     });
    //     loadInProgress = true;
    // },

    //  function() {
    //     page.render('login-searchResult-github.png');
    // },
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