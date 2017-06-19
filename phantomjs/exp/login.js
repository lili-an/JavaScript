var page = require('webpage').create();
phantom.outputEncoding="gbk";
page.viewportSize = { width: 1366, height: 600 };
var url='https://account.xiaomi.com/pass/serviceLogin?callback=https%3A%2F%2Forder.mi.com%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252F%26sign%3DNzY3MDk1YzczNmUwMGM4ODAxOWE0NjRiNTU5ZGQyMzFhYjFmOGU0Nw%2C%2C&sid=mi_eshop&_bannerBiz=mistore&_qrsize=180'
page.open(url, function() {
    ret=page.evaluate(function() {
    	var username = document.getElementById('username');
		var password = document.getElementById('pwd');
		var btn = document.getElementById('login-button');
            username.value='929420309@qq.com'
            password.value='wang0000'
            btn.click();
        });
    setTimeout('print_cookies()',10000)
});

function print_cookies(){
    console.info(JSON.stringify(page.cookies, undefined, 4))
    phantom.exit()
}

page.render('info_test.png');