// 1. 재귀함수
function solution(n, m) {
  const GCD = findGCD(n, m);
  const LCM = n * m / GCD;
  return [GCD, LCM];
}

function findGCD(a, b) {
  return a % b === 0 ? b : findGCD(b, a % b);
}

// 2. 반복문
function solution(n, m) {
  const nm = n * m;
  let GDC = m;

  // 조건식: i = n % GDC는 n % GDC 반환. 즉, GDC가 0이 아니라면
  for (let i; i = n % GDC; n = GDC, GDC = i) {}
  
  return [GDC, nm / GDC];
}

// 3. 반복문, 구조분해할당: 2보다 느리다.
function solution(n, m) {
  const nm = n * m;
  let GDC = m;
    
  for (; n % GDC; [n, GDC] = [GDC, n % GDC]) {}
    
  return [GDC, nm / GDC];
}

// https://school.programmers.co.kr/learn/courses/30/lessons/12940
