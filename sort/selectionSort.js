// 选择排序
// 搜索最小值与第一位交换，再搜索第二小值与第二位交换
function selectionSort(array) {
  if (!Array.isArray(array))
    return false
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex])
        minIndex = j
    }
      [array[i], array[minIndex]] = [array[minIndex], array[i]]
  }
  return array
}