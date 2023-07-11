/**
 * @description 平衡二叉树
 */
function isBalance(root) {
    const getDepth = function (node) {
        if (node === null) {
            return 0;
        }
        let leftDepth = getDepth(node.left);
        if (leftDepth == -1) {
            return -1;
        }
        let rightDepth = getDepth(node.right);
        if (rightDepth == -1) {
            return -1;
        }
        if (Math.abs(leftDepth - rightDepth) > 1) {
            return -1;
        } else {
            return 1 + Math.max(leftDepth, rightDepth);
        }
    }
    return !(getDepth(root) === -1);
}

function isBalanced(root) {
    if (!root) {
        return false;
    }
}