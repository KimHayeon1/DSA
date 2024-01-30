function solution(s) {
    const arr = s.split(' ').sort((a, b) => a - b);
    return `${arr[0]} ${arr[arr.length - 1]}`;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/12939
