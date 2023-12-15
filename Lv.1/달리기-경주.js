function solution(players, callings) {
    const answer = [...players];
    const ranks = {};

    players.forEach((player, i) => ranks[player] = i);
    
    callings.forEach(player => {
        const rank = ranks[player];
        const frontPlayer = answer[rank-1];
        ranks[player]--;
        ranks[frontPlayer]++;
        answer[rank] = frontPlayer;
        answer[rank-1] = player;
    });

    return answer;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/178871
