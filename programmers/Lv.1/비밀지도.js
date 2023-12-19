function solution(n, arr1, arr2) {
  const or = arr1.map((v, i) => v | arr2[i]);
  const binary = or.map(value => {
      return value
          .toString(2)
          .padStart(n, '0')
          .replace(/0/g, ' ')
          .replace(/1/g, '#');
  });
  return binary;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/17681