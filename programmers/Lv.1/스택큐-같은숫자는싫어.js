function solution(arr){
  return arr.filter((v, i) => v !== arr[i + 1]);
}

function solution(arr) {
    const answer = [arr[0]];

    for (let i = 1; i < arr.length; i++) {
        if (answer[answer.length - 1] !== arr[i]) {
            answer.push(arr[i]);
        }
    }

    return answer;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/12906
