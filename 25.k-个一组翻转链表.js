/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    let [h1, t1, h2] = reverse(head, k)
    t1.next = h2
    while (h2 != null) {
        let [nh1, nt1, nh2] = reverse(h2, k)
        t1.next = nh1
        t1 = nt1
        h2 = nh2
    }
    return h1
};
function reverse(head, k) {
    let origin = head;
    let arr = []
    for (let i = 0; i < k; i++) {
        arr.push(head)
        if (i != k - 1 && head.next == null) {
            return [origin, head, null]
        }
        head = head.next
    }
    let newHead = arr[k - 1]
    for (let i = k - 1; i > 0; i--) {
        newHead.next = arr[i - 1]
        newHead = newHead.next
    }
    newHead.next = head
    return [arr[k - 1], arr[0], head]
}
// @lc code=end

