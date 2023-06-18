/**
 * @description 环形链表
 */
function detectCycle(head) {
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        if (fast == slow) {
            let index1 = fast;
            let index2 = head;
            while (index1 != index2) {
                index1 = index1.next;
                index2 = index2.next;
            }
            return index1;
        }
    }
    return null;
}
function detectCycle1(head) {
    let fast = head;
    let slow = head;
    while (fast && fast.next && fast != slow) {
        fast = fast.next.next;
        slow = slow.next;
    }
    if (!fast || !fast.next) {
        return null;
    }
    slow = head;
    while (slow != fast) {
        fast = fast.next;
        slow = slow.next;
    }
    return slow;
}