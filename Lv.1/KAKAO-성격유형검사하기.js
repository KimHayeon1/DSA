// https://school.programmers.co.kr/learn/courses/30/lessons/118666?language=javascript

function solution(survey, choices) {
    const typeCnt = {'R':0,'T':0,'C':0,'F':0,'J':0,'M':0,'A':0,'N':0}
    let answer = '';
    survey.forEach((v, i) => {
        switch (choices[i]) {
            case 1:
                typeCnt[v[0]] += 3;
                break;
            case 2:
                typeCnt[v[0]] += 2;
                break;
            case 3:
                typeCnt[v[0]] += 1;
                break;
            case 5:
                typeCnt[v[1]] += 1;
                break;
            case 6:
                typeCnt[v[1]] += 2;
                break;
            case 7:
                typeCnt[v[1]] += 3;
                break;
        }
    });
    

    if (typeCnt.R < typeCnt.T) {
        answer += 'T'
    } else {
        answer += 'R'
    }
    if (typeCnt.C < typeCnt.F) {
        answer += 'F'
    } else {
        answer += 'C'
    }
    if (typeCnt.J < typeCnt.M) {
        answer += 'M'
    } else {
        answer += 'J'
    }
    if (typeCnt.A < typeCnt.N) {
        answer += 'N'
    } else {
        answer += 'A'
    }

    return answer;
}
