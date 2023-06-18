/**
 * @description 删除链表倒数第n个节点
 */
function removeNthFromEnd(head, n) {
    let len = getListLen(head);
    if (n > len) {
        return;
    }
    let dummyHead = new ListNode(0, head);
    let current = dummyHead;
    for (let i = 0; i < len - n + 1; i++) {
        current = current.next;
    }
    current.next = current.next.next;
    return dummyHead.next;
}
function getListLen(head) {
    let count = 0;
    while (head) {
        head = head.next;
        count++;
    }
    return count;
}