function solution(sizes) {
  sizes = sizes.map(v => v[0] > v[1] ? [v[0], v[1]] : [v[1], v[0]]);
  const max = sizes.reduce((a, b) => [Math.max(a[0], b[0]), Math.max(a[1], b[1])])
  return max[0] * max[1];
}

// https://school.programmers.co.kr/learn/courses/30/lessons/86491