function solution(park, routes) {
    const answer = [];
    const width = park[0].length;
    const height = park.length;

    for (const i in park) {
        const sIndex = park[i].indexOf('S');

        if (sIndex !== -1) {
            answer.push(parseInt(i));
            answer.push(sIndex);
            break;
        }
    }

    routes.forEach(v => {
        const direction = v[0];
        const num = parseInt(v.slice(2));
        const [currY, currX] = answer;
        let y, x;

        switch (direction) {
            case 'N':
                y = currY - num;

                if (y < 0) break;

                for (let i = currY - 1; i >= y; i--) {
                    if (park[i][currX] === 'X') return; 
                }

                answer[0] = y;
                break;
            case 'S':
                y = currY + num;

                if (y >= height) break;

                for (let i = currY + 1; i <= y; i++) {
                    if (park[i][currX] === 'X') return;
                }

                answer[0] = y;

                break;
            case 'W':
                x = currX - num;

                if (x < 0) break;

                for (let i = currX - 1; i >= x; i--) {
                    if (park[currY][i] === 'X') return; 
                }

                answer[1] = x;

                break;
            default:
                x = currX + num;

                if (x >= width) break;

                for (let i = currX + 1; i <= x; i++) {
                    if (park[currY][i] === 'X') return; 
                }

                answer[1] = x;
        }
    });

    return answer;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/172928
