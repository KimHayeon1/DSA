function solution(s) {
  return s.split('').map((v, i) => {
      const firstIndex = s.indexOf(v);
      return firstIndex === i ? -1 : i - s.lastIndexOf(v, i-1);
  });
}

// https://school.programmers.co.kr/learn/courses/30/lessons/142086