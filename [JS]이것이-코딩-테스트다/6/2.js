// 스와프 1
const array = [3, 5];
[array[0], array[1]] = [array[1], array[0]];

console.log(array);

// 스와프 2
const array = [3, 5];

const temp = array[0];
array[0] = array[1];
array[1] = temp;

console.log(array);
