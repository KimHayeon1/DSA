function solution(numbers, hand) {
  const arr = [[0, 0], [1, 0], [2, 0],
              [0, 1], [1, 1], [2, 1],
              [0, 2], [1, 2], [2, 2],
              [0, 3], [1, 3], [2, 3]];
  let left = 10;
  let right = 12;

  return numbers.map(v => {
    if (v === 0) v = 11
    if (/^[147]$/.test(v)) {
      left = v
      return 'L'
    }
    if (/[369]/.test(v)) {
        right = v
        return 'R'
    } 
    
    const a = Math.abs(arr[v-1][0] - arr[left-1][0]) + Math.abs(arr[v-1][1] - arr[left-1][1])
    const b = Math.abs(arr[v-1][0] - arr[right-1][0]) + Math.abs(arr[v-1][1] - arr[right-1][1])
    if (a === b) {
      if (hand === "right") {
        right = v;
        return 'R'
      } else {
        left = v;
        return 'L'
      }
      }
    if (a < b) {
      left = v;
      return 'L'
    } 
    right = v
    return 'R'
  }).join('')
}

// 맨해튼 거리
// https://school.programmers.co.kr/learn/courses/30/lessons/67256