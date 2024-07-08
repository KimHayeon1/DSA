// https://school.programmers.co.kr/learn/courses/30/lessons/12904?language=csharp

const findLongestPalindrome = (s, left, right) => {
    while(left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }

    return right - left - 1;
}

const solution = (s) => {
    let answer = 0;

    for (let i = 0; i < s.length; i++) {
        const longerPalindrome = Math.max(findLongestPalindrome(s, i, i), findLongestPalindrome(s, i, i + 1));
              
        if (longerPalindrome > answer) {
            answer = longerPalindrome;
        } 
    }

    return answer;
};
