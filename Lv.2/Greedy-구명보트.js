function solution(people, limit) {
    const sortedPeople = people.sort((a, b) => b - a);
    let answer = 0

    sortedPeople.forEach(people=>{
        if (people + sortedPeople.at(-1) > limit) {
            answer++;
        } else {
            sortedPeople.pop();
            answer++;
        }
    });

    return answer;
}

// while 1
function solution(people, limit) {
    let answer = 0;
    let front = 0;
    let rear = people.length - 1;

    people.sort((a, b) => b - a);

    while (front <= rear) {
        if (people[front] + people[rear] <= limit) {
            rear--;
        }
        
        front++;
        answer++;
    };
    
    return answer;
}

function solution(people, limit) {
    let answer = 0;
    let front = 0;
    let rear = people.length - 1;
    
    people.sort((a, b) => a - b);

    while (front <= rear) {
        if (people[front] + people[rear] <= limit) {
            front++;
        }
        
        rear--;
        answer++;
    }

    return answer;
}

// 4번: 같이 보트에 태울 인원을 구한 뒤, 전체 인원에서 빼는 풀이
function solution(people, limit) {
    people.sort((a, b) => a - b);
    
    let i = 0;

    // 무거운 사람부터 1명씩 보트를 탄다.
    for (let j = people.length - 1; i < j; j--) {
        // 가벼운 사람과 몸무게 합이 limit 이하라면 같이 탄다.
        if (people[i] + people[j] <= limit) i++;
    }  

    // 전체 인원 - (무거운 사람 1명이 보트에 탈 때) 같이 탄 총 인원
    return people.length - i;
}

// 4번 -> while문으로 변형
function solution(people, limit) {
    people.sort((a, b) => a - b);
    
    let front = 0;
    let rear = people.length - 1;
    
    while (front < rear) {
        if (people[front] + people[rear] <= limit) {
            front++;
        }
        
        rear--;
    }

    return people.length - front;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/42885#
