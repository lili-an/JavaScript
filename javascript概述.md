# javascript概述

## 基础逻辑处理部分
  
> 变量 数据类型  (数据存储)，
> 分支和循环运算符     (逻辑操作)，
> 函数   (对语言的扩展)

```javascript
var c = 12;  //num
var arr=[1,2]; //数组 Arry
var aa="11"   //字符串String
var aa={a:1,b:1} //对象 Object
var aa=function(){}  //函数function
var aa=true         //布尔 Boolean
var aa=undefind
var aa=null
```
### 运算符
```javascript
+ - * / %
=== !== < > >= <=
&& || !

```
### 分支
```javescript
if(){	
}else if(){	
}
swith(x){
	case 1:
	break;
	case 2:
	break;
	default:
	break;
}
```
### 循环
```javascript
do{
	
}while()

while(判断条件){
	return;
}
for(var i=0;i<100;i++){
	函数体
}
```
### 函数
```javascript
function XX(){	
}
var Fn=function(){
	//arguments
}
function A(c){
	this.x=c;
}
A.prototype.console=function(){
	console.log(this.x)
}
var obj=new(A1);
obj.console();

fn(a,b)
```
### 数组的常用方法
### 字符串中的常用方法
### 函数对象中的方法 
### 对象的增删改查 原型链
### 数字对象身上的方法 toFixed() 
### Math对象身上的方法

## 针对待定的用途
> 当js来浏览器运行的那一刻，
> 浏览器会创建一个window对象，
> window对象中很多的属性方法，
> 这些属性方法不用加 window.就可以使用


>从document对象开始，利用他身上的方法找出我们需要的元素（dom元素 或 dom集合）

###   选取元素

* var el=document.createElenment()
* var el=document.getElementById()
* var el=document.querySelector()

* var el=document.getElementsByClassName()
* var el=document.getElementsByTagName()
* var el=document.getElementsByName()
* var el=document.querySelectorAll()  

>经过这一步会得到一个dom元素或dom集合

>dom对象
>js会用一个很大的对象代表页面中我们看到的那个元素

>dom集合
>在一个类数组对象中存储很多dom对象构成一个集合


###   筛选元素
>从一个dom对象开始，根据逻辑关系再去寻找dom对象

* el.parentNode 
* el.parentElement
* el.lastChild
* el.lastElementChild
* el.firstChild
* el.firstElementChild
* el.children
* el.childNodes
* el.nextSibling
* el.nextElementSibling
* el.previousElementSibling 
* el.previousSibling

###  样式操作

* el.style (读取行内样式的值，设置行内样式的值)

###  获取元素信息  (HTMLElement)

* el.offsetWidth
* el.offsetHeight
* el.offsetLeft
* el.offsetTop
* el.offsetParent   //具有定位属性的父元素
* el.getBoundingClietRect()  //计算元素距离窗口的位置的 
* el.innerHTML

###  属性操作 (Element)

* el.setAttribute()
* el.getAttribute()
* el.removeAttribute()
* el.hasAttribute()
* el.className
* el.id
* el.classList

###  节点操作  (Node)
* el.appendChild()
* el.removeChild()
* el.insertBefore()
* el.cloneNode()
* el.replaceChild()

###  get 和 set在dom对象中的使用

```javascript
var obj={
	a:1,
	b:2,
	set c (x){console.log(111)}，
	get c (){ return 5}
}
```
### javascript 在任意位置的声明变量都会被提前到 作用域 的顶部