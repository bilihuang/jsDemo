/**
 * 简单的promise实现
 */

// 定义promise三状态
const PENDING = 'pending'
const RESOLVED = 'resolve'
const REJECTED = 'rejected'

function MyPromise(fn) {
  const that = this // 用于获取正确的 this 对象
  that.state = PENDING
  that.value = null // 用于保存 resolve 或者 reject 中传入的值
  that.resolvedCallbacks = [] // 用于保存then中的回调
  that.rejectedCallbacks = []

  function resolve(value) {
    if (that.state == PENDING) {
      that.state = RESOLVED
      that.value = value
      // 将value作为回调参数
      that.resolvedCallbacks.map(cb => cb(that.value))
    }
  }

  function reject(value) {
    if (that.state == PENDING) {
      that.state = RESOLVED
      that.value = value
      that.rejectedCallbacks.map(cb => cb(that.value))
    }
  }

  try {
    fn(resolve, reject)
  } catch (e) {
    reject(e)
  }
}

MyPromise.prototype.then = function (onFulfilled, onRejected) {
  const that = this
  // 判断是否为函数，否则创建函数
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v
  onRejected = typeof onRejected === 'function' ? onRejected : r => {
    throw r
  }

  // 状态还是PENDING则把相应的函数压入回调队列
  if (that.state === PENDING) {
    that.resolvedCallbacks.push(onFulfilled)
    that.rejectedCallbacks.push(onRejected)
  }

  // 如果状态变更，则执行相应函数
  if (that.state === RESOLVED) {
    onFulfilled(that.value)
  }

  if (that.state === REJECTED) {
    onRejected(that.value)
  }
}

