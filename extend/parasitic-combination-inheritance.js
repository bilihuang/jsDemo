// 6.寄生组合式继承
// 基本思路: 不必为了指定子类型的原型而调用超类型的构造函数
// 寄生组合式继承是为了降低调用父类构造函数的开销而出现的，是组合继承的优化版

function extend(Son, Father) {
  var prototype = Object(Father.prototype) // 创建对象
  prototype.constructor = Son // 增强对象
  Son.prototype = prototype // 指定对象
}

function Father(name) {
  this.name = name
  this.colors = ["red", "blue", "green"]
}

Father.prototype.sayName = function () {
  console.log(this.name)
}

function Son(name, age) {
  Father.call(this, name) // 继承实例属性，第一次调用Father()
  this.age = age
}

extend(Son, Father) // 继承父类方法,此处把原本第一次调用Father()取消

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