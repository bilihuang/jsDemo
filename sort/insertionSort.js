// 插入排序
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