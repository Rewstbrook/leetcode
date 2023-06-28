/**
 * @description 二叉树后序遍历 左->右->中
 */
// 递归1
function postorderTraversal(root) {
    let result = [];
    const traversal = function (node) {
        if (!root) {
            return;
        }
        node.left && traversal(node.left);
        node.right && traversal(node.right);
        result.push(node.val);
    }
    traversal(root);
    return result;
}
// 递归2
function postorderTraversal2(root, nodeList = []) {
    if (!root) {return}
    root.left && postorderTraversal(node.left);
    root.right && postorderTraversal(root.right);
    nodeList.push(root.val);
    return nodeList;
}