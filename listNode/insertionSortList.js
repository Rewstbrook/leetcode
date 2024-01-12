const head = {
    value: 4,
    next: {
        value: 2,
        next: {
            value: 1,
            next: {
                value: 3,
                next: null
            }
        }
    }
}
function insertionSortList(head) {
    let cur = head.next;
    while (head.next) {
        let temp = head.next;
        head.next = cur.next;
        cur.next = head;
        cur = head.next;
        while (cur && cur.next) {
            if (cur.value > cur.next.value) {
                let temp = cur.next;
                cur.next = temp.next;
                temp.next = cur;
                cur = head.next;
            }
            else {
                cur = cur.next;
            }
        }
    }
    return head;
}
console.log(insertionSortList(head));