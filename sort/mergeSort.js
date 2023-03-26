// 归并排序
// 时间复杂度O(nlogn)
function mergeSort(array) {
  if (!Array.isArray(array))
    return false
  if (array.length === 1)
    return array
  const mid = Math.floor(array.length / 2)
  const leftArray = array.slice(0, mid)
  const rightArray = array.slice(mid)
  mergeSort(leftArray)
  mergeSort(rightArray)
  return merge(mergeSort(leftArray), mergeSort(rightArray))
}

function merge(left, right) {
  let result = []
  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }
  return result.concat(left).concat(right)
}
