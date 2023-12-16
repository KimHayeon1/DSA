function solution(n, lost, reserve) {
    const filter_lost = [...lost];
    const filter_reserve = reserve.filter(v => {
        const lostIndex = filter_lost.indexOf(v);
        
        if (lostIndex === -1) {
            return true;
        } else {
            filter_lost.splice(lostIndex, 1); 
            return false;
        }
    }).sort();
    filter_lost.sort();
  
    filter_reserve.forEach(v => {
        const beforeIndex = filter_lost.indexOf(v-1);
        
        if (beforeIndex !== -1) {
            filter_lost.splice(beforeIndex, 1);  
            return;
        }

        const afterIndex = filter_lost.indexOf(v+1);
        
        if (afterIndex !== -1) {
            filter_lost.splice(afterIndex, 1);  
            return;
        }
    });
    
    return n - filter_lost.length;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/42862
