// 3.组合继承(伪经典继承)
// 基本思路: 使用原型链实现对原型属性和方法的继承,通过借用构造函数来实现对实例属性的继承.(最常用)
// 组合原型链和借用构造函数的优点，缺点是调用两次父类构造函数，造成不必要消耗

function Father(name) {
  this.name = name
  this.colors = ["red", "blue", "green"]
}

Father.prototype.sayName = function () {
  console.log(this.name)
}

function Son(name, age) {
  Father.call(this, name) // 继承实例属性，第二次调用Father()
  this.age = age
}

Son.prototype = new Father() // 继承父类方法，第一次调用Father()
Son.prototype.constructor = Son
Son.prototype.sayAge = function () {
  console.log(this.age)
}

var instance1 = new Son("hdy", 5)
instance1.colors.push("black")
console.log(instance1.colors) // "red,blue,greeen,black"
instance1.sayName() // hdy
instance1.sayAge() // 5

var instance2 = new Son("menghan", 10)
console.log(instance2.colors) // "red,blue,greeen"
instance2.sayName() // menghan
instance2.sayAge() // 10