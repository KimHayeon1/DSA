function solution(progresses, speeds) {
    const answer = []
    const days = [];
    
    progresses.forEach((v, i) => {
        const day = Math.ceil((100 - v) / speeds[i]);

        if (day <= days[days.length - 1]) {
            answer[answer.length - 1]++;
        } else {
            days.push(day);
            answer.push(1);
        }
    });
    
    return answer;
}

function solution(progresses, speeds) {
    const answer = []
    let maxDay = 0;
    
    progresses.forEach((v, i) => {
        const day = Math.ceil((100 - v) / speeds[i]);

        if (day <= maxDay) {
            answer[answer.length - 1]++;
        } else {
            maxDay = day;
            answer.push(1);
        }
    });
    
    return answer;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/42586
