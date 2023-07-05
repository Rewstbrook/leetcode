/**
 * @description n叉树的后序遍历
 */
// 左->右->中
function postorder(root) {
    let result = [];
    if (!root) {
        return [];
    }
    let stack = [];
    while (root || stack.length) {
        result.unshift(root.val);
        for (let i = 0; i < cur.children.length; i++) {
            stack.push(cur.children[i]);
        }
        root = stack.pop();
    }
    return result;
}