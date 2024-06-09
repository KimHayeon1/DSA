// https://school.programmers.co.kr/learn/courses/30/lessons/42578

// Map
// 공식: (a + 1 )(b + 1)...(n + 1) - 1
function solution(clothes) {
    let answer = 1;
    const map = new Map();
    clothes.forEach(([_, category]) => {
        map.set(category, (map.get(category) || 0) + 1)
    });
		
    for (const [_, value] of map) {
        answer *= value + 1;
    }
    
    return --answer;
}

function solution(clothes) {
    const map = new Map();
    clothes.forEach(([_, category]) => {
        map.set(category, (map.get(category) || 0) + 1)
    });
    
    return [...map.values()]
        .reduce((a, c) => a * (c + 1), 1) - 1;
}
