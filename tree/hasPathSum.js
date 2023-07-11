/**
 * @description 二叉树路径总和
 */
const tree = {
    val: 7,
    left: {
        val: 0,
        left: {
            val: -1,
            right: {
                val: 1,
                left: {
                    val: -7
                }
            }
        },
        right: {
            val: -6
        }
    }
}
function hasPathSum(root, targetSum) {
    if (!root || targetSum == null) {
        return false;
    }
    let queue = [root];
    let paths = [0];
    while (queue.length) {
        let cur = queue.shift();
        let curVal = paths.shift();
        curVal += cur.val;
        if (!cur.left && !cur.right && curVal == targetSum) {
            return true;
        }
        if (cur.left) {
            queue.push(cur.left);
            paths.push(curVal);
        }
        if (cur.right) {
            queue.push(cur.right);
            paths.push(curVal);
        }
    }
    return false;
}
console.log(hasPathSum(tree, 0))