/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    for (let i = 1; i <= nums.length + 1; i++) {
        let find = false
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] == i) {
                find = true
                if (nums[j + 1] == nums[j] + 1) {
                    i++
                }
            }
        }
        if (!find) {
            return i
        }
    }
};
// @lc code=end

