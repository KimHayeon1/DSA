function solution(name, yearning, photo) {
  const obj = {};
  name.forEach((v, i) => obj[v] = yearning[i]);
  return photo.map(arr => {
      return arr.reduce((a, b) => a + (obj[b] || 0), 0);
  });
}

// https://school.programmers.co.kr/learn/courses/30/lessons/176963/solution_groups?language=javascript&type=my