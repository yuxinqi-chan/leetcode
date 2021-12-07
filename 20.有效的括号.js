/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = []
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (c === '(' || c === '[' || c === '{') {
            stack.push(c)
        } else {
            if (stack.length === 0) {
                return false
            }
            const last = stack.pop()
            if (c === ')' && last !== '(') {
                return false
            }
            if (c === ']' && last !== '[') {
                return false
            }
            if (c === '}' && last !== '{') {
                return false
            }
        }
    }
    return stack.length == 0
};
// @lc code=end

