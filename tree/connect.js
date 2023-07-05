/**
 * @description 填充每个节点的下一个右侧节点指针
 */
const tree = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4
        },
        right: {
            val: 5
        }
    },
    right: {
        val: 3,
        left: {
            val: 6
        },
        right: {
            val: 7
        }
    }
};
function connect(root) {
    const queue = [root];
    let preNode = null;
    while (queue.length > 0) {
        let len = queue.length;
        while (len > 0) {
            let currentNode = queue.shift();
            if (len > 1) {
                currentNode.next = queue[0];
            } else {
                currentNode.next = null;
            }
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
            len--;
        }
    }
    return root;
}
console.log(connect(tree));