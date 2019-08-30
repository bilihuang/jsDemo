let arr = [4, 2, 3, 4, 5, 6, 5, 4]
let max = 0
let tmpmax = 0
for (let i = 0; i < arr.length; i++) {
  if (!arr[i - 1] && arr[i] < arr[i + 1]) {
    tmpmax += 1
  } else if (!arr[i + 1] && arr[i] < arr[i - 1]) {
    tmpmax += 1
  } else if (arr[i] < arr[i - 1] && arr[i] < arr[i + 1]) {
    tmpmax += 1
    max = max > tmpmax ? max : tmpmax
    tmpmax = 1
  } else if (arr[i] > arr[i - 1] && arr[i] < arr[i + 1]) {
    tmpmax += 1
  } else if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
    tmpmax += 1
  } else if (arr[i] < arr[i - 1] && arr[i] > arr[i + 1]) {
    tmpmax+=1
  }
}
console.log(max)