function find_parent(parent, x) {
    if (parent[x] !== x) {
        parent[x] = find_parent(parent, parent[x]);
    }

    return parent[x];
}

function union_parent(parent, a, b) {
    a = find_parent(parent, a);
    b = find_parent(parent, b);

    parent[b] = a;
}

function solution(n, costs) {  
    let answer = 0;
    const parent = Array.from({ length: n }, (_, i) => i);
    costs.sort((a, b) => a[2] - b[2]);
    
    costs.forEach(v => {
        const [a, b, cost] = v;

        if (find_parent(parent, a) !== find_parent(parent, b)) {
            union_parent(parent, a, b);
            answer += cost;
        }
    });

    return answer;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/42861
