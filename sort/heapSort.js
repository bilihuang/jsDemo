// 堆排序
class HeapSort {
	constructor(originArray) {
		this.originArray = originArray
	}

	buildHeap () {
		const arr = this.originArray
		const startIndex = arr.length
		for (let i = startIndex; i >= 1; i--) {
			this.heapify(arr, arr.length, i)
		}
		return arr
	}

	heapify (arr, len, i) {
		while (1) {
			let maxPos = i
			// 如果index i拥有叶左节点 并且左节点较大
			if (i * 2 <= len && arr[i] < arr[i * 2]) {
				maxPos = i * 2
			}
			// 如果index i拥有叶右节点 与Max节点比较大小，选出父/左/右中最大的一个
			if (i * 2 + 1 <= len && arr[maxPos] < arr[i * 2 + 1]) {
				maxPos = i * 2 + 1
			}
			if (maxPos === i)
				break
			this.swap(arr, i, maxPos)
			i = maxPos
		}
	}

	sort () {
		const arr = this.buildHeap()
		let len = arr.length - 1
		while (len > 1) {
			this.swap(arr, i, len) // 交换顶元素和最后一位。顶元素永远是最大的
			len--
			this.heapify(arr, len, 1) //剩下的元素重新建堆 直到len === 1 停止
		}
	}

	swap () {
		let temp = arr[i]
		arr[i] = arr[max]
		arr[max] = temp
	}
}