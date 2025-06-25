// https://school.programmers.co.kr/learn/courses/30/lessons/87946?language=javascript

const getCases = (arr) => {
    let cases = [[]];
    
    arr.forEach(v => {
        const newCases = [];
        
        cases.forEach(w => {
            for (let i = 0; i <= w.length; i++) {
                const temp = [...w];
                temp.splice(i, 0, v); // i에 v 삽입
                newCases.push(temp);
            }
        });
        
        cases = newCases;
    });

    return cases;
};

const solution = (k, dungeons) => {
    const cases = getCases(dungeons);
    let maxCnt = 0;
    
    for (let i = 0; i < cases.length; i++) {
        let cnt = 0;
        let kCopy = k;
        
        for (let j = 0; j < dungeons.length; j++) {
            if (kCopy < cases[i][j][0]) {
                break;
            }
            
            kCopy -= cases[i][j][1];
            cnt++;
        }
        
        if (cnt == dungeons.length) {
            return cnt;
        }
        
        if (maxCnt < cnt) {
            maxCnt = cnt;
        }
        
    }
    
    return maxCnt;
}
