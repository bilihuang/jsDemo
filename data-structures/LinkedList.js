// 链表实现

class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.length = 0
  }

  // 追加元素
  append(element) {
    const node = new Node(element)
    let current = null
    if (this.head === null) {
      this.head = node
    } else {
      current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = node
    }
    this.length++
  }

  // 插入元素到任意位置
  insert(position, element) {
    if (position >= 0 && position < this.length) {
      const node = new Node(element)
      let current = this.head
      let previous = null
      let index = 0
      if (position === 0) {
        node.next = current
        this.head = node
      } else {
        while (index++ < position) {
          previous = current
          current = current.next
        }
        node.next = current
        previous.next = node
      }
      this.length++
      return true
    }
    return false
  }

  // 移除指定位置元素
  removeAt(position) {
    if (position > -1 && position < this.length) {
      let current = this.head
      let previous = null
      let index = 0
      if (position === 0) {
        this.head = current.next
      } else {
        while (index++ < position) {
          previous = current
          current = current.next
        }
        previous.next = current.next
      }
      this.length--
      return current.element
    }
    return null
  }

  // 查找元素下标
  findIndex(element) {
    let current = this.head
    let index = -1
    while (current) {
      if (element === current.element) {
        return index + 1
      }
      index++
      current = current.next
    }
    return -1
  }

  remove(element){
    const index= this.findIndex(element)
    this.removeAt(index)
    return index
  }

  // 判空
  isEmpty() {
    return this.length === 0
  }
}