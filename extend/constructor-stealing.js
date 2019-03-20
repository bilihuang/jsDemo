/**
 * 2.借用构造函数继承(经典继承)
 * 基本思想:即在子类型构造函数的内部调用超类型构造函数
 * 解决了原型链的两大问题:
 * 1)保证了原型链中引用类型值的独立,不再被所有实例共享
 * 2)子类型创建时也能够向父类型传递参数.
 * 
 * 缺点：方法都在构造函数中定义, 因此函数复用也就不可用了.而且超类型(如Father)中定义的方法,对子类型而言也是不可见的.
 */

function Father() {
  this.colors = ["red", "blue", "green"]
}

function Son() {
  // 继承了Father，并向父类传递参数
  Father.call(this)
}

var instance1 = new Son()
instance1.colors.push("black")
console.log(instance1.colors) // "red,blue,green,black"

var instance2 = new Son()
console.log(instance2.colors) // "red,blue,green"  可见引用类型是独立的