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

 dom对象  dom集合

###   选取元素
  * var one=document.getElementById()
  * var one=document.getElementsByClassName()
  * var one=document.getElementsByTagName()
  * var one=document.getElementsByTagName("*")
###   筛选元素
  * getchilds 
  * 
  * 
  * 
###   样式操作
  * one.style.height=""
  * one.length
  * one.innerHTML
###   获取位置信息
  * 
  * 
  * 
  * 
  * 
  * 
###   属性操作
  *
  * 
  * 
  * 
###   节点操作 