function solution(n, m, section) {
  let answer = 0;
  let a = section[0];
  section.forEach(v => {
      if (v > a+m-1) {
          answer++;
          a = v;
      }
  });
  return ++answer;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/161989