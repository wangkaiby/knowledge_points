// 一、原型链继承：

function SuperType(){
    this.colors = ["red", "blue", "green"];
    this.jump =function (){
        console.log('self')
    }
    
}
SuperType.prototype.Fun = function(){
   console.log('proto')
};
function SubType(){
}


//继承了SuperType
SubType.prototype = new SuperType();
var instance1 = new SubType();
instance1.colors.push("black");
instance1.jump() // 'self'
instance1.Fun() // 'proto'

console.log(instance1.colors); //"red,blue,green,black"
var instance2 = new SubType();
console.log(instance2.colors); //"red,blue,green,black"

// 优点：能通过instanceOf和isPrototypeOf的检测

// 注意：给原型添加方法的语句一定要放在原型替换SubType.prototype = new SuperType();之后

// 缺点:(1)SuperType中的属性(不是方法)也变成了SubType的prototype中的公用属性，
//      如上面例子中的color属性，可以同时被instance1和instance2修改
//      (2)创建子类型的时候，不能像父类型的构造函数中传递参数。
