// https://school.programmers.co.kr/learn/courses/30/lessons/1845

// Set(O(N)보다 빠른 해시(O(1)) 테이블, 검색 트리(O(log(N)), 혹은 다른 자료구조)
function solution(nums) {
  const half = nums.length / 2;
  const set = new Set(nums).size;
  return half < set ? half : set;
}
