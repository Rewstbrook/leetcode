const tree = {
    value: 1,
    left: {
        value: 2,
        left: {
            value: 4,
            left: {
                value: 8
            },
            right: {
                value: 9
            }
        },
        right: {
            value: 5,
            left: {
                value: 10
            },
            right: {
                value: 11
            }
        }
    },
    right: {
        value: 3,
        left: {
            value: 6,
            left: {
                value: 12
            },
            right: {
                value: 13
            }
        },
        right: {
            value: 7,
            left: {
                value: 14
            },
            right: {
                value: 15
            }
        }
    }
};

function treePath(data) {

}
// 深度优先遍历
// 前序遍历
// 递归
function preorderTraversal(node, nodeList = []) {
    if (node) {
        nodeList.push(node.value);
        node.left && deepFirstSearch(node.left, nodeList);
        node.right && deepFirstSearch(node.right, nodeList);
    }
    return nodeList;
}
// 非递归
function preorderTraversal1(node) {
    const result = [];
    const stack = [];
    stack.push(node);
    while (stack.length) {
        const item = stack.pop();
        result.push(item.value);
        item.right && stack.push(item.right);
        item.left && stack.push(item.left);

    }
    return result;
}

// 中序遍历
// 递归 
function inorderTraversal(node, nodeList = []) {
    const result = [];
    if (!node) { return }
    inorderTraversal(node.left, nodeList);
    nodeList.push(node.value);
    inorderTraversal(node.right, nodeList);
    return nodeList;
}
// 迭代非递归
function inorderTraversal1(node, nodeList = []) {
    const result = [];
    if (!node) { return }
    const stack = [];
    let current = node;
    while (stack.length || current) {
        while (current) {
            stack.push(current);
            current = current.left;
        }
        const node = stack.pop();
        result.push(node.value);
        if (node.right != null) {
            current = node.right;
        }
    }
    return result;
}

// 后序遍历
// 递归
function postorderTraversal(node, nodeList = []) {
    if (!node) return
    postorderTraversal(node.left, nodeList);
    postorderTraversal(node.right, nodeList);
    nodeList.push(node.value);
    return nodeList;
}
function postorderTraversal1(node) {
    if (!node) {
        return;
    }
    const stack = [node];
    const result = [];
    while(stack.length) {
        const current = stack.pop();
        node.right && postorderTraversal1(node.right);
        node
        nodeList.pus
    }
}
console.log(inorderTraversal1(tree));
console.log(inorderTraversal(tree));