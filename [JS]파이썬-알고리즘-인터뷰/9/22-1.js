const dailyTemperatures = function(T) {
    const answer = new Array(T.length).fill(0);
    const stack = [];

    T.forEach((cur, i) => {
        // 현재 온도가 스택에 있는 이전 온도보다 높을 경우
        while (stack.length && cur > T[stack.at(-1)]) {
            const last = stack.pop(); // 스택에서 제거하고
            answer[last] = i - last; // 기다려야 하는 일수 저장
        }

        stack.push(i);
    });

    return answer;
};

dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]);
