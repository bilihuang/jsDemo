// 实现instanceof
// 归遍历 right 参数的原型链，每次和 left 参数作比较，遍历到原型链终点时则返回 false，找到则返回 true
const myInstanceof=function(left,right){
  let proto=Object.getPrototypeOf(left)
  while(true){
    if(proto==null) return false
    if(proto===right.prototype) return true
    proto=Object.getPrototypeOf(proto)
  }
}