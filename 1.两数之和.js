/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * 遍历一遍数组存在map里，同时访问对应被加数是否存在这个map中
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let map = {}
    nums.forEach((n, i) => map[n] = i)
    for (let i = 0; i < nums.length; i++) {
        let var1 = map[target - nums[i]]
        if (var1 !== undefined && var1 !== i) {
            return [i, var1]
        }
    }
};
// @lc code=end

