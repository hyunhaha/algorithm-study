
const arr = [3, 2, 4, 4, 2, 5, 2, 5, 5]
// let obj = arr.reduce((acc, e) => {
//   if (e in acc) {
//     acc[e]++
//   } else {
//     acc[e] = 1
//   } return acc
// }, {})
// console.log(obj)
// console.log(Object.values(obj).filter(e => e == 1))
// let map = new Map();
// arr.forEach(e => {
//   if (map.has(e)) {
//     map.set(e, map.get(e) + 1);
//   } else {
//     map.set(e, 1)
//   }
// });
// console.log(map)
// let answer = [];
// map.forEach((value, key) => {
//   if (value > 1) {
//     answer.push(value)
//   }
// })
// if (answer.length === 0) console.log(-1)
// console.log(answer)
let set = new Set([])
console.log(set)
let countOf = (arr, value) => {
  let count = 0;
  arr.forEach(e => {
    if (e === value) count++
  });
  return count
}
let answer = []
arr.forEach(e => {
  if (set.has(e)) return;
  set.add(e);
  count = countOf(arr, e);
  if (count > 1) answer.push(count);
})
console.log(set)
console.log(answer)