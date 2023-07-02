/**
 * @description 二叉树的层序遍历  广度优先
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
function levelOrder(root) {
    let result = [];
    let queue = [root];
    let nextQueue = [];
    if (!root) {
        return result;
    }
    while (queue.length) {
        let len = queue.length;
        const currentValue = [];
        while (len) {
            let currentNode = queue.shift();
            currentValue.push(currentNode.val);
            currentNode.left && queue.push(currentNode.left);
            currentNode.right && queue.push(currentNode.right);
            len--;
        }
        result.push(currentValue);
    }

    return result;
}

function levelOrder2(root) {
    if (!root) {
        return [];
    }
    const result = [];
    let queue = [root, null];         // 当前
    let levelNodes = [];        // 存放每一层节点
    while (queue.length > 0) {
        const currentNode = queue.shift();
        if (currentNode) {
            levelNodes.push(currentNode.val);
            currentNode.left && queue.push(currentNode.left);
            currentNode.right && queue.push(currentNode.right);
        } else {
            // 上一层遍历完成
            result.push(levelNodes);
            levelNodes = [];
            // 加个判断，如果上一层已经遍历完成并且此时队列中还有节点，就需要往队列中添加一个null，将当前层与下一层分开
            if (queue.length > 0) {
                queue.push(null);
            }
        }
    }
    return result;
}
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder3 = function (root) {
    if (!root) return [];
    const items = []; // 存放所有节点
    const queue = [root, null]; // null 简化操作
    let levelNodes = []; // 存放每一层的节点

    while (queue.length > 0) {
        const t = queue.shift();

        if (t) {
            levelNodes.push(t.val);
            if (t.left) {
                queue.push(t.left);
            }
            if (t.right) {
                queue.push(t.right);
            }
        } else {
            // 一层已经遍历完了
            items.push(levelNodes);
            levelNodes = [];
            // 加个判断，如果上一层已经遍历完成并且此时队列中还有节点，就需要往队列中添加一个null，将当前层与下一层分开
            if (queue.length > 0) {
                queue.push(null);
            }
        }
    }

    return items;
};
console.log(levelOrder3(tree))
console.log(levelOrder2(tree))