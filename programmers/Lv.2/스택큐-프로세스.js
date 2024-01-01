function solution(priorities, location) {
    const queue = Array.from({length: priorities.length}, (_, i) => i);
    const sortedPriorities = [...priorities].sort();
    
    while (queue.length) {
        const item = queue.splice(0, 1)[0];

        if (sortedPriorities[sortedPriorities.length - 1] !== priorities[item]) {
            queue.push(item);
        } else if (item === location) {
            break;
        } else {
            sortedPriorities.pop();
        }
    }
    
    return priorities.length - queue.length;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/42587
