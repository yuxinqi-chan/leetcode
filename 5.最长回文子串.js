/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * 动态规划
 * bab是回文串，那么ababa就也是回文串
 * p[i,j]表示是不是回文串，p[i-1,j+1]可以推出是不是回文串
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    const len = s.length;
    // dp[i][i]为true
    const dp = new Array(len).fill(0).map(i => new Array(len).fill(true));

    // 1、计算0-1,1-2,2-3开始
    // 2、计算0-2，1-3，2-4
    // 3、计算0-3，1-4，2-5
    // ...以此类推
    for (let i = 1; i < len; i++) {
        for (let j = 0; i + j < len; j++) {
            dp[j][i + j] = (s[j] === s[i + j]) && dp[j + 1][i + j - 1];
        }
    }

    // 接下来再遍历一遍，依次求dp[i]的最大回文子串
    let maxstr = "";
    for (let i = 0; i < len; i++) {
        var maxIndex = dp[i].lastIndexOf(true);
        // 如果以i为启点的最大回文子串长度>maxstr，则替换maxstr;
        if (maxIndex - i + 1 > maxstr.length) {
            maxstr = s.substring(i, maxIndex + 1);
        }
    }
    return maxstr;
};
// @lc code=end

