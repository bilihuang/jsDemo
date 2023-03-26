// 冒泡排序
// 比较相邻元素，第一个大于第二个则交换
// 数组本身有序，最好时间复杂度O(n)
// 最坏和品骏时间复杂度O(n^2)
function bubbleSort (array) {
  if (!Array.isArray(array))
    return false
  for (let i = array.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]]
      }
    }
  }
  return array
}
