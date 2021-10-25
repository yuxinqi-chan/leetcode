/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let node = new ListNode()
    let outPut = node
    let sum = l1.val + l2.val
    node.val = sum % 10
    let carry = Math.floor(sum / 10)
    while (l1.next || l2.next) {
        l1 = l1.next || new ListNode(0)
        l2 = l2.next || new ListNode(0)
        node.next = new ListNode()
        node = node.next
        sum = l1.val + l2.val + carry
        node.val = sum % 10
        carry = Math.floor(sum / 10)
    }
    if (carry !== 0) {
        node.next = new ListNode(carry)
    }
    console.log(outPut)
    return outPut
};
// @lc code=end

