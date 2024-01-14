const array = [5, 7, 9, 0, 3, 1, 6, 2, 4, 8];

function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const pivot = array[0];
  const tail = array.slice(1);

  const leftSide = tail.filter(x => x <= pivot);
  const rightSide = tail.filter(x => x > pivot);

  return [...quickSort(leftSide), pivot, ...quickSort(rightSide)];
} 

console.log(quickSort(array));
