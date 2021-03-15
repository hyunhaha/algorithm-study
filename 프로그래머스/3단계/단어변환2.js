
function solution(begin, target, words) {
  var answers = [];
  if (!words.includes(target)) return 0;
  function dfs(word, level, visit) {
    console.log('word', word)
    console.log('level:', level)
    for (let i = 0; i < word.length; i++) {
      let slicedWord = sliceWord(word, i);
      console.log('sliced word', slicedWord)
      let temp = words.filter((e) => !visit.includes(e) && sliceWord(e, i) === slicedWord);
      console.log('temp', temp)
      if (temp.includes(target)) {
        answers.push(level + 1);
        console.log('end!!', answers)
        return;
      }
      if (temp) {
        temp.forEach((e, idx) => {
          let visited = [...visit]
          visited.push(e);
          dfs(e, level + 1, visited)
        })
      }


    }
  }
  dfs(begin, 0, [])
  return answers.length < 1 ? 0 : Math.min(...answers);
}
function sliceWord(word, i) {
  let wordArr = word.split('')
  wordArr.splice(i, 1);
  return wordArr.join('');
}
