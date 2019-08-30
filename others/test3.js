arr = [3, 10, 6]
let a = new Map()
let b = new Map()
for (let i = 0; i < arr.length; i++) {
  if (!a.has(arr[i])) {
    a.set(arr[i], 0)
  } else {
    a.set(arr[i], a.get(arr[i]) + 1)
  }
}
for (let x of a.keys()) {
  b.set(x, [])
}
for (let x of a.keys()) {
  for (let y of a.keys()) {
    let r = parseInt(Math.sqrt(x + y) + 0.5)
    if (r * r === x + y) {
      b.get(x).push(y)
    }
  }
}
let ans = 0
for (let x of a.keys()) {
  ans += dfs(x, arr.length - 1)
}
console.log(ans)

function dfs (x, n) {
  a.set(x, a.get(x) - 1)
  let ans = 1
  if (n !== 0) {
    ans = 0
    for (let y of b.get(x)) {
      if (a.get(y) !== 0) {
        ans += dfs(y, n - 1)
      }
    }
  }
  a.set(x, a.get(x) + 1)
  return ans
}