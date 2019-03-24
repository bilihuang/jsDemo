// 平衡二叉搜索树，任意节点的左右子树的高度差都不大于 1，故插入节点高度差大于1时需要通过旋转平衡
class Node {
  constructor(key) {
    this.key = key
    this.left = null
    this.right = null
    this.height = 1
  }
}

class AVL {
  constructor() {
    this.root = null
  }

  add(key) {
    const addNode = (node, key) => {
      if (!node)
        return new Node(key)
      if (node.key > key) {
        node.left = addNode(node.left, key)
      } else if (node.key < key) {
        node.right = addNode(node.right, key)
      } else {
        node.key = key
      }
      node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right))
      let factor = this.getBalance(node)

      // 当需要右旋时，根节点的左树一定比右树高度高
      if (factor > 1 && this.getBalance(node.left) >= 0) {
        return this.rightRotate(node)
      }

      // 当需要左旋时，根节点的左树一定比右树高度矮
      if (factor < -1 && this.getBalance(node.right) <= 0) {
        return this.leftRotate(node)
      }

      // 左右情况
      // 节点的左树比右树高，且节点的左树的右树比节点的左树的左树高
      if (factor > 1 && this.getBalance(node.left) < 0) {
        node.left = this.leftRotate(node.left)
        return this.rightRotate(node)
      }
      // 右左情况
      // 节点的左树比右树矮，且节点的右树的右树比节点的右树的左树矮
      if (factor < -1 && this.getBalance(node.right) > 0) {
        node.right = this.rightRotate(node.right)
        return this.leftRotate(node)
      }
      return node
    }
    this.root = addNode(this.root, key)
    return this
  }

  getHeight(node) {
    if (!node)
      return 0
    return node.height
  }

  // 平衡因子
  getBalance(node) {
    return this.getHeight(node.left) - this.getHeight(node.right)
  }

  // 节点右旋
  rightRotate(node) {
    // 新根节点
    let newRoot = node.left
    // 需要移动的节点
    let moveNode = newRoot.right
    newRoot.right = node
    node.left = moveNode
    // 更新树的高度
    node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right))
    newRoot.height = 1 + Math.max(this.getHeight(newRoot.left), this.getHeight(newRoot.right))
    return newRoot
  }

  // 节点左旋
  leftRotate(node) {
    let newRoot = node.right
    let moveNode = newRoot.left
    newRoot.left = node
    node.right = moveNode
    node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right))
    newRoot.height = 1 + Math.max(this.getHeight(newRoot.left), this.getHeight(newRoot.right))
    return newRoot
  }
}