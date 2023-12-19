function solution(wallpaper) {
    const answer = [null, null, 0, 0];
    
    wallpaper.forEach((v, i) => {
        const firstX = v.indexOf('#');
        
        if (firstX === -1) {
            return;
        }
        
        if (answer[0] === null) {
            answer[0] = i;
            answer[1] = firstX;
        }
        else if (firstX < answer[1]) {
            answer[1] = firstX;
        }
        
        const lastX = v.lastIndexOf('#');
        
        if (answer[2] < i+1) {
            answer[2] = i+1;
        }
        
        if (answer[3] < lastX+1) {
            answer[3] = lastX+1;
        }
    });
    
    return answer;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/161990?language=javascript
