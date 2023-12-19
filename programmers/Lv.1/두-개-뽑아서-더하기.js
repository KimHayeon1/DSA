function solution(numbers) {
  const answer = [];
  for (let i = 0; i < numbers.length-1; i++) {
    for (let j = i+1; j < numbers.length; j++) {
      answer.push(numbers[i] + numbers[j]);
    }
  }
  answer.sort((a, b) => a - b);
  return [...new Set(answer)];
}

// https://school.programmers.co.kr/learn/courses/30/lessons/68644