function solution(nums) {
  const half = nums.length / 2;
  const set = new Set(nums).size;
  return half < set ? half : set;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/1845