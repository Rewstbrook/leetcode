/**
 * @description 二叉树迭代遍历
 */
const treeData = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4,
            left: {
                val: 8
            },
            right: {
                val: 9
            }
        },
        right: {
            val: 5,
            left: {
                val: 10
            },
            right: {
                val: 11
            }
        }
    },
    right: {
        val: 3,
        left: {
            val: 6,
            left: {
                val: 12
            },
            right: {
                val: 13
            }
        },
        right: {
            val: 7,
            left: {
                val: 14
            },
            right: {
                val: 15
            }
        }
    }
};
// 前序迭代遍历 中->左->右
function preorderTraversalStack(root) {
    const reuslt = [];
    const stack = [];
    if (root == null) {
        return reuslt;
    }
    stack.push(root);
    while (stack.length) {
        const node = stack.pop();
        reuslt.push(node.val);
        node.right && stack.push(node.right);
        node.left && stack.push(node.left);
    }
    return reuslt;
}
var preorderTraversal2 = function(root, res = []) {
    const stack = [];
    if (root) stack.push(root);
    while(stack.length) {
        const node = stack.pop();
        if(!node) {
            res.push(stack.pop().val);
            continue;
        }
        if (node.right) stack.push(node.right); // 右
        if (node.left) stack.push(node.left); // 左
        stack.push(node); // 中
        stack.push(null);
    };
    return res;
};
console.log(preorderTraversalStack(treeData));
console.log(preorderTraversal2(treeData));


// 中序迭代遍历 左->中->右
function inorderTraversalStack(root) {
    const result = [];
    const stack = [];
    let current = root;
    if (root == null) {
        return result;
    }
    while (stack.length || current) {
        if (current) {
            stack.push(current);
            current = current.left;
        } else {
            current = stack.pop();
            result.push(current.val);
            current = current.right;
        }
    }
    return result;
}
var inorderTraversalStack2 = function(root, res = []) {
    const stack = [];
    if (root) stack.push(root);
    while(stack.length) {
        const node = stack.pop();
        if(!node) {
            res.push(stack.pop().val);
            continue;
        }
        if (node.right) stack.push(node.right); // 右
        stack.push(node); // 中
        stack.push(null);
        if (node.left) stack.push(node.left); // 左
    };
    return res;
};
console.log(inorderTraversalStack(treeData));
console.log(inorderTraversalStack2(treeData));

// 后序迭代遍历 左->右->中
function postorderTraversal(root) {
    // if (!root) {
    //     return;
    // }
    // const stack = [];
    // const result = [];
    // while(stack.length) {
    //     result.unshift(root.val);
    //     root.left && stack.push(root.left);
    //     root.right && stack.push(root.right);
    //     root = stack.pop();
    // }
    // return result;

    let res = [], stack = []
    while (root || stack.length) {
        res.unshift(root.val)
        if(root.left)stack.push(root.left)
        if(root.right)stack.push(root.right)
        root = stack.pop()
    }
    return res
}
var postorderTraversal2 = function(root, res = []) {
    const stack = [];
    if (root) stack.push(root);
    while(stack.length) {
        const node = stack.pop();
        if(!node) {
            res.push(stack.pop().val);
            continue;
        }
        stack.push(node); // 中
        stack.push(null);
        if (node.right) stack.push(node.right); // 右
        if (node.left) stack.push(node.left); // 左
    };
    return res;
};
console.log(postorderTraversal(treeData));
console.log(postorderTraversal2(treeData));