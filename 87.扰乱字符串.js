/*
 * @lc app=leetcode.cn id=87 lang=javascript
 *
 * [87] 扰乱字符串
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
let map = {}
var isScramble = function (s1, s2) {
    return sp(s1, s2)
};

function sp(t1, t2) {
    for (let i = 0; i < t1.length; i++) {
        if (map[t1 + ',' + t2] !== undefined) {
            return map[t1 + ',' + t2]
        }
        const a1 = t1.substr(0, i);
        const a2 = t1.substr(i);
        const b1 = t2.substr(0, i);
        const b2 = t2.substr(i);
        const c1 = t2.substr(0, t1.length - i);
        const c2 = t2.substr(t1.length - i);
        if (a1 === b1 && a2 === b2 ||
            sp(a1, b1) && sp(a2, b2) ||
            a1 === c2 && a2 === c1 ||
            sp(a1, c2) && sp(a2, c1)
        ) {
            map[t1 + ',' + t2] = true
            return true;
        }
    }
    map[t1 + ',' + t2] = false
    return false;
}
// @lc code=end

isScramble("abb",
    "bba")