/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    let res = [];
    let window = [];
    window.push(...[...Array(k).keys()]);
    window.sort((a, b) => nums[b] - nums[a])
    res.push(window[0]);
    for (let i = k; i < nums.length; i++) {
        removeElement(window, i - k);
        insertSort(window, i);
        res.push(window[0]);
    }
    return res.map(i => nums[i]);
    function insertSort(arr, num) {
        for (let i = 0; i < arr.length; i++) {
            if (nums[num] > nums[arr[i]]) {
                arr.splice(i, arr.length - i, num);
                return;
            }
        }
        arr.push(num);
        return arr;
    }

    function removeElement(arr, num) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === num) {
                arr.splice(i, 1);
                return;
            }
        }
    }
};
// @lc code=end
