
class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }
    add(data) {
        this.children.push(new Node(data));
    }
    remove(data) {
        this.children = this.children.filter(e => { e.data === data ? false : ture });
    }
}
class Tree {
    constructor() {
        this.root = null;
    }
    DFS(fn) {
        if (this.root === null) return;

        let visited = new Array(9);
        visited.fill(0);
        console.log(typeof (visited[1]));
        const list = [this.root];
        while (list.length !== 0) {

            const current = list.shift();
            list.unshift(...current.children);
            if (visited[current.data] === 0) {
                fn(current);
                visited[current.data] = 1;
            }
        }
    }
    BFS(fn) {
        if (this.root === null) return;

        let visited = new Array(9);
        visited.fill(0);
        const list = [this.root];
        while (list.length !== 0) {
            const current = list.shift();
            list.push(...current.children);
            if (visited[current.data] === 0) {
                fn(current);
                visited[current.data] = 1;
            }
        }
    }
}
const lettersDFS = [];
const lettersBFS = [];
const t = new Tree();
t.root = new Node(1);
t.root.add(2);
t.root.add(3);
t.root.add(8);
t.root.children[0].add(7);
t.root.children[0].children[0].add(6);
t.root.children[0].children[0].add(8);
t.root.children[1].add(4);
t.root.children[1].add(5);



t.BFS(node => lettersBFS.push(node.data));
t.DFS(node => lettersDFS.push(node.data));

console.log(lettersDFS);
console.log(lettersBFS);