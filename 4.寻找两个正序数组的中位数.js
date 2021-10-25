/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let mid = []
    let total = nums1.length + nums2.length
    let midindex = (total - 1) / 2
    console.log(midindex)
    let p1 = 0, p2 = 0
    while (p1 + p2 < total) {
        if (p1 >= nums1.length || nums1[p1] > nums2[p2]) {
            check(nums2[p2])
            p2++
        }
        else if (p2 >= nums2.length || nums1[p1] <= nums2[p2]) {
            check(nums1[p1])
            p1++
        }
    }
    return mid.length > 1 ? (mid[0] + mid[1]) / 2 : mid[0]
    function check(cur) {
        console.log(nums1[p1], nums2[p2])
        if (p1 + p2 >= midindex - 0.5 && p1 + p2 <= midindex + 0.5) {
            console.log(cur)
            mid.push(cur)
        }
    }
};
// @lc code=end

