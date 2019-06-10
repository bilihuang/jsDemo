// 实现class语法
function myClass (subType, superType) {
  subType.prototype = Object.create(superType.prototype, {
    constructor: {
      enumerable: false,
      configurable: true,
      writable: true,
      value: subType
    }
  })
  // 使用 Object.setPrototypeOf 将 superType 设置为 subType 的原型，从父类中继承静态方法和静态属性
  Object.setPrototypeOf(subType, superType)
}