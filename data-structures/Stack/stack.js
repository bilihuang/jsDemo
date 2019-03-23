class Stack {
  constructor() {
    this.stack = []
  }
  // 入栈
  push(item) {
    this.stack.push(item)
  }
  // 出栈
  pop() {
    this.stack.pop()
  }
  // 栈顶元素
  peek() {
    return this.stack[this.getCount() - 1]
  }
  // 栈的大小
  getCount() {
    return this.stack.length
  }
  // 判空
  isEmpty() {
    return this.getCount() === 0
  }
}