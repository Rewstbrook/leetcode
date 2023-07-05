/**
 * @description 翻转二叉树
 */
// 递归
function invertTree(root) {
    if (!root) {
        return root;
    }
    let rightNode = root.right;
    root.right = invertTree(root.left);
    root.left = invertTree(rightNode);
    return root;
}

// 前序遍历
function invertTree(root) {
    if (!root) {
        return root;
    }
    let invertNode = (root, left, right) => {
        let temp = left;
        left = right;
        right = temp;
        root.left = left;
        root.right = right;
    }
    let stack = [root];
    while (stack.length) {
        let currNode = stack.pop();
        if (currNode) {
            currNode.right && stack.push(currNode.right);
            currNode.left && stack.push(currNode.left);
            stack.push(Node);
            stack.push(null);
        } else {
            currNode = stack.pop();
            invertNode(currNode, currNode.left, currNode.right);
        }
    }
}

// 层序遍历
function invertTree(root) {
    if (!root) {
        return root;
    }
    let invertNode = (root, left, right) => {
        let temp = left;
        left = right;
        right = temp;
        root.left = left;
        root.right = right;
    }
    let queue = [root];
    while (queue.length) {
        let len = queue.length;
        while (len > 0) {
            let currNode = queue.shift();
            invertNode(currNode, currNode.left, currNode.right);
            currNode.left && stack.push(currNode.left);
            currNode.right && stack.push(currNode.right);
            len--;
        }
    }
    return root;
}