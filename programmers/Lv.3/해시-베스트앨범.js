// https://school.programmers.co.kr/learn/courses/30/lessons/42579

// Map
function solution(genres, plays) {
    const answer = [];
    const genresTotal = new Map();
    const musics = new Map();
  
    genres.forEach((v, i) => {
        genresTotal.set(v, (genresTotal.get(v) || 0) + plays[i]);
        musics.set(v, [...(musics.get(v) || []), [plays[i], i]]);
    });
    [...genresTotal]
        .sort((a, b) => b[1] - a[1])
        .forEach(([genre]) => {
            const bestMusics = musics
                .get(genre)
                .sort((a, b) => b[0] - a[0])
                .slice(0, 2)
                .map(v => v[1]);
            answer.push(...bestMusics);
        });
    
    return answer;
}
