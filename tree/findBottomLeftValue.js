/**
 * @description 找树左下角的值
 */
const tree = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4
        }
    },
    right: {
        val: 3,
        left: {
            val: 5
        },
        right: {
            val: 6
        }
    }
}
let tree2 = {
    val: 2,
    left: {
        val: 1
    },
    right: {
        val: 3
    }
}
function findBottomLeftValue(root) {
    if (!root) {
        return null;
    }
    let queue = [root];
    let result = "";
    while (queue.length) {
        let len = queue.length;
        for (let i = 0; i < len; i++) {
            let cur = queue.shift();
            if (i == 0) {
                result = cur.val;
            }
            cur.left && queue.push(cur.left);
            cur.right && queue.push(cur.right);
        }
    }
    return result;
}
console.log(findBottomLeftValue(tree2));
console.log(findBottomLeftValue(tree));