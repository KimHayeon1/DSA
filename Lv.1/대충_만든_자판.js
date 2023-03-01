function solution(keymap, targets) {
  const keymapObj = {};
  keymap.forEach(str => {
    for (let i = 0; i < str.length; i++) {
      if (!keymapObj[str[i]] || keymapObj[str[i]] > i+1) keymapObj[str[i]] = i+1;
    }
  });

  const answer = [];
  targets.forEach(str => {
    let cnt = 0;
    for (const alphabet of str) {
      if (keymapObj[alphabet]) cnt += keymapObj[alphabet];
      else return answer.push(-1);
    }
    answer.push(cnt);
  });

  return answer;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/160586