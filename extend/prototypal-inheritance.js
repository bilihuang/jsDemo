// 4.原型继承
// object.create() 接收两个参数:
// 1) 一个用作新对象原型的对象
// 2) (可选的)一个为新对象定义额外属性的对象
// 原型式继承中, 包含引用类型值的属性始终都会共享相应的值, 就像使用原型模式一样

var person = {
  name: "hdy",
  friends: ["Van", "Bill", "Frank"]
}

var anotherPerson = Object.create(person)
anotherPerson.name = "fz"
anotherPerson.friends.push("Rob")

var yetAnotherPerson = Object.create(person)
yetAnotherPerson.name = "hsf"
yetAnotherPerson.friends.push("Linda")

console.log(person.friends)