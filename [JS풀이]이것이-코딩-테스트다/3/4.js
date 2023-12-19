const [n, m] = prompt().split(' ').map(str => parseInt(str));

let result = 0;

for (let i = 0; i < n; i++) {
  const data = prompt().split(' ').map(str => parseInt(str));
  min_value = 10001;
  
  for (const a of data) {
    min_value = Math.min(min_value, a);
  }
  
  result = Math.max(result, min_value);
}

console.log(result);
