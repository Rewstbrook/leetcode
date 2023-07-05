/**
 * @description 对称二叉树
 */
const tree = {
    val: 1,
    left: {
        val: 2,
        // left: {
        //     val: 3
        // },
        right: {
            val: 3
        }
    },
    right: {
        val: 2,
        // left: {
        //     val: 4
        // },
        right: {
            val: 3
        }
    }
}
function isSymmetric(root) {
    if (!root) {
        return false;
    }
    let stack = [root.left, root.right];
    while (stack.length > 0) {
        let leftNode = stack.pop();
        let rightNode = stack.pop();
        if (!leftNode && !rightNode) {
            continue;
        }
        if (!leftNode || !rightNode || leftNode.val != rightNode.val) {
            return false;
        }
        stack.push(leftNode.left);
        stack.push(rightNode.right);
        stack.push(leftNode.right);
        stack.push(rightNode.left);
    }
    return true;
}
console.log(isSymmetric(tree));