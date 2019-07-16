function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}
  
  var car1 = new Car('Eagle', 'Talon TSi', 1993);
  
  console.log(car1.make);
  // expected output: "Eagle"
  

// 当代码 new Foo(...) 执行时，会发生以下事情：

// 一个继承自 Foo.prototype 的新对象被创建。
// 使用指定的参数调用构造函数 Foo，并将 this 绑定到新创建的对象。new Foo 等同于 new Foo()，也就是没有指定参数列表，Foo 不带任何参数调用的情况。
// 由构造函数返回的对象就是 new 表达式的结果。如果构造函数没有显式返回一个对象，则使用步骤1创建的对象。（一般情况下，构造函数不返回值，但是用户可以选择主动返回对象，来覆盖正常的对象创建步骤）

// ES5构造函数
let Parent = function (name, age) {
  //1.创建一个新对象，赋予this，这一步是隐性的，
  // let this = {};
  //2.给this指向的对象赋予构造属性
  this.name = name;
  this.age = age;
  //3.如果没有手动返回对象，则默认返回this指向的这个对象，也是隐性的
  // return this;
};
const child = new Parent();

// 这应该不难理解，你应该在工作中看过类似下述代码中的操作，将this赋予一个新的变量(例如that)，最后返回这个变量：
// ES5构造函数
let Parent = function (name, age) {
  let that = this;
  that.name = name;
  that.age = age;
  return that;
};
const child = new Parent('听风是风', '26');

// 二、实现一个简单的new方法
// 构造器函数
let Parent = function (name, age) {
  this.name = name;
  this.age = age;
};
Parent.prototype.sayName = function () {
  console.log(this.name);
};
//自己定义的new方法
let newMethod = function (Parent, ...rest) {
  // 1.以构造器的prototype属性为原型，创建新对象；
  let child = Object.create(Parent.prototype);
  // 2.将this和调用参数传给构造器执行
  Parent.apply(child, rest);
  // 3.返回第一步的对象
  return child;
};
//创建实例，将构造函数Parent与形参作为参数传入
const child = newMethod(Parent, 'echo', 26);
child.sayName() //'echo';

//最后检验，与使用new的效果相同
child instanceof Parent//true
child.hasOwnProperty('name')//true
child.hasOwnProperty('age')//true
child.hasOwnProperty('sayName')//false
