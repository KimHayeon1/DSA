const graph = {
  1: [2, 3, 4],
  2: [5],
  3: [5],
  4: [],
  5: [6, 7],
  6: [],
  7: [3]
};
  
const recursiveDfs = (v, discovered = []) => {
  discovered.push(v);
  graph[v].forEach((w) => {
    if (!discovered.includes(w)) {
      discovered = recursiveDfs(w, discovered);
    }
  });
  return discovered;
};

console.log(recursiveDfs(1));
