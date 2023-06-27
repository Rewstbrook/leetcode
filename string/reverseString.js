/**
 * @description 翻转字符串
 */
function reverseString(s) {
    const result = [];
    for (let i = s.length - 1; i >= 0; i--) {
        result.push(s[i]);
    }
    return result;
}
// console.log(reverseString(["h","e","l","l","o"]))

/**
 * @description 给定一个字符串 s 和一个整数 k，从字符串开头算起，每计数至 2k 个字符，就反转这 2k 字符中的前 k 个字符。
 *              如果剩余字符少于 k 个，则将剩余字符全部反转。
 *              如果剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符，其余字符保持原样。
 * @param {*} s 
 * @param {*} k 
 */
function reverseStr(s, k) {
    const arr = Array.from(s);
    for (let i = 0; i < s.length; i += 2 * k) {
        customReverse(arr, i, i + k - 1);
    }
    return arr.join('');
}
function customReverse(arr, left, right) {
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
}
console.log(reverseStr("abcdefg", 2))