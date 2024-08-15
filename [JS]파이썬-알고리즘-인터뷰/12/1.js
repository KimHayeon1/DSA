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

// 스택으로 변형
const recursiveDfs = (startV) => {
  const discovered = [startV];
  const stack = [startV];

  while (stack.length) {
    const v = stack.pop();
    graph[v].forEach((w) => {
      if (!discovered.includes(w)) {
        discovered.push(w);
        stack.push(w);
      }
    });
  }
  
  return discovered;
};
