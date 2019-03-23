class SqQueue {
  constructor(length) {
    this.length = new Array(length)
    // 头尾指针初始位置-1
    this.first = -1
    this.last = -1
  }
  // 入列
  enQueue(value) {
    if (this.isFull())
      return '队列已满，入列失败'
    if (this.isEmpty())
      this.first = 0
    this.last = (this.last + 1) % this.queue.length
    this.queue[this.last] = value
    return '入列成功'
  }
  // 出列
  deQueue() {
    if (this.isEmpty())
      return '队列为空，出列失败'
    let value = this.queue[this.first]
    if (this.first == this.last) {
      this.first = -1
      this.last = -1
      return value
    }
    this.first = (this.first + 1) % this.queue.length
    return value
  }
  // 获取队头元素
  Front() {
    if (this.isEmpty()) {
      return '队列为空，出列失败'
    } else {
      return this.queue[this.first]
    }
  }
  // 获取队尾元素
  Rear() {
    if (this.isEmpty()) {
      return '队列为空，获取失败'
    } else {
      return this.queue[this.last]
    }
  }
  // 判空
  isEmpty() {
    return this.first === -1
  }
  // 判满
  isFull() {
    return this.first === (this.last + 1) % this.enQueue.length
  }
}