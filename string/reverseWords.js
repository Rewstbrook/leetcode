/**
 * @description 翻转字符串中的单词
 */
function reverseWords(s) {
    // 先去除头尾的空格
    s = s.trim() + " ";
    let result = "";
    let left = 0;
    let tmpStr = "";
    while (left < s.length) {
        if (s[left] == " " && tmpStr.length != 0) {
            result = `${tmpStr} ${result}`;
            tmpStr = "";
        } else if (s[left] != " ") {
            tmpStr += s[left];
        }
        ++left;
    }
    return result.trim();
}
console.log(reverseWords("the sky is blue"))