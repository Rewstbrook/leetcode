/**
 * @description 二叉树中序遍历 左->中->右
 */
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
// 递归1
function inorderTraversal(root) {
    let result = [];
    const traversal = function(node) {
        if (root == null) {
            return;
        }
        node.left && traversal(node.left);
        result.push(node.value);
        node.right && traversal(node.right);
    }
    traversal(root);
    return result;
}
// 递归2
function inorderTraversal2(root, nodeList = []) {
    if (!root) {return}
    root.left && inorderTraversal2(root.left, nodeList);
    nodeList.push(root.value);
    root.right && inorderTraversal2(root.right, nodeList);
    return nodeList;
}
console.log(inorderTraversal(tree));
console.log(inorderTraversal2(tree));