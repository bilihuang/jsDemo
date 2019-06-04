// 普通实现
const myMap = function (fn, context) {
  let arr = Array.prototype.slice.call(this)
  let mapArr = []
  for (let i = 0; i < arr.length; i++) {
    // 对稀疏数组的处理，通过 hasOwnProperty 来判断当前下标的元素是否存在于数组中
    if (!arr.hasOwnproperty(i))
      continue
    // call后三个参数传入fn作为fn的参数
    mapArr.push(fn.call(context, arr[i], i, this))
  }
}

// 使用 reduce 实现数组 map 方法
const reduceMap = function (fn, context) {
  let arr = Array.prototype.slice.call(this)
  return arr.reduce((pre, cur, index) => {
    return [...pre, fn.call(context, cur, index, this)]
  }, [])
}