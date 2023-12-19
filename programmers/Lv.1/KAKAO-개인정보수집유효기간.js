function solution(today, terms, privacies) {
    const answer = [];
    const todayNum = today.split('.').map(v => parseInt(v));
    const termsObj = {};

    terms.forEach(v => termsObj[v[0]] = parseInt(v.slice(2)));

    privacies.forEach((v, i) => {
        const privacy = v.slice(0, 10).split('.').map(v => parseInt(v));
        const term = termsObj[v[v.length - 1]];

        if (privacy[1] + term > 12) {
            if ((privacy[1] + term) % 12 === 0) {
                privacy[0] += Math.trunc((privacy[1] + term) / 12) - 1;
                privacy[1] = 12;
            } else {
                privacy[0] += Math.trunc((privacy[1] + term) / 12);
                privacy[1] = (privacy[1] + term) % 12;
            }
        } else {
            privacy[1] = privacy[1] + term;
        }

        if (privacy[0] < todayNum[0]) {
            answer.push(i+1);
            return;
        }

        if (privacy[0] !== todayNum[0]) {
            return;
        }

        if (privacy[1] < todayNum[1]) {
            answer.push(i+1);
            return;
        }

        if (privacy[1] !== todayNum[1]) {
            return;
        }

        if (privacy[2] <= todayNum[2]) {
            answer.push(i+1);
        }
    });

    return answer;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/150370
