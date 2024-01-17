let n = 1260;
let count = 0;

const coinTypes = [500, 100, 50, 10];

coinTypes.forEach(coin => {
  count += Math.trunc(n / coin);
  n %= coin;
});

console.log(count);
