/**
 * @description 左叶子之和
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
function sumOfLeftLeaves(root) {
    if (!root) {
        return 0;
    }
    let count = 0;
    let stack = [root];
    while (stack.length > 0) {
        let len = stack.length;
        while (len > 0) {
            let cur = stack.pop();
            if (cur.left != null && cur.left.left == null && cur.left.right == null) {
                count += cur.left.val;
            }
            cur.left && stack.push(cur.left);
            cur.right && stack.push(cur.right);
            len--;
        }
    }
    return count;
}
console.log(sumOfLeftLeaves(tree));