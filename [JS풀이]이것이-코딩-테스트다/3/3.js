const [n, m] = prompt().split(' ').map(str => parseInt(str));

let result = 0;

for (let i = 0; i < n; i++) {
  const data = prompt().split(' ').map(str => parseInt(str));
  min_value = Math.min(...data);
  result = Math.max(result, min_value);
}

console.log(result);
