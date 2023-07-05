/**
 * @description 两两交换链表节点
 */
// export default class ListNode {
//     constructor(data, next) {
//         this.data = data;           // 节点数据域
//         this.prev = null;           // 节点指针域
//         this.next = next || null;   // 节点指针域
//     }
// }
function swapPairs(head) {
    let dummyHead = new ListNode(0, head);
    let current = dummyHead;
    while (current.next && current.next.next) {
        let start = current.next;       // 两两交换的开始节点
        let end = current.next.next;    // 两两交换的结束节点
        
        current.next = end;
        start.next = end.next;
        end.next = start;
        current = start;
    }
    return current.next;
}