/**
 * @description 无重复字符最长子串
 */

function lengthOfLongestSubstring(str) {
    let max = 0;
    let index = 0;
    let map = new Map();
    for (let i = 0; i < str.length; i++) {
        if (map.has(str[i])) {
            // 记录上一次字符出现的位置
            index = Math.max(map.get(str[i]) + 1, index);
        }
        map.set(str[i], i);
        max = Math.max(max, i - index + 1);
    }
    return max;
}
console.log(lengthOfLongestSubstring("pwkewlks"))