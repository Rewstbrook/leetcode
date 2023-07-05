/**
 * @description n叉树前序遍历
 */
// 先中
function preorder(root) {
    let result = [];
    if (!root) {
        return result;
    }
    let stack = [root];
    while (stack.length) {
        let cur = stack.pop();
        result.push(cur.val);
        for (let i = cur.children.length - 1; i >= 0; i--) {
            stack.push(cur.children[i]);
        }
        for ()
    }
    return result;
}