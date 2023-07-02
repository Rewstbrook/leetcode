/**
 * @description 二叉树的右视图
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
// 广度优先
function rightSideView(root) {
    if (!root) {
        return [];
    }
    let queue = [root];
    let result = [];
    while (queue.length > 0) {
        let currentLevel = [];
        let len = queue.length;
        while (len > 0) {
            let currentNode = queue.shift();
            currentNode.left && queue.push(currentNode.left);
            currentNode.right && queue.push(currentNode.right);
            currentLevel.push(currentNode.val);
            len--;
        }
        result.push(currentLevel.pop());
    }
    return result;
}

// 深度优先前序递归 中->右->左
function rightSideView2(root) {
    let result = [];
    let depth = 0;
    const dfs = function (node, depth) {
        if (result.length == depth) {
            result.push(node.val);
        }
        depth++;
        node.right && dfs(node.right, depth);
        node.left && dfs(node.left, depth);
    }
    dfs(root, 0);
    return result;
}
// console.log(rightSideView2(tree));

// 深度优先前序迭代
function rightSideView3(root) {
    let result = [];
    let stack = [root];
    let stackLevel = [0];           // 当前节点的层数
    while (stack.length) {
        let currentNode = stack.pop();
        let currentLevel = stackLevel.pop();
        if (result.length == currentLevel) {
            result.push(currentNode.val);
        }
        if (currentNode.left) {
            stack.push(currentNode.left);
            stackLevel.push(currentLevel + 1);
        }
        if (currentNode.right) {
            stack.push(currentNode.right);
            stackLevel.push(currentLevel + 1);
        }
    }
    return result;
}
console.log(rightSideView3(tree));