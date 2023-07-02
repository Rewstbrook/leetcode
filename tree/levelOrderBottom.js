/**
 * @description 二叉树层序遍历，自底向上的层序遍历
 */
const tree = {
    val: 3,
    left: {
        val: 9
    },
    right: {
        val: 20,
        left: {
            val: 15
        },
        right: {
            val: 7
        }
    }
};
function levelOrderBottom(root) {
    let result = [];
    if (!root) {
        return result;
    }
    let queue = [root];
    while (queue.length) {
        let currentValue = [];
        let len = queue.length;
        while (len) {
            const currentNode = queue.shift();
            currentValue.push(currentNode.val);
            currentNode.left && queue.push(currentNode.left);
            currentNode.right && queue.push(currentNode.right);
            len--;
        }
        result.unshift(currentValue);
    }
    return result;
}
console.log(levelOrderBottom(tree));