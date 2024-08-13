const numIslands = function(grid) {
  const dfs = (i, j) => {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] !== '1') {
        return;
    }

    grid[i][j] = 0;

    dfs(i + 1, j);
    dfs(i - 1, j);
    dfs(i, j + 1);
    dfs(i, j - 1);
  };

  let count = 0;

  grid.forEach((row, i) => {
    row.forEach((item, j) => {
      if (item === '1') {
        dfs(i, j);
        count += 1;
      } 
    });
  });

  return count;
};
