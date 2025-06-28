// https://school.programmers.co.kr/learn/courses/30/lessons/87946?language=javascript

// dfs
const dfs = ({ dungeons, visited, k, cnt }) => {
    let maxCount = cnt;

    for (let i = 0; i < dungeons.length; i++) {
        const [required, consume] = dungeons[i];

        if (!visited[i] && k >= required) {
            visited[i] = true;

            const result = dfs({
                dungeons,
                visited,
                k: k - consume,
                cnt: cnt + 1
            });
            
            if (result == dungeons.length) {
                return result;
            }

            maxCount = Math.max(maxCount, result);
            visited[i] = false;
        }
    }

    return maxCount;
};

const solution = (k, dungeons) => {
    const visited = new Array(dungeons.length).fill(false);
    return dfs({ dungeons, visited, k, cnt: 0 });
};

// 완전탐색
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
