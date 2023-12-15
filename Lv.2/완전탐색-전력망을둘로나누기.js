function solution(n, wires) {
    let answer = null;

    wires.forEach((v, i) => {
        const set1 = new Set();
        const set2 = new Set();

        set1.add(wires[i][0]);
        set2.add(wires[i][1]);

        const queue = [...wires.slice(0, i) , ...wires.slice(i+1)];
        while (queue.length) {
            const wire = queue.shift();

            if (set1.has(wire[0]) || set1.has(wire[1])) {
                set1.add(wire[0]);
                set1.add(wire[1]);
            } else if (set2.has(wire[0]) || set2.has(wire[1])) {
                set2.add(wire[0]);
                set2.add(wire[1]);
            } else {
                queue.push(wire);
            }
        }

        const result = Math.abs(set1.size - set2.size);

        if (answer === null || result < answer) {
            answer = result;
        }
    });

    return answer;
}
