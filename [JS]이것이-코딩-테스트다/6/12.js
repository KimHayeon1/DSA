const [n, k] = prompt().split(' ').map(str => parseInt(str));
const a = prompt().split(' ').map(str => parseInt(str));
const b = prompt().split(' ').map(str => parseInt(str));

a.sort((a, b) => a - b);
b.sort((a, b) => b - a);

for (let i = 0; i < k; i++) {
  if (a[i] < b[i]) {
    [a[i], b[i]] = [b[i], a[i]];
  } else {
    break;
  }
}

console.log(a.reduce((acc, cur) => (acc + cur)));
