function solution(n, edge) {
  var answer = 0;
  let parents = [1];
  while (true) {
    let sibling = [];
    edge = edge.filter(e => {
      if (parents.includes(e[0]) && parents.includes(e[1])) {
        return false;
      }
      else if (parents.includes(e[0])) {
        sibling.push(e[1]);
        return false;
      }
      else if (parents.includes(e[1])) {
        sibling.push(e[0]);
        return false;
      }
      else {
        return true;
      }

    })
    if (sibling.length === 0) {
      answer = parents.length;
      break;
    }
    parents = [...new Set(sibling)]
  }
  return answer;
}