// https://school.programmers.co.kr/learn/courses/30/lessons/42839

function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    
    return true;
}

function solution(numbers) {
    const visited = Array(numbers.length).fill(false);
    let temp = ''; // 숫자를 생성하기 위한
    const set = new Set();

    function dfs(depth, length) { // 현재 탐색의 깊이, 생성할 숫자의 길이
        if (depth === length) {
            set.add(parseInt(temp));
            return;
        } 

        // 가능한 모든 조합 탐색
        [...numbers].forEach((v, i) => {
            if (!visited[i]) {    
                visited[i] = true;
                temp += v;
                dfs(depth + 1, length);
                temp = temp.slice(0, -1);
                visited[i] = false;
            }
        });
    }

    [...numbers].forEach((_, i) => dfs(0, i + 1));

    return [...set].filter(v => isPrime(v)).length;
}
