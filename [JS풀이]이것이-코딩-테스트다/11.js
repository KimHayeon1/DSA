const n = parseInt(prompt());
const array = [];

for (let i = 0; i < n; i++) {
  array.push(prompt().split(' '));
}

array.sort((a, b) => b[1] - a[1]);

console.log(array.map(v => v[0]).join(' '));
