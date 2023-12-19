let n = 1260;
let count = 0;

const coin_types = [500, 100, 50, 10];

coin_types.forEach(coin => {
  count += Math.trunc(n / coin);
  n %= coin;
});

console.log(count);
