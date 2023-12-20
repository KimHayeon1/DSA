function find_parent(parent, x) {
  if (parent[x] !== x) {
    parent[x] = find_parent(parent, parent[x]);
  }

  return parent[x];
}

function union_parent(parent, a, b) {
  a = find_parent(parent, a);
  b = find_parent(parent, b);

  if (a > b) {
    parent[b] = a;
  } else {
    parent[a] = b;
  }
}

const [v, e] = prompt().split(' ').map(str => parseInt(str));
const parent = Array.from({length: v + 1}, () => 0);
const edges = [];
let result = 0;

for (let i = 1; i <= v; i++) {
  parent[i] = i;
}

for (let i = 0; i < e; i++) {
  const [a, b, cost] = prompt().split(' ').map(str => parseInt(str));
  edges.push([cost, a, b]);
}

edges.sort((a, b) => a[0] - b[0]);

for (const edge of edges) {
  const [cost, a, b] = edge;

  if (find_parent(parent, a) !== find_parent(parent, b)) {
    union_parent(parent, a, b);
    result += cost;
  }
}

console.log(result);
