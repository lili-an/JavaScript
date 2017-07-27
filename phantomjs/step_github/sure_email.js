function filterN() {
	var num = Math.random().toString().slice(3, 12);
	if(num[0] == '0') {
		num = num.replace('0', '3');
	}
	return num+'@qq.com';
}