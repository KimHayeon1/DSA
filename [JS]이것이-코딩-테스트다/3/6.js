let [n, k] = prompt().split(' ').map(str => parseInt(str));
let result = 0;

while (true) {
  const target = Math.trunc(n / k) * k;
  result += (n - target);
  n = target;

  if (n < k) {
    break
  }

  result++;
  n =  Math.trunc(n / k);

}

result += (n - 1);
console.log(result);
