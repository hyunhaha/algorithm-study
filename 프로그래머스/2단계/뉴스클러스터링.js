// function check(string) {
//   let count = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (string[i].charCodeAt(0) >= 65 && string[i].charCodeAt(0) <= 90) {
//       count++;
//     }
//   }
//   return count === 2 ? true : false;
// }
// function solution(str1, str2) {
//   var answer = 0;
//   const a = str1.toUpperCase();
//   const b = str2.toUpperCase();
//   let arr1 = [];
//   let arr2 = [];
//   for (let i = 0; i < a.length - 1; i++) {
//     if (check(a.slice(i, i + 2))) {
//       arr1.push(a.slice(i, i + 2));
//     }

//   }

//   for (let i = 0; i < b.length; i++) {
//     if (check(b.slice(i, i + 2))) {
//       arr2.push(b.slice(i, i + 2));
//     }
//   }
//   if (arr1.length === 0 && arr2.length === 0) {
//     return 65536;
//   }
//   const obj1 = arr1.reduce((acc, e) => {
//     if (e in acc) {
//       acc[e]++;
//     } else {
//       acc[e] = 1;
//     }
//     return acc;
//   }, {});
//   const obj2 = arr2.reduce((acc, e) => {
//     if (e in acc) {
//       acc[e]++;
//     } else {
//       acc[e] = 1;
//     }
//     return acc;
//   }, {});
//   let count1 = 0;
//   let count2 = 0;
//   for (let [key1, value1] of Object.entries(obj1)) {
//     for (let [key2, value2] of Object.entries(obj2)) {
//       if (key1 === key2) {
//         for (let i = 0; i < (Math.min(value1, value2)); i++) {
//           count1++;
//         }
//       }
//     }
//   }
//   count2 = arr1.length + arr2.length - count1;

//   answer = Math.floor((count1 / count2) * 65536);
//   return answer;
// }

function solution(str1, str2) {
  var answer = 0;
  let arr1 = str1.toLowerCase().split('');
  let arr2 = str2.toLowerCase().split('');
  // console.log(arr1,arr2)
  const check = (arr) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].charCodeAt() >= 97 && arr[i].charCodeAt() <= 122) {
        // console.log(arr[i])
        count++
      }
    }
    return count < 2 ? false : true;
  }
  let temp1 = [];
  let temp2 = [];
  for (let i = 0; i < arr1.length - 1; i++) {
    let len2 = arr1.slice(i, i + 2);
    // console.log(len2)
    if (check(len2)) {
      temp1.push(len2.join(''))
    }
  }
  for (let i = 0; i < arr2.length - 1; i++) {
    let len2 = arr2.slice(i, i + 2);
    // console.log(len2)
    if (check(len2)) {
      temp2.push(len2.join(''))
    }
  }
  if (temp1.length === 0 && temp2.length === 0) return 65536
  console.log(temp1)
  console.log(temp2)
  let same = 0;
  let all = 0;
  let temp = new Set([...temp1, ...temp2])
  temp.forEach(item => {
    let a = temp1.filter(e => e === item).length;
    let b = temp2.filter(e => e === item).length;
    same += Math.min(a, b);
    all += Math.max(a, b);
  })
  return Math.floor((same / all) * 65536);
}

function solution(str1, str2) {
  const check = (arr) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].charCodeAt() >= 97 && arr[i].charCodeAt() <= 122) {
        count++
      }
    }
    return count < 2 ? false : true;
  }

  const running = (s) => {
    let arr = s.toLowerCase().split('');
    let temp = []
    for (let i = 0; i < arr.length - 1; i++) {
      let len2 = arr.slice(i, i + 2);
      if (check(len2)) {
        temp.push(len2.join(''));
      }
    }
    return temp
  }
  let arr1 = running(str1);
  let arr2 = running(str2);

  if (arr1.length === 0 && arr2.length === 0) return 65536;

  let same = 0;
  let all = 0;
  let temp = new Set([...arr1, ...arr2])
  temp.forEach(item => {
    let a = arr1.filter(e => e === item).length;
    let b = arr2.filter(e => e === item).length;
    same += Math.min(a, b);
    all += Math.max(a, b);
  })
  return Math.floor((same / all) * 65536);
}
