const checkCol = (x, y, arr) => {
  let result = false;
  if (y === 0) {
    result = true;
  } else if (arr.find(e => e[0] === x && e[1] === y - 1 && e[2] === 0) !== undefined) {
    result = true;
  } else if (arr.find(e => e[0] === x - 1 && e[1] === y && e[2] === 1) !== undefined) {
    result = true;
  } else if (arr.find(e => e[0] === x && e[1] === y && e[2] === 1) !== undefined) {
    result = true;
  }
  return result
}
const buildCol = (x, y, arr) => {
  if (checkCol(x, y, arr) === true) {
    arr.push([x, y, 0])
    console.log(`${x},${y} 기둥 설치`)
  } else {
    console.log(`${x},${y} 기둥 설치 실패`)
  } return arr
}
const checkFloor = (x, y, arr) => {
  let result = false
  if (arr.find(e => e[0] === x && e[1] === y - 1 && e[2] === 0) !== undefined) {
    result = true
  } else if (arr.find(e => e[0] === x + 1 && e[1] === y - 1 && e[2] === 0) !== undefined) {
    result = true
  } else if ((arr.find(e => e[0] === x - 1 && e[1] === y && e[2] === 1) !== undefined) && (arr.find(e => e[0] === x + 1 && e[1] === y && e[2] === 1) !== undefined)) {
    result = true;
  }
  return result
}
const buildFloor = (x, y, arr) => {
  if (checkFloor(x, y, arr) === true) {
    arr.push([x, y, 1])
    console.log(`${x},${y} 보 설치`)
  } else {
    console.log(`${x},${y} 보 설치 실패`)
  }
}
const deleteCol = (x, y, arr) => {
  let temp = [...arr];
  let find = temp.find(e => e[0] === x && e[1] === y && e[2] === 0);
  let idx = temp.indexOf(find);
  temp.splice(idx, 1);
  let result = true;
  for (let i = 0; i < temp.length; i++) {
    if (temp[i][2] === 0) {
      if (!checkCol(temp[i][0], temp[i][1], temp)) {
        result = false
      }
    } else {
      if (!checkFloor(temp[i][0], temp[i][1], temp)) {
        result = false
      }
    }
  }
  if (result) {
    arr.splice(idx, 1);
    console.log(`${x},${y} 기둥 삭제`)
  } else {
    console.log(`${x},${y} 기둥 삭제 실패`)
  }
}
const deleteFloor = (x, y, arr) => {
  let temp = [...arr];
  let find = temp.find(e => e[0] === x && e[1] === y && e[2] === 1);
  let idx = temp.indexOf(find);
  temp.splice(idx, 1);
  let result = true;
  for (let i = 0; i < temp.length; i++) {
    if (temp[i][2] === 0) {
      if (!checkCol(temp[i][0], temp[i][1], temp)) {
        result = false
      }
    } else {
      if (!checkFloor(temp[i][0], temp[i][1], temp)) {
        result = false
      }
    }
  }
  if (result) {
    arr.splice(idx, 1);
    console.log(`${x},${y} 보 삭제`)
  } else {
    console.log(`${x},${y} 보 삭제 실패`)
  }
}
function solution(n, build_frame) {
  var arr = [];
  for (let i = 0; i < build_frame.length; i++) {
    if (build_frame[i][2] === 0 && build_frame[i][3] === 0) {//기둥 삭제
      deleteCol(build_frame[i][0], build_frame[i][1], arr)

    } else if (build_frame[i][2] === 0 && build_frame[i][3] === 1) {//기둥설치
      buildCol(build_frame[i][0], build_frame[i][1], arr)
    }
    else if (build_frame[i][2] === 1 && build_frame[i][3] === 0) {//보 삭제
      deleteFloor(build_frame[i][0], build_frame[i][1], arr)
    } else if (build_frame[i][2] === 1 && build_frame[i][3] === 1) {//보 설치
      buildFloor(build_frame[i][0], build_frame[i][1], arr)
    }

  }
  arr.sort((a, b) => {
    if (a[0] > b[0]) {
      return 1
    } else if (a[0] < b[0]) {
      return -1
    } else {
      if (a[1] > b[1]) {
        return 1
      } else if (a[1] < b[1]) {
        return -1
      } else {
        if (a[2] > b[2]) {
          return 1
        } else if (a[2] < b[2]) {
          return -1
        }
      }
    }
  })
  return arr;
}