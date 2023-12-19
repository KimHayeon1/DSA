function solution(lottos, win_nums) {
  const zero = lottos.filter(v => v === 0).length;
  if (zero === 6) return [1, 6];
  const low = lottos.filter(v => win_nums.includes(v)).length;
  if (low === 0) return [6, 6];
  return [7 - low - zero, 7 - low];
}

// https://school.programmers.co.kr/learn/courses/30/lessons/77484