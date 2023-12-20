function solution(routes) {
    routes.sort((a, b) => a[0] - b[0]);
    let camera = routes[0][1]; // routes[0] 구간에서 카메라가 설치될 수 있는 가장 높은 숫자
    let answer = 1;
  
    for (const [i, j] of routes.slice(1)) {
        // 현재 카메라가 설치될 구간에서 가장 높은 숫자보다, 진입 지점 숫자가 높다면
        if (i > camera) {
            answer++;
            camera = j;
        } else {
            camera = Math.min(camera, j);        
        }
    }
    
    return answer;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/42884
