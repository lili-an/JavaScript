# DOM是什么

Document Object Modal(文档对象模型)

我们在页面中看到的div，span，p，h1等等元素或文字，在Javascript眼中都是一个对象

# 从一个web应用的开发说起

第一步，从页面中去选取一个元素出来
当我们的代码在浏览器中运行时，浏览器已经帮我们创建了很多对象，
对象中有很多方法，可提供我们使用，这些东西都在一个叫做window的全局变量里

window对象中的属性，可以省略window. 去调用

选取元素，我们从window.document开始

## 选取元素方式
* document.querySelector()
* document.querySelectorAll()
* document.getElementById()
* document.getElementsByClassName()
* document.getElementsByTagName()
* document.getElementsByName()
这些方法的返回结果是什么？
前两个返回结果是一个代表了页面中某个元素的对象,我们把它叫做DOM对象；
后四个的返回结果是一个类数组对象，我们把它叫做DOM集合

```javascript
var obj={
	0：DOM对象,
    1：DOM对象,
    .....
    legth:12;
}
```

## DOM对象中常用的属性和方法
### object

* toString(); 方法可把一个逻辑值转换为字符串，并返回结果。
* valueOf();  返回指定字符在字符串中的索引位置
               比如
               String  str = "abc";
               int  index = str.valueOf('a');
               此时index就等于0

### EvaentTarget

* addEventListener(); 一个侦听事件并处理相应的函数
* removeEventListener();
* dispatchEvent(); 是EventDispatcher类的一个事件发送方法

### node

所有的dom对象都是一个节点，这三个属性用来描述节点
* nodeName
* nodeType
* nodeValue

我们能从每个dom对象身上取到自己相邻或父或子节点

采用父dom对象.xx(dom对象)这种方式
* appendChild();     box.appendChild(el).style.color="red"
* insertBefore();   父dom对象.insertBefore(插入的对象，插入谁之前)  返回值 你插入的对象
* removeChild()    var tmp=box.removeChild(el)
* replaceChild()   返回值 你替换的那个DOM对象
* hasChildNodes();  返回值 布尔类型  el.children.length
* contains();  返回值 布尔类型 //判断一个节点中包不包含另外一个节点

* cloneNode(); 返回值 dom对象 （true,false）  

* firstChild   dom集合
* lastChild    dom对象
* nextSibling  dom对象

* parentElement
* parentNode
* previousSibling
* nodeType
* nodeValue
* parentElement
* childNodes


取节点的文本内容（会过滤掉标签）
* textContent

### Element

元素和节点的区别：
 带标签的既是元素又是节点
 不代表标签的 比如div内容的文字 比如注释 他们只是节点 不是元素

从一个dom对象开始 获取子 父 兄弟 元素
* children   取一个dom对象的所有子元素 dom集合
* firstElementChild
* lastElementChild

* nextElementSibling
* previousElementSibling

对元素属性的操作(HTML元素的属性 就是头标签里的那些k="" 中的k)
* classList      add  remove 
* className      可读写
* id              可读写
* getAttribute()   $0.getAttribute("data_role")
* setAttribute()    没有返回值 只是做一个操作 
* hasAttribute()    判断元素头标签里有没有某个属性 布尔值
* removeAttribute()  没有返回值 只是做一个操作 

获取该元素的视窗坐标 或者其他和位置相关的信息
* getBoundingClientRect()   返回值{top:1,left:1,bottom:1,width:1,height:1};
* scrollLeft
* scrollTop      可读写
* clientWidth   一般用来结合document.documentElement.clientWidth
* clientHeight

* outerHTML
* tagName

快速从document中取出一个dom对象的方法
* document.body
* document.head
* document.title
* document.documentElement  获取整个HTML标签的一个dom对象

从某个dom对象开始，可以缩小范围继续去查找元素
* getElementsByClassName()
* getElementsByTagName()
* querySelector()
* querySelectorAll()

### HTMLElement

* innerHTML  可读写 能设置某个dom对象内部的html结构
   警告 不要用这种方式追加元素 el.innerHTML+='<div></div>'

* innerText  剥离标签 直接获取文本

实时获取元素信息
* offsetHeight 
* offsetWidth
* offsetTop
* offsetLeft
* offsetParent  只有定位属性（非static）的祖先元素 dom对象

操作元素的行内样式
* style  可读写的 读的时候实时获取元素行内样式的值 不会去计算css文件中定义的属性

### HTML xxx Element

* value
* checked
* focus()
* src

## 添加事件的两种方式及其区别

```javascript
1 使用onxxx
var el=document.getElementById("box");
el.onclick=(function(){
	return function(){

}
})();
el.addEventListener("click",function(e){
	console.log(e)

},false);

```
区别  1 许多H5事件并没有onxx这个版本
      2 onxx 在赋值一次 会覆盖上次赋值的那个函数，addEventListener 没有这个问题，
      它可以给一个事件添加多个函数，事件触发的时候，按照添加顺序，逐个调用处理函数；

我们给dom对象的onclick属性赋值，值为一个函数，这次赋值和普通的对象赋值不太一样
js会告诉浏览器 密切关注这个元素，如果有人点击它，帮我把这个函数运行一下，
运行函数的时候给我传一个参数，参数为一个对象，对象中要详细的记录这次点击的一些信息，
这个对象被称为 事件对象

### 自定义事件
click dblclick
```javascript
var threeclick=new Event('threeclick');
var box=document.querySelector(".box");
box.addEventListener("threeclick",function(){
	console.log(1)
})
box.dispatchEvent(threeclick)

``` 

### 阻止事件冒泡
1 从页面结构上去调整 让元素之间不再是包含关系
2 使用事件对象身上的 stopPropagation()这个函数

```javascript
yi.addEventListener("click",function(e){
	e.stopPropagation();
})
```
### 阻止事件默认行为
要从事件的根源去阻止默认行为
```javascript
yi.addEventListener("mousedown",function(e){
	e.preventDefault();
})
````

事件  事件对象 添加事件方式 不同方式之间的区别
事件流 事件默认行为 阻止事件流 事件委托 （事件委派）

不要给自定义事件添加e.stopPropagation();

回调函数 
当我们把函数x作为参数传给函数y
函数y内部有对函数x的调用
我们把函数x叫做回调函数


如果就是数组 我们遍历的时候可以使用
var arr=[1,2,3];
arr.forEach(function(v){
	console.log(v)
})
如果是类数组对象 我们遍历的时候可以使用
var arr=[];
forEach=arr.forEach;
filter=arr.filter;
var els=document.querySelectorAll("div");

forEach.call(els,function(v){
	console.log(v)   v就是dom集合中的dom对象
})


touchstart移动端点击事件