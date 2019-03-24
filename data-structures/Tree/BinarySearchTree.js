// 二叉搜索树（BST）是二叉树的一种，但是它只允许你在左侧节点存储（比父节点）小的值， 在右侧节点存储（比父节点）大（或者等于）的值。
class Node {
  constructor(key) {
    this.key = key
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }
  // 插入节点
  insert(key) {
    const newNode = new Node(key)
    const insertNode = (node, newNode) => {
      if (newNode.key < node.key) {
        if (node.left === null) {
          node.left = newNode
        } else {
          insertNode(node.left, newNode)
        }
      } else {
        if (node.right === null) {
          node.right = newNode
        } else {
          insertNode(node.right, newNode)
        }
      }
    }
    if (!this.root) {
      this.root = newNode
    } else {
      insertNode(this.root, newNode)
    }
  }

  // 先序遍历(DLR)
  preOrderTeaversal(callback) {
    const preOrderTeaversalNode = (node, callback) => {
      if (node) {
        callback(node.key)
        preOrderTeaversalNode(node.left, callback)
        preOrderTeaversalNode(node.right, callback)
      }
    }
    preOrderTeaversalNode(this.root, callback)
  }

  // 中序遍历(LDR)
  inOrderTraversal(callback) {
    const inOrderTraversalNode = (node, callback) => {
      if (node) {
        inOrderTraversalNode(node.left, callback)
        callback(node.key)
        inOrderTraversalNode(node.right, callback)
      }
    }
    inOrderTraversalNode(this.root, callback)
  }

  // 后序遍历(LRD)
  postOrderTraversal(callback) {
    const postOrderTraversalNode = (node, callback) => {
      if (node) {
        postOrderTraversalNode(node.left, callback)
        postOrderTraversalNode(node.right, callback)
        callback(node.key)
      }
    }
    postOrderTraversalNode(this.root, callback)
  }

  // 获取最小值
  getMin(node) {
    const minNode = node => {
      return node ? (node.left ? minNode(node.left) : node) : null
    }
    return minNode(node || this.root)
  }

  // 获取最大值
  getMax(node) {
    const maxNode = node => {
      return node ? (node.right ? maxNode(node.right) : node) : null
    }
    return maxNode(node || this.root)
  }

  // 搜索特定值
  search(key) {
    const searchNode = (node, key) => {
      if (!node)
        return false
      if (node.key === key)
        return node
      return searchNode((key < node.key) ? node.left : node.right, key)
    }
    return searchNode(this.root, key)
  }

  // 删除最小节点
  removeMin(node) {
    const removeMinNode = node => {
      if (node && !node.left)
        return node.right
      node.left = removeMinNode(node.left)
      return node
    }
    return removeMinNode(node || this.root)
  }

  // 删除任意节点
  remove(key) {
    const removeNode = (node, key) => {
      if (!node)
        return false
      if (node.key < key) {
        node.right = removeNode(node.right, key)
      } else if (node.key > key) {
        node.left = removeNode(nde.left, v)
      } else {
        if (!node.left)
          return node.right
        if (!node.right)
          return node.left
        // 当目标节点的右子树存在时，取右子树的最小节点替换目标节点
        let min = this.getMin(node.right)
        min.right = this.removeMin(node.right)
        min.left = node.left
        node = min
      }
      return node
    }
    this.root = removeNode(this.root, key)
    return this
  }
}