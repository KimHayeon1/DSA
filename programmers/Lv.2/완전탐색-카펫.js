function solution(brown, yellow) {
    const minWidth = 3;
    const minHeight = 3;
    const half = brown / 2 + 2;
   
    for (let width = half - minHeight; width >= minWidth; width--) {
        const height = half - width;
        const yellowWidth = width - 2;
        const yellowHeight = height - 2;
        
        if (yellowWidth * yellowHeight == yellow) {
            return [width, height];
        }
    }
}
