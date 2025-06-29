// https://school.programmers.co.kr/learn/courses/30/lessons/43165

const dfs = ({sum, nums, target}) => {
    let cnt = 0;
    
    if (nums.length > 1) {
        const newNums = nums.slice(1);
        cnt += dfs({sum: sum - nums[0], nums: newNums, target});
        cnt += dfs({sum: sum + nums[0], nums: newNums, target});
    } else if (sum - nums[0] == target || sum + nums[0] == target) {
        cnt++;
    }
    
    
    return cnt;
};

const solution = (nums, target) => {
    return dfs({sum: 0, nums: nums, target});
};
