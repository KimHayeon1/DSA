function solution (bridge_length, weight, truck_weights) {
    let sec = 0, sum = 0;
    const passing = [];

    while (truck_weights.length || passing.length) {
      if (weight >= sum + truck_weights[0]) {
        const truck = truck_weights.shift();
        sum += truck;
        passing.push([truck, sec + bridge_length]);
        sec++;
      } else {
        const [truck, passedSec] = passing.shift();
        sum -= truck;

        if (sec < passedSec) {
          sec = passedSec; 
        }
      }
    }

    return sec + 1;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/42583
