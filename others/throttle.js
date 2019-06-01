// 时间戳+定时器版: 实现第一次触发可以立即响应，结束触发后也能有响应
const throttle = (func, delay = 50) => {
  let timer = null
  let previous = 0
  return function(args) {
    let now = Date.now()
    let remaining = delay - (now - previous); //距离规定时间,还剩多少时间
    clearTimeout(timer);  //清除之前设置的定时器
    if (remaining <= 0) {
      fun.apply(this, arguments)
      previous = Date.now()
    } else {
      timer = setTimeout(() => {
        fun.apply(this, arguments)
      }, remaining) //因为上面添加的clearTimeout.实际这个定时器只有最后一次才会执行
    }
  }
}