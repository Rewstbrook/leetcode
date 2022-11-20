/**
 * @desc 最高海拔
 * @param {number[]} gain
 * @return {number}
 */
// [0,-5,-4,1,1,-6]
// [-4,-3,-2,-1,4,3,2]
// [-5,1,5,0,-7]    [0,-5,-4,1,1,-6]
var largestAltitude = function (gain) {
    // 假设最高海拔为0
    let max = 0;
    let current = 0;
    for (let i = 0; i < gain.length; i++) {
        current = current + gain[i];
        max = Math.max(current, max);
    }
    return max;
};
// console.log(largestAltitude([-4,-3,-2,-1,4,3,2]))

/**
 * @desc 有效字符串
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const stack = [];
    const strMap = new Map();
    strMap.set("(", ")");
    strMap.set("{", "}");
    strMap.set("[", "]");
    // for (let i = 0; i < s.length; i++) {
    //     let c = s[i];
    //     switch (c) {
    //         case "(":
    //             stack.push(")");
    //             break;
    //         case "[":
    //             stack.push("]");
    //             break;
    //         case "{":
    //             stack.push("}");
    //             break;
    //         default:
    //             if (c !== stack.pop()) {
    //                 return false;
    //             }
    //             // break;
    //     }
    // }
    // return stack.length;

    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        if (strMap.has(c)) {
            stack.push(c);
            console.log(stack)
        } else if (strMap.get(stack.pop()) !== c) {
            return false;
        }
    }
    return stack.length === 0;
};
console.log(isValid("()[]{}"));
console.log(isValid("{}"))