function solution(s) {
  let answer = 0;
  let x_cnt = 0;
  let not_x_cnt = 0;
  let x = s[0];
  for (let i = 0; i < s.length; i++) {
    x === s[i] ? x_cnt++ : not_x_cnt++;
    if (x_cnt === not_x_cnt) {
      answer++;
      x = s[i+1];
    }
  }
  return x_cnt === not_x_cnt ? answer : ++answer;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/140108/solution_groups?language=javascript&type=my