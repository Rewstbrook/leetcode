/**
 * @description 二叉树前序遍历 中->左->右
 */
// 递归版1
function preorderTraversal(root) {
    let result = [];
    const traversal = function(node) {
        if (root == null) {
            return;
        }
        result.push(node.val);
        node.left && traversal(node.left);
        node.right && traversal(node.right);
    }
    traversal(root);
    return result;
}
// 递归版2
function preorderTraversal2(root, nodeList = []) {
    if (root == null) {
        return;
    }
    nodeList.push(root.val);
    node.left && preorderTraversal2(root.left, nodeList);
    node.right && preorderTraversal2(root.right, nodeList);
    return nodeList;
}