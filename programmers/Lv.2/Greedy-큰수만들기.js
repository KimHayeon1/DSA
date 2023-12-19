function solution(number, k) {
    const stack = []; // string으로 풀면 시간 초과

    // 마지막 num은 항상 push된 채로 for문이 끝난다
    for (const num of number) {
        // 뒷자리 수(num)이 앞자리 수(stack[stack.length-1])보다 크고,
        // 제거 가능한 수가 남아있다면
        while (stack[stack.length-1] < num && k) {
            // stack[stack.length-1]는 (제거하고)
            // 16줄에서 num으로 대체된다.
            stack.pop();
            // 제거 가능한 수가 하나 줄어들었다
            --k;
        }

        // k개의 수를 모두 제거했다면, for문이 끝날 때까지 push만 실행됨
        stack.push(num);
    }

    // k개의 수가 모두 제거되지 않았다면, 뒤에서부터 남은 수 제거
    if (k !== 0) stack.splice(-k);

    return stack.join('');
}

// https://school.programmers.co.kr/learn/courses/30/lessons/42883#
