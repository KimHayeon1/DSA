function solution(bandage, health, attacks) {
    let answer = health;
    
    for (let i = 0; i < attacks.length; i++) {
        answer -= attacks[i][1];
        
        if (answer <= 0) {
            return -1;
        }
        
        if (i === attacks.length-1) {
            break;
        }
        
        const time = attacks[i+1][0] - attacks[i][0] - 1;
        let heal = time * bandage[1];
        
        if (time >= bandage[0]) {
            heal += Math.trunc(time / bandage[0]) * bandage[2];
        }
        
        if (answer + heal >= health) {
            answer = health;
        } else {
            answer += heal;
        }
    }
    
    return answer;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/250137
