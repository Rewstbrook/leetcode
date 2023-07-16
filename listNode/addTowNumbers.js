/**
 * @description leetcode-2两数相加
 *  给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
    请你将两个数相加，并以相同形式返回一个表示和的链表。
    你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 */
// export default class ListNode {
//     constructor(data, next) {
//         this.data = data;           // 节点数据域
//         this.prev = null;           // 节点指针域
//         this.next = next || null;   // 节点指针域
//     }
// }
function addTwoNumbers(l1, l2) {
    let dummyHead = new ListNode(0);
    let result = dummyHead;
    let carry = 0;
    while (l1 || l2) {
        let curval1 = l1 ? l1.val : 0;
        let curval2 = l2 ? l2.val : 0;
        let sum = curval1 + curval2 + carry;
        // 进位只能进1
        carry = sum >= 10 ? 1 : 0;
        sum = sum % 10;
        result.next = new ListNode(sum);
        result = result.next;
        if (l1) {
            l1 = l1.next;
        }
        if (l2) {
            l2 = l2.next;
        }
    }
    // 如果最终进位值为1,需要在末尾补一个listNode，值为1
    if (carry == 1) {
        result.next = new ListNode(1);
    }
    return dummyHead.next;
}