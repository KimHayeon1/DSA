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

// https://school.programmers.co.kr/learn/courses/30/lessons/155652