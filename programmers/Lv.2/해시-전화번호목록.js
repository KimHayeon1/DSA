// https://school.programmers.co.kr/learn/courses/30/lessons/42577/solution_groups?language=javascript

// 가장 빠른
function solution(phone_book) {
    phone_book.sort();
    
    for (let i = 0; i < phone_book.length - 1; i++) {
        if (phone_book[i+1].startsWith(phone_book[i])) {
            return false;
        }
    }
    
    return true;
}

// Set(O(N)보다 빠른 해시(O(1)) 테이블, 검색 트리(O(log(N)), 혹은 다른 자료구조)
function solution(phone_book) {
    const phoneSet = new Set(phone_book);

    for (const number of phone_book) {
        for (let i = 1; i < number.length; i++) {
            const prefix = number.slice(0, i);
            if (phoneSet.has(prefix)) {
                return false;
            }
        }
    }
    
    return true;
}

// 시간 초과
function solution(phone_book) {
    for (let i = 0; i < phone_book.length - 1; i++) {
        for (let j = i + 1; j < phone_book.length; j++) {
            const num1 = phone_book[i];
            const num2 = phone_book[j];
            const minLength = Math.min(num1.length, num2.length);
            
            if (num1.slice(0, minLength) === num2.slice(0, minLength)) {
                return false;
            }
        }
    }
    
    return true;
}

function solution(phone_book) {
    for (const number of phone_book) {
        for (let i = 1; i < number.length; i++) {
            const prefix = number.slice(0, i);
            if (phone_book.includes(prefix)) {
                return false;
            }
        }
    }
    
    return true;
}
