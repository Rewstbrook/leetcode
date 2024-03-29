/**
 * @description 左旋转字符串
 *              字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。
 *              请定义一个函数实现字符串左旋转操作的功能。比如，输入字符串"abcdefg"和
 *              数字2，该函数将返回左旋转两位得到的结果"cdefgab"。
 */
function reverseLeftWords(s, n) {
    if (s.length < n) {
        return s;
    }
    let result = "";
    for (let i = n; i < s.length; i++) {
        result += s[i];
    }
    for (let i = 0; i < n; i++) {
        result += s[i];
    }
    return result;
}