/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
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

