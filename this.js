/** 
调用方式	this指向
普通函数调用	window
构造函数调用	实例对象
对象的方法调用	该方法所属对象
事件绑定方法	绑定事件对象
定时器函数	window
立即执行函数	window 
**/
var o = { name: 'andy' };
function fun (a, b) {
    console.log(this);
    console.log(a + b);
}
fun.call(o, 1, 2);

function Father(uname, age, sex) {
    this.uname = uname;
    this.age = age;
    this.sex = sex;
}

function Son(uname, age, sex) {
    Father.call(this, uname, age, sex);
}
var son = new Son('ldh', 18, 'male');
console.log(son);

// fun.apply(thisArg,[argsArray])（传递的值必须包含在数组里）
// apply()方法可以调用函数，还可以改变函数内的this指向，但它的参数必须是数组（伪数组）
var arr = [1, 33, 22, 44, 12];
var max = Math.max.apply(Math, arr);
var min = Math.min.apply(Math, arr);
console.log(max, min);

// bind()方法不会调用函数，但是可以改变函数内部this指向
// fun.bind(thisArg,arg1,arg2,....)
var o = {
    name: 'Andy'
}

function fun(a, b) {
    console.log(this);
    console.log(a + b);
}
var f = fun.bind(o, 1, 2);
f();

// 下面的小案例是点击按钮后按钮禁用，直到三秒后开启按钮
// 虽然定时器函数里的this指向window，但是bind(this)里面的this是在定时器函数的外面绑定的，这个this又在btns[i].onclick这个函数里面，所以这个this指向的就是btns对象
// 为什么这里的this.disabled的this不用btns[i]呢，因为定时器是在3秒后执行，而for循环立马执行，这里有三个按钮，则i为3
var btns = document.querySelectorAll('button');
for (var i = 0; i < btns.length; i++) {
    btns[i].onclick = function() {
        this.disabled = true;
        setTimeout(function() {
            this.disabled = false;
        }.bind(this), 3000);
    }
}
