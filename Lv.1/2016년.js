function solution(a, b) {
    const day = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED'];
    const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let answer = b;
    for (let i = 0; i < a-1; i++) {
        answer += month[i];
    }
    return day[answer % 7];
}

// https://school.programmers.co.kr/learn/courses/30/lessons/12901