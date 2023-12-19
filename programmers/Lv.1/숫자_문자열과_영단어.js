function solution(s) {
    const numList = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight' ,'nine'];
    numList.forEach((value, i) => {
        const regex = new RegExp(value, 'g');
        s = s.replace(regex, `${i}`);
    });
    return parseInt(s);
}

//console.log(solution("one2three4nine"));
