/*
 * @lc app=leetcode.cn id=1424 lang=javascript
 *
 * [1424] 对角线遍历 II
 */

// @lc code=start
/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var findDiagonalOrder = function (nums) {
    var next = [[0, 0]]
    var res = []
    while (next.length > 0) {
        let i = next[0][0]
        let j = next[0][1]
        if (j == 0 && nums[i + 1]) {
            next.push([i + 1, 0])
        }
        if (nums[i][j] !== undefined) {
            res.push(nums[i][j])
            next.push([i, j + 1])
        }
        next.splice(0, 1)
    }
    return res
};
// @lc code=end

