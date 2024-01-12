/**
 * @description leetcode-3无重复字符最长子串
 */
function lengthOfLongestSubstring(str) {
    let index = 0;
    let maxLen = 0;
    let map = new Map();
    for (let i = 0; i < str.length; i++) {
        if (map.has(s[i])) {
            index = Math.max(index, map.get(s[i]) + 1);
        }
        map.set(s[i], i);
        maxLen = Math.max(i - index + 1, maxLen);
    }
    return maxLen;
}