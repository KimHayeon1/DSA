// dfs 스택
function solution(n, computers) {
  const dfs = (i) => {
    const stack = [i];

    while (stack.length) {
      const x = stack.pop();
      computers.forEach((_, y) => {
        if (computers[x][y] === 1) {
          computers[x][y] = computers[y][x] = 0;
          stack.push(y);
        }
      });
    }
      
  };

  let answer = 0;
  computers.forEach((_, i) => {
    if (computers[i][i] === 1) {
      dfs(i);
      answer += 1;
    } 
  });
  return answer;
}
