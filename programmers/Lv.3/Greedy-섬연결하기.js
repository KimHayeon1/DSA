// 크루스칼 알고리즘
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

// 프림 알고리즘(배열)
function solution(n, costs) { 
    const graph = {};

    costs.forEach(v => {
        let [start, end, cost] = v;
        
        if (!graph[start]) {
            graph[start] = [[end, cost]];
        } else {
            graph[start].push([end, cost]);
        }

        if (!graph[end]) {
            graph[end] = [[start, cost]];
        } else {
            graph[end].push([start, cost]);
        }
    });

    const queue = graph[0]; // 후보
    queue.sort((a, b) => b[1] - a[1]);
    const connected = {0: true};
    let answer = 0;

    while (queue.length) {
        let [node, cost] = queue.pop();

        if (!connected[node]) {
            connected[node] = true;
            answer += cost;
            queue.push(...graph[node]);
            queue.sort((a, b) => b[1] - a[1]);
        }
    }
    
    return answer;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/42861
