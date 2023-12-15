function solution(maps) {
    const goalY = maps.length - 1;
    const goalX = maps[0].length - 1;

    const queue = [];
    queue.push([0, 0, 1]);

    while (queue.length) {
        const [y, x, steps] = queue.shift();
        
        if (maps[y][x] === 0) continue;
        
        if (y === goalY && x === goalX) {
            return steps;
        }

        maps[y][x] = 0;
        
        if (goalY > y) {
            queue.push([y + 1, x, steps + 1]);
        }
        if (y > 0) {
            queue.push([y - 1, x, steps + 1]);
        }
        if (goalX > x) {
            queue.push([y, x + 1, steps + 1]);
        }
        if (x > 0) {
            queue.push([y, x - 1, steps + 1]);
        }
    }

    return -1;
}
