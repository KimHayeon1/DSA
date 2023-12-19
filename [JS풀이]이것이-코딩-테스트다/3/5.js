let [n, k] = prompt().split(' ').map(str => parseInt(str));
let result = 0;

while (n <= k) {
  while (n % k !== 0) {
    n--;
    result++;
  }

  n = Math.trunc(n / k);
  result++;
}

while (n > 1) {
  n--;
  result++;
}

console.log(result);
