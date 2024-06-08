// https://school.programmers.co.kr/learn/courses/30/lessons/42576

// Map
function solution(participant, completion) {
    const map = new Map();

    participant.forEach((v, i) => {
        map.set(v, (map.get(v) || 0) + 1);
        
        if (i < completion.length) {
            const name = completion[i];
            map.set(name, (map.get(name) || 0) - 1);
        }
    });
    
    for (const [key, value] of map) {
        if (value === 1) {
            return key;
        }
    }
}
