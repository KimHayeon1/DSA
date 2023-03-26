function solution(participant, completion) {
  const obj = {};
  participant.forEach(v => {
      obj[v] ? obj[v]++ : obj[v] = 1;
  });
  completion.forEach(v => {
      obj[v]--;
  })
  return Object.keys(obj).find((key) => obj[key] === 1)
}

// https://school.programmers.co.kr/learn/courses/30/lessons/42576