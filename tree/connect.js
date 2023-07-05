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
        // let len = 
        let currentNode = queue.shift();
        if (currentNode) {
            currentNode.next = 
        }
    }
}