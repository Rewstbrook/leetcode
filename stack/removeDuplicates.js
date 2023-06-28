/**
 * @description 删除字符串中所有相邻重复项
 */
function removeDuplicates(s) {
    let arr = Array.from(s);
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        // const current = stack.pop();
        if (s[i] == stack[stack.length - 1]) {
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }
    return stack.join("");
}
console.log(removeDuplicates("abbaca"))