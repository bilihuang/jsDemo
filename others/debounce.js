// 带立即执行选项的防抖函数
const debounce = (func, delay = 50, immediate = true) => {
  let timer = null
  return function () {
    if (timer) clearTimeout(timer)
    if (immediate) {
      if (!timer) func.apply(this, arguments)
      timer = setTimeout(() => {
        timer = null
      }, delay)
    } else {
      timer = setTimeout(() => {
        func.call(this, arguments)
      }, delay)
    }
  }
}