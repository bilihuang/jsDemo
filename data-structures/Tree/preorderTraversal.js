// 二叉树前序遍历
// 前序遍历首先访问根结点然后遍历左子树，最后遍历右子树。

// 递归实现
const preorderTraversal = function (root, array = []) {
  if (root) {
    array.push(root.val)
    preorderTraversal(root.left, array)
    preorderTraversal(root.right, array)
  }
  return array
}

// 迭代实现
// 取根节点为目标节点，开始遍历
// 1.访问目标节点
// 2.左孩子入栈 -> 直至左孩子为空的节点
// 3.节点出栈，以右孩子为目标节点，再依次执行1、2、3
const preorderTraversal = function (root) {
  const result = []
  const stack = []
  let current = root
  while (current || stack.length) {
    while (current) {
      result.push(current.val)
      stack.push(current)
      current = current.left
    }
    current = stack.pop()
    current = current.right
  }
  return result
}
