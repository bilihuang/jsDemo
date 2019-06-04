// 非reduce实现
const myFilter = function (fn, context) {
  let arr = Array.prototype.slice.call(this)
  let filterArr = []
  for (let i = 0; i < arr.length; i++) {
    if (!arr.hasOwnProperty(i)) continue
    fn.call(context, arr[i], i, this) && filterArr.push(arr[i])
  }
  return filterArr
}

// reduce实现
const reduceFilter = function (fn, context) {
  return this.reduce((pre, cur, index) => {
    return fn.call(context, cur, index, this) ? [...pre, cur] : [...pre]
  }, [])
}