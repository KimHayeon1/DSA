const longestPalindrome = (s) => {
  const expand = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }

    return s.slice(left + 1, right);
  }

  if (s.length < 2 || s === s.split('').reverse().join('')) {
    return 2;
  }

  let result = '';

  for (let i = 0; i < s.length - 1; i++) {
    const even = expand(i, i + 1);
    const odd = expand(i, i + 2);
    result = [result, odd, even].reduce((a, b) => a.length > b.length ? a : b);
  }

  return result;
}

longestPalindrome('babad');
longestPalindrome('cbbd');
