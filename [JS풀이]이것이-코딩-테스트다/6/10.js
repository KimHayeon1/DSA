const n = parseInt(prompt());
const array = [];

for (let i = 0; i < n; i++) {
  array.push(parseInt(prompt()));
}

array.sort((a, b) => b - a);

console.log(array.join(' '));
