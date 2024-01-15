const array = [7, 5, 9, 0, 3, 1, 6, 2, 9, 1, 4, 8, 0, 5, 2];
const count = Array.from({length: Math.max(...array) + 1}, () => 0);
const answer = [];

for (let i = 0; i < array.length; i++) {
  count[array[i]] += 1;
}

for (let i = 0; i < count.length; i++) {
  for (let j = 0; j < count[i]; j++) {
    answer.push(i);
  }
}

console.log(answer);

// forEach
const array = [7, 5, 9, 0, 3, 1, 6, 2, 9, 1, 4, 8, 0, 5, 2];
const count = Array.from({length: Math.max(...array) + 1}, () => 0);
const answer = [];

array.forEach(v => {
  count[v] += 1;
});
              
count.forEach((v, i) => {
  for (let j = 0; j < v; j++) {
    answer.push(i);
  }
});

console.log(answer);
