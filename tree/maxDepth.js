/**
 * @description 二叉树最大深度
 */
function maxDepth(root) {
    if (!root) {
        return 0;
    }
    let queue = [root];
    let count = 0;
    while (queue.length) {
        let len = queue.length;
        count++;
        while (len > 0) {
            let cur = queue.shift();
            if (cur.left) {
                queue.push(cur.left);
            }
            if (cur.right) {
                queue.push(cur.right);
            }
            len--;
        }
    }
    return count;
}