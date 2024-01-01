function solution(s){
    const queue = [];
    
    for (const v of s) {
        if (v === '(') {
            queue.push('(');
        } else if (queue.length) {
            queue.pop();
        } else {
            return false;
        }
    }

    return queue.length ? false : true;
}

function solution(s){
    let openCnt = 0;

    for (const v of s) { 
        if (v === '(') {
            openCnt++;
        } else if (openCnt > 0) {
            openCnt--;
        } else {
            return false;
        }
    }

    return openCnt === 0 ? true : false;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/12909
