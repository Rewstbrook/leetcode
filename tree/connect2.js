/**
 * @description 填充每个节点的下一个节点
 */
function connect(root) {
    if (!root) {
        return root;
    }
    let pre = root;
    while (pre.left != null) {
        let tmp = pre;
        while (tmp) {
            tmp.right.next = tmp.next.left;
            if (!(tmp.next)) {
                tmp.right.next = tmp.next.left;
            }
            tmp = tmp.next;
        }
        tmp = tmp.next;
    }
    return root;
}