const input = [];
const arr = [];
let count = 0;

const inOrder = (tree, node) => {
  if (node.left !== "-1") {
    inOrder(tree, tree[node.left]);
  }
  arr.push(node.data);
  if (node.right !== "-1") {
    inOrder(tree, tree[node.right]);
  }
};

const inOrder2 = (tree, node) => {
  if (node.left !== "-1") {
    inOrder2(tree, tree[node.left]);
    count += 1;
  }
  if (arr[arr.length - 1] === node.data) {
    console.log(count);
    return;
  }
  count += 1;
  if (node.right !== "-1") {
    inOrder2(tree, tree[node.right]);
    count += 1;
  }
};

const solution = input => {
  const n = Number(input.shift());
  const tree = {};
  for (let i = 0; i < n; i++) {
    const [p, l, r] = input[i].split(" ");
    tree[p] = { data: p, left: l, right: r };
  }
  inOrder(tree, tree["1"]);
  inOrder2(tree, tree["1"]);
};

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    solution(input);
  });
