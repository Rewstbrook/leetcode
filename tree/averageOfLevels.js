/**
 * @description 非空二叉树的层平均值
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
function averageOfLevels(root) {
    let result = [];
    let queue = [root];
    while (queue.length > 0) {
        let currentCount = 0;
        let currentSum = 0;
        let len = queue.length;
        while (len > 0) {
            let currentNode = queue.shift();
            currentCount++;
            currentSum += currentNode.val;
            currentNode.left && queue.push(currentNode.left);
            currentNode.right && queue.push(currentNode.right);
            len--;
        }
        result.push(currentSum / currentCount);
    }
    return result;
}
console.log(averageOfLevels(tree));