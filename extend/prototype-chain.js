// 1.原型链
// 缺点
// 1) 当原型链包含引用类型值的原型时，该引用类型值会被所有实例共享
// 2) 在创建子类型时，不能向超类型的构造函数中传递参数
function Father() {
  this.property = true
}

Father.prototype.getFatherValue = function () {
  return this.property
}

function Son() {
  this.sonproterty = false
}

// 继承Father
Son.prototype = new Father() // Son.prototype被重写，导致son.prototype.constructor也一同被重写
Son.prototype.getSonValue = function () {
  return this.sonproterty
}

var instance = new Son()
console.log(instance.getFatherValue()) // true