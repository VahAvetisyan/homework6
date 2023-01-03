//1. You are given an array like this. Build a tree.

let nodes = [
  { parent: null, id: 0 },
  { parent: 0, id: 1 },
  { parent: 0, id: 2 },
  { parent: 1, id: 3 },
  { parent: 1, id: 4 },
  { parent: 2, id: 5 },
  { parent: 4, id: 6 },
];


function buildTree(nodes, parentId = null) {
  let tree = {};
  nodes.filter(node => node.parent === parentId).forEach(node => {
    tree[node.id] = buildTree(nodes, node.id);
  });
  return tree;
}

let tree = buildTree(nodes);
console.log(tree)



//2. You are given an array like this. Build a tree.

let nodes2 = [
  { id: 0, children: [1, 2] },
  { id: 1, children: [3, 4] },
  { id: 2, children: [5] },
  { id: 3, children: [] },
  { id: 4, children: [6] },
  { id: 5, children: [] },
  { id: 6, children: [] },
];
function buildTree2(nodes2) {
  let arr = [];
  let root = 0;
  for (const node of nodes2) {
    if (!nodes2.some(n => n.children.includes(node.id))) {
      root = node.id;
    }
  }
  arr.push({ parent: null, id: root })
  for (let i = 0; i < nodes2.length; i++) {
    for (let j = 0; j < nodes2[i].children.length; j++) {
      let obj = {}
      obj.parent = nodes2[i].id
      obj.id = nodes2[i].children[j]
      arr.push(obj)
    }
  }
  return fn(arr)
}

function fn(nodes, parentId = null) {
  let tree = {};
  nodes.filter(node => node.parent === parentId).forEach(node => {
    tree[node.id] = fn(nodes, node.id);
  });
  return tree;
}

let tree2 = buildTree2(nodes2);
console.log(tree2)




