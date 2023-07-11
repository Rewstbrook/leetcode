/**
 * @description 完全二叉树的节点个数
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
        }
    }
}
function countNodes(root) {
    let count = 0;
    if (!root) {
        return 0;
    }
    let queue = [root];
    while (queue.length > 0) {
        let len = queue.length;
        while (len > 0) {
            let cur = queue.pop();
            count++;
            cur.left && queue.push(cur.left);
            cur.right && queue.push(cur.right);
            len--;
        }
    }
    return count;
}
function countNodes2(root) {
    let count = 0;
    if (!root) {
        return count;
    }
    let leftDepth = 0;
    let rightDepth = 0;
    let left = root.left;
    let right = root.right;
    while (left) {
        left = left.left;
        leftDepth++;
    }
    while (right) {
        right = right.right;
        rightDepth++;
    }
    if (leftDepth == rightDepth) {
        return Math.pow(2, leftDepth + 1) - 1;
    }
    return countNodes(root.left) + countNodes(root.right) + 1;
}
console.log(countNodes2(tree));