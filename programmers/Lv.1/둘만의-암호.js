//아스키 코드 풀이
function solution(s, skip, index) {
  let answer = '';
  const skipAsciis = skip.split('').map(v => v.charCodeAt());
  const sAsciis = s.split('').map(v => v.charCodeAt());
  
  sAsciis.forEach(ascii => {
    for (let i = 1; i <= index; i++) {
      ascii++;
      if (ascii > 122) ascii -= 26;
      while (skipAsciis.includes(ascii)) {
        ascii++;
        if (ascii > 122) ascii -= 26;
      }
    }
    answer += String.fromCharCode(ascii);
  });

  return answer;
}

// 풀이2
function solution(s, skip, index) {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    .filter(v => !skip.includes(v));
  let answer = '';
  for (const v of s) {
    answer += alphabet[(alphabet.indexOf(v) + index) % alphabet.length];
  }
  return answer;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/155652