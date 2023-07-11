/**
 * @description 二叉树所有路径
 */
const tree = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4
        },
        right: {
            val: 5
        }
    },
    right: {
        val: 3,
        left: {
            val: 6
        }
    }
}
function binaryTreePaths(root) {
    if (!root) {
        return null;
    }
    let result = [];
    let stack = [root];
    let paths = [""];
    while (stack.length) {
        let cur = stack.pop();
        let path = paths.pop();
        if (cur && !cur.left && !cur.right) {
            result.push(path + cur.val);
            continue;
        }
        path += `${cur.val + "->"}`;
        if (cur.left) {
            stack.push(cur.left);
            paths.push(path);
        }
        if (cur.right) {
            stack.push(cur.right);
            paths.push(path);
        }
    }
    return result;
}
console.log(binaryTreePaths(tree));