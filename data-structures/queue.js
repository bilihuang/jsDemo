class Queue {
  constructor() {
    this.queue = []
  }
  // 入列
  eQueue(item) {
    this.queue.push(item)
  }
  // 出列
  deQueue() {
    return this.queue.shift()
  }
  // 获取队头元素
  getHeader() {
    return this.queue[0]
  }
  // 队列长度
  getLength() {
    return this.queue.length
  }
  // 判空
  isEmpty() {
    return this.getLength() === 0
  }
}