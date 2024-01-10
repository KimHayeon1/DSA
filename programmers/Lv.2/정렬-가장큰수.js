function solution(numbers) {
    numbers.sort((a, b) => {
        const strA = a.toString();
        const strB = b.toString();
        
        if (strA+strB > strB+strA) {
            return -1;
        }
        
        return 1;
    });
  
    if (numbers[0] === 0) {
        return '0';
    }
    
    return numbers.join('');
}

function solution(numbers) {
    const sortedNumbers = numbers
        .map(v => v.toString())
        .sort((a, b) => {
            if (a+b > b+a) {
                return -1;
            }

            return 1;
        });
    
    return sortedNumbers[0] === '0' ? '0' : sortedNumbers.join('');
}

// https://school.programmers.co.kr/learn/courses/30/lessons/42746
