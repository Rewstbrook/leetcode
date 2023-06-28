/**
 * @description 找出字符串中第一个匹配项的下标
 *              js的indexOf方法实现
 */
// 前缀表统一减一
// function strStr(haystack, needle) {
//     if (needle.length == 0) {
//         return 0;
//     }
//     const getNext = function (needle) {
//         let next = [];
//         let j = -1;
//         next.push(j);
//         for (let i = 0; i < needle.length; i++) {
//             while (j <= 0 && needle[i] != needle[j + 1]) {
//                 j = next[j];
//             }
//             if (needle[i] == needle[j + 1]) {
//                 j++
//             }
//             next.push(j);
//         }
//         return next;
//     }
//     let next = getNext(needle);
//     let j = -1;
//     for (let i = 0; i < haystack.length; i++) {
//         while (j >= 0 && haystack[i] !== needle[j + 1]) {
//             j = next[j];
//         }
//         if (haystack[i] === needle[j + 1]) {
//             j++;
//         }
//         if (j === needle.length - 1) {
//             return (i - needle.length + 1);
//         }
//     }
//     return -1;
// } 
function strStr(haystack, needle) {
    let next = getNext(needle);
    let i = 0;  // 在haystack移动
    let j = 0;  // 在needle移动
    while (i < haystack.length && j < needle.length) {
        if (haystack[i] == needle[j]) { // 匹配上了
            i++;
            j++;
        } else {
            j = next[j];
        }
    }
    return j == needle.length ? (i - j) : -1;
}
function indexKMP(haystack, needle) {
    let next = getNext(needle);
    let i = 0;      // 在haystack上移动
    let j = 0;      // 在needle上移动
    while (i < haystack.length && j < needle.length) {
        if (haystack[i] == needle[j]) {     // 匹配上了，字符相等
            // 匹配上了就继续匹配下一个
            i++;
            j++;
        } else {
            // 匹配失败，没匹配上就去next中找下一个匹配位置继续
            // 并且只需要更新needle的位置即可
            // j跳到next中j的位置字符前边最长公共前后缀的值
            j = next[j];
        }
    }
    return j == needle.length ? (i - j) : -1;
}
function getNext(needle) {
    let next = new Array(needle.length).fill(0);
    next[0] = -1;
    let i = 0;
    let j = -1;
    while (i < needle.length - 1) {
        if (j == -1 || needle[i] == needle[j]) {
            i++;
            j++;
            // next[i] = j;
            next[i] = needle[i] != needle[j] ? j : next[j];
        } else {
            j = next[j];
        }
    }
    return next;
}