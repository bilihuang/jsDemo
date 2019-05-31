// 堆排序

const heapBottomUp = (array) => {
  for (let i = Math.floor(array.length / 2); i > 0; i--) {
    let k = i
    let v = array[k - 1]
    let heap = false
    while (!heap && 2 * k <= array.length) {
      let j = 2 * k
      if (j < array.length)
        if (array[j - 1] < array[j])
          j++
      if (v >= array[j - 1]) {
        heap = true
      } else {
        array[k - 1] = array[j - 1]
        k = j
        array[k - 1] = v
      }
    }
  }
  return array
}

Array.prototype.heap_sort = function() {
	var arr = this.slice(0);
	function swap(i, j) {
		var tmp = arr[i];
		arr[i] = arr[j];
		arr[j] = tmp;
	}

	function max_heapify(start, end) {
		//建立父節點指標和子節點指標
		var dad = start;
		var son = dad * 2 + 1;
		if (son >= end)//若子節點指標超過範圍直接跳出函數
			return;
		if (son + 1 < end && arr[son] < arr[son + 1])//先比較兩個子節點大小，選擇最大的
			son++;
		if (arr[dad] <= arr[son]) {//如果父節點小於子節點時，交換父子內容再繼續子節點和孫節點比較
			swap(dad, son);
			max_heapify(son, end);
		}
	}

	var len = arr.length;
	//初始化，i從最後一個父節點開始調整
	for (var i = Math.floor(len / 2) - 1; i >= 0; i--)
		max_heapify(i, len);
	//先將第一個元素和已排好元素前一位做交換，再從新調整，直到排序完畢
	for (var i = len - 1; i > 0; i--) {
		swap(0, i);
		max_heapify(0, i);
	}

	return arr;
};
var a = [3, 5, 3, 0, 8, 6, 1, 5, 8, 6, 2, 4, 9, 4, 7, 0, 1, 8, 9, 7, 3, 1, 2, 5, 9, 7, 4, 0, 2, 6];
console.log(a.heap_sort());