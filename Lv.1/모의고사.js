function solution(answers) {
  const two = [2, 1, 2, 3, 2, 4, 2, 5];
  const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
  
  const a = answers.filter((v, i) => v === i % 5 + 1).length;
  const b = answers.filter((v, i) => v === two[i % 8]).length;
  const c = answers.filter((v, i) => v === three[i % 10]).length;
  
  const answer = [];
  if (a >= b && a >= c) answer.push(1);
  if (b >= a && b >= c) answer.push(2);
  if (c >= b && c >= a) answer.push(3);
  
  return answer;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/42840