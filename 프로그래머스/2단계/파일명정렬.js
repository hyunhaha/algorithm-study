function solution(files) {
  var answer = [];

  // 파일명 구분 H, N, T
  // H - 사전순. 대소문자 구별X
  // N - 맨앞 0 무시
  // T 고려하지 않고 원래 순서대로 정렬 - 어차피 T무시니까 소문자 통일 가능

  // for(var i=0; i<files.length; i++){
  //    files[i] = files[i].toLowerCase(); 
  // } //비교할 때만 바꿔야 해.

  var regexNum = /[0-9]/g;
  files.sort((a, b) => {
    // regex에 매치되는 첫 Index 찾기
    var numIndexA = a.indexOf((a.match(regexNum))[0]);
    var numIndexB = b.indexOf((b.match(regexNum))[0]);

    // Head 기준 정렬
    var sortByHead = (a.substring(0, numIndexA)).toLowerCase().localeCompare(b.substring(0, numIndexB).toLowerCase());

    //1, -1, 0
    if (sortByHead === 0) {// Num기준 정렬
      var subStrA = parseInt(a.substring(numIndexA));
      var subStrB = parseInt(b.substring(numIndexB));

      if (subStrA < subStrB) {
        return -1;
      } else if (subStrA > subStrB) {
        return 1;
      } else {
        return 0;
      }
    } else if (sortByHead === -1) { //이하 Head기준 정렬만
      return -1;
    } else {
      return 1;
    }
  });

  return files;
}
//////////////////////////////////////
function solution(files) {
  let answerWrap = files.map((file, index) => ({ file, index }));
  const compare = (a, b) => {
    const reg = /(\D*)([0-9]*)/i;
    const A = a.match(reg);
    const B = b.match(reg);
    const compareHead = A[1].toLowerCase().localeCompare(B[1].toLowerCase());
    const compareNumber = (a, b) => {
      return parseInt(a) > parseInt(b) ?
        1 : parseInt(a) < parseInt(b) ?
          -1
          : 0
    }
    return compareHead === 0 ? compareNumber(A[2], B[2]) : compareHead
  }
  answerWrap.sort((a, b) => {
    const result = compare(a.file, b.file);
    return result === 0 ? a.index - b.index : result;
  })
  return answerWrap.map(answer => answer.file);
}

////////////////////////////////
function solution(files) {
  let fileWrap = files.map((file, index) => ({ file, index }));

  const compare = (a, b) => {
    const reg = /(\D*)([0-9]*)/i;
    const A = a.match(reg);
    const B = b.match(reg);
    const compareHead = A[1].toLowerCase().localeCompare(B[1].toLowerCase());
    const compareNumber = (a, b) => {
      if (parseInt(a) > parseInt(b)) return 1;
      else if (parseInt(b) > parseInt(a)) return -1;
      else return 0
    }
    return compareHead === 0 ? compareNumber(A[2], B[2]) : compareHead;
  }
  fileWrap.sort((a, b) => {
    let result = compare(a.file, b.file)
    return result === 0 ? a.index - b.index : result
  })
  return fileWrap.map(e => e.file);
}