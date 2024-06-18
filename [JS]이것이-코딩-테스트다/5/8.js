const dfs = (graph, v, visited) => {
  visited[v] = true;
  console.log(v + ' ');

  for (const i of graph[v]) {
    if (!visited[i]) {
      dfs(graph, i, visited);
    }
  }
}

const graph = [
  [],
  [2, 3, 8],
  [1, 7],
  [1, 4, 5],
  [3, 5],
  [3, 4],
  [7],
  [2, 6, 8],
  [1, 7]
]

const visited = Array(9).fill(false);

dfs(graph, 1, visited);

// 1 -> [2, 3, 8] [false, true, false * 7]
// 2 -> [1, 7] [false, true * 2, false * 6]
// 7 -> [2, 6, 8] [false, true * 2, false * 4, true, false]
// 6 -> [7] [false, true * 2, false * 3, true * 2, false]
// 8 -> [1, 7] [false, true * 2, false * 3, true * 3]
// 3 -> [1, 4, 5] [false, true * 3, false * 2, true * 3]
// 4 -> [3, 5] [false, true * 4, false, true * 3]
// 5 -> [3, 4] [false, true * 8]
