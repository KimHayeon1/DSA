let [n, m, k] = prompt().split(' ').map(str => parseInt(str));
const data = prompt().split(' ').map(str => parseInt(str));

data.sort();
const first = data[n - 1];
const second = data[n - 2];

let result = 0;

while (true) {
  for (let i = 0; i < k; i++) {
    if (m === 0) {
      break;
    }
    
    result += first;
    m--;
  }

  if (m === 0) {
    break;
  }

  result += second;
  m--;
}

console.log(result);
