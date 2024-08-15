const graph = {
  1: [2, 3, 4],
  2: [5],
  3: [5],
  4: [],
  5: [6, 7],
  6: [],
  7: [3]
};

const iterativeBfs = (startV) => {
  const discovered = [startV];
  const queue = [startV];

  while (queue.length) {
    const v = queue.shift();

    graph[v].forEach(w => {
      if (!discovered.includes(w)) {
        discovered.push(w);
        queue.push(w);
      }
    });
  }

  return discovered;
};

console.log(iterativeBfs(1));
