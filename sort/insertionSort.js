// 插入排序，找到元素在它前面那个序列中的正确位置
// 最好时间复杂度O(n)，最差和平均O(n^2)
function insertionSort(array) {
  if (!Array.isArray(array))
    return false
  for (let i = 1; i < array.length; i++) {
    let temp = array[i]
    let j = i - 1
    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j]
      j--
    }
    array[j + 1] = temp
  }
  return array
}
