// 二叉树层次遍历（广度优先遍历）
// 节点出列，将子节点入列，以此类推

const levelOrderTraversal = function (root) {
  const result = []
  const queue = []
  queue.push(root)
  while (queue.length) {
    let node = queue.shift()
    result.push(node.val)
    node.left&&queue.push(node.left)
    node.right&&queue.push(node.right)
  }
  return result
}
