/**\
 * @description n叉树层序遍历
 */
const tree = {
    val: 1,
    children: {
        val: 2,
        
    }
}
function nlevelOrder(root) {
    let result = [];
    let queue = [root];
    while (queue.length > 0) {
        let currentValue = [];
        let len = queue.length;
        while (len > 0) {
            let currentNode = queue.shift();
            currentValue.push(currentNode.val);
            if (currentNode.children) {
                for (let item of currentNode.children) {
                    queue.push(item);
                }
            }
            len--;
        }
        result.push(currentValue);
    }
    return result;
}