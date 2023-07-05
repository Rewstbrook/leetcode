/**
 * @description 翻转链表
 */
function reverseList(head) {
    let temp = null;
    let prev = null;
    let cur = head;
    while (cur) {
        temp = cur.next;
        cur.next = prev;
        prev = cur;
        cur = temp;
    }
}