function solution(number, limit, power) {
  const divisor = Array(number).fill(0);
  for (let i = 1; i <= number; i++) {
      for (let j = 1; j <= Math.sqrt(i); j++) {
          if (j * j === i) divisor[i-1]++;
          else if (i % j === 0) divisor[i-1] += 2;
      }
  }
  return divisor.reduce((a, b) => a + (b > limit ? power : b));
}

// https://school.programmers.co.kr/learn/courses/30/lessons/136798