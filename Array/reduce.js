// 实现reduce
const myReduce = function (fn, initVal) {
  let arr = Array.prototype.slice.call(this)
  let res, startIndex
  if (initVal === undefined) {
    // 找到第一个非空元素
    for (let i = 0; i < arr.length; i++) {
      if (!arr.hasOwnProperty(i)) continue
      startIndex = i
      res = arr[i]
      break
    }
  } else {
    res = initVal
  }
  for (let i = ++startIndex || 0; i < arr.length; i++) {
    if (!arr.hasOwnProperty(i)) continue
    res = fn.call(null, res, arr[i], i, this)
  }
  return res
}
