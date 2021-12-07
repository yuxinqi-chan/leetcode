/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    let res = new ListNode();
    let control = res;
    let arr = [];
    for (let i = 0; i < lists.length; i++) {
        while (1) {
            if (lists[i]) {
                arr[arr.length] = lists[i].val;
                lists[i] = lists[i].next;
            } else {
                break;
            }
        }
    }
    arr.sort((a, b) => a - b);
    if (arr.length == 0) return null;
    for (let i = 0; i < arr.length; i++) {
        control.next = new ListNode();
        control.next.val = arr[i];
        control = control.next;
    }
    return res.next;
};
// @lc code=end

