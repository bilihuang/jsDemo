
Array.prototype.mySome = function (fn, context) {
  let arr = Array.prototype.slice.call(this)
  if (!arr.length) return false
  for (let i = 0; i < arr.length; i++) {
    if (!arr.hasOwnProperty(i)) continue
    let res = fn.call(context, arr[i], i, this)
    if (res) return true
  }
  return false
}