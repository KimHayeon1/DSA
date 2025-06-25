// https://school.programmers.co.kr/learn/courses/30/lessons/87946?language=javascript

function solution(k, dungeons) {
    let cases = [[]];
    let maxCnt = 0;
    
    dungeons.forEach(v => {
        const newArr = [];
        
        cases.forEach(w => {
            for (let i = 0; i <= w.length; i++) {
                const temp = w.slice();
                temp.splice(i, 0, v);
                newArr.push(temp);
            }
        });
        cases = newArr;
    });
    
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
