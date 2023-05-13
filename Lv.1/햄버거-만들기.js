function solution(ingredient) {
  let count = 0;

  for (let i = 0; i < ingredient.length; i++) {
      if (ingredient[i] === 1 && ingredient[i+1] === 2 &&
        ingredient[i+2] === 3 && ingredient[i+3] === 1) {
          count++;
          ingredient.splice(i, 4);
          i -= 3;
      }
  }

  return count;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/133502