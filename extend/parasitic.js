// 5.寄生式继承
// 任何能够返回新对象的函数都适用于此模式
// 注意: 使用寄生式继承来为对象添加函数, 会由于不能做到函数复用而降低效率;这一点与构造函数模式类似.

function createAnother(original) {
  var clone = object(original) // 通过调用object函数创建一个新对象
  clone.sayHi = function () { // 以某种方式来增强这个对象
    console.log("hi")
  }
  return clone // 最后返回这个对象
}