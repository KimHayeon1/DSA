// https://school.programmers.co.kr/learn/courses/30/lessons/84512

// 경우의 수에서 순번 찾는 방식

// 자리  계산식	                   값
// 0	  5⁴ + 5³ + 5² + 5¹ + 5⁰	 781
// 1	  5³ + 5² + 5¹ + 5⁰	       156
// 2  	5² + 5¹ + 5⁰	           31
// 3	  5¹ + 5⁰	                 6
// 4   	5⁰	                     1
const getWeights = (chars) => {
  return chars.map((_, i) => {
      let weight = 0;
      
      for (let j = 0; j < chars.length - i; j++) {
        weight += chars.length ** j;
      }
      
      return weight;
  });
};

function solution(word) {
  const chars = ['A', 'E', 'I', 'O', 'U'];
  const weights = getWeights(chars);
    
  let answer = 0;

  for (let i = 0; i < word.length; i++) {
    const idx = chars.indexOf(word[i]);
    answer += idx * weights[i] + 1;
  }

  return answer;
}
