function solution(prices) {
    const answer = [];

    prices.forEach((v, i) => {
        let sec = 0;
        
        for (let j = i + 1; j < prices.length; j++) {
            sec++;
            
            if (prices[j] < v) {
                break;
            }
        }
        
        answer.push(sec);
    });

    return answer;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/42584
