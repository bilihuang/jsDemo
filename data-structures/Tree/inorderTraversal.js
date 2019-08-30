// 二叉树的中序遍历
// 在二叉树中，中序遍历首先遍历左子树，然后访问根结点，最后遍历右子树。

// 递归实现
const inorderTraversal = function (root, array = []) {
  if (root) {
    inorderTraversal(root.left, array)
    array.push(root.val)
    inorderTraversal(root.right, array)
  }
  return array
}

// 迭代实现
// 取根节点为目标节点，开始遍历
// 1.左孩子入栈 -> 直至左孩子为空的节点
// 2.节点出栈 -> 访问该节点
// 3.以右孩子为目标节点，再依次执行1、2、3
const inorderTraversal = function (root) {
  const result = []
  const stack = []
  let current = root
  while (current || stack.length) {
    while (current) {
      stack.push(current)
      current = current.left
    }
    current = stack.pop()
    result.push(current.val)
    current = current.right
  }
  return result
}