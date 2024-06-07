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

// Map
function solution(phone_book) {
    const phoneMap = new Map(phone_book.map(num => [num, null]));

    for (const number of phone_book) {
        for (let i = 1; i < number.length; i++) {
            const prefix = number.slice(0, i);
            if (phoneMap.has(prefix)) {
                return false;
            }
        }
    }
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
