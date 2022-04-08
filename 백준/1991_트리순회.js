const input = [];
const inOrderArr = [];
const preOrderArr = [];
const postOrderArr = [];

const preOrder = (tree, node) => {
  preOrderArr.push(node.data);
  if (node.left !== ".") {
    preOrder(tree, tree[node.left]);
  }

  if (node.right !== ".") {
    preOrder(tree, tree[node.right]);
  }
};

const inOrder = (tree, node) => {
  if (node.left !== ".") {
    inOrder(tree, tree[node.left]);
  }
  inOrderArr.push(node.data);
  if (node.right !== ".") {
    inOrder(tree, tree[node.right]);
  }
};

const postOrder = (tree, node) => {
  if (node.left !== ".") {
    postOrder(tree, tree[node.left]);
  }

  if (node.right !== ".") {
    postOrder(tree, tree[node.right]);
  }
  postOrderArr.push(node.data);
};

const solution = input => {
  const n = Number(input.shift());
  const tree = {};
  for (let i = 0; i < n; i++) {
    const [p, l, r] = input[i].split(" ");
    tree[p] = { data: p, left: l, right: r };
  }

  inOrder(tree, tree["A"]);
  preOrder(tree, tree["A"]);
  postOrder(tree, tree["A"]);

  console.log(preOrderArr.join(""));
  console.log(inOrderArr.join(""));
  console.log(postOrderArr.join(""));
};

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    solution(input);
  });
