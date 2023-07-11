/**
 * @description 路径总和2
 */
function pathSum(root, targetSum) {
    if (root == null || targetSum == null) {
        return [];
    }
    let queue = [root];
    let valArr = [0];
    let pathsArr = [[]];
    let result = [];
    while (queue.length) {
        let cur = queue.shift();
        let curVal = valArr.shift();
        let tempArr = pathsArr.shift();
        tempArr.push(cur.val);
        curVal += cur.val;
        if (!cur.left && !cur.right && curVal == targetSum) {
            result.push([...tempArr]);
        }
        if (cur.left) {
            queue.push(cur.left);
            valArr.push(curVal);
            pathsArr.push(tempArr);
        }
        if (cur.right) {
            queue.push(cur.right);
            valArr.push(curVal);
            pathsArr.push(tempArr);
        }
    }
    return result;
}