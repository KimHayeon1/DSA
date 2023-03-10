function solution(k, m, score) {
  let answer = 0;
  score.sort((a, b) => b - a);
  for (let i = m; i <= score.length; i+=m) {
      answer += score[i-1] * m;
  }
  return answer;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/135808