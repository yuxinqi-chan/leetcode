/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * 左右指针找最长
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let max = 0
    let l = 0, r = 1
    while (l < s.length && r <= s.length) {
        let substr = s.slice(l, r)
        if (isValid(substr)) {
            max = Math.max(r - l, max)
            r++
        } else {
            l++
        }
    }
    return max
};
/**
 * 判断是否有效
 * @param {string} str 
 */
function isValid(str) {
    let map = {}
    for (let index = 0; index < str.length; index++) {
        const char = str.charAt(index);
        if (map[char]) { return false } else {
            map[char] = 1
        }
    }
    return true
}
// @lc code=end

