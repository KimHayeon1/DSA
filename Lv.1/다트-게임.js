function solution(dartResult) {
  let answer = [];
  const area = {'S':1, 'D':2, 'T':3};
  const arr = [];
  for (let i = 0; i < dartResult.length; i++) {
      if (dartResult[i] === '1' && dartResult[i+1] === '0') {
          arr.push(dartResult.slice(i, i+2));
          i++;
      } else {
          arr.push(dartResult[i]);
      }
  }
  for (let i = 0; i < arr.length; i+=2) {
      answer.push(arr[i] ** area[arr[i+1]]);
      if (arr[i+2] === '*') {
          answer[answer.length - 1] *= 2;
          answer[answer.length - 2] *= 2;
          i++;
      } else if (arr[i+2] === '#') {
          answer[answer.length - 1] *= -1;
          i++;
      }
  }
  return answer.reduce((a, b) => a + b);
}

// https://school.programmers.co.kr/learn/courses/30/lessons/17682