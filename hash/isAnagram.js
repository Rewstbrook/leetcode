/**
 * @description 有效的字母异位词
 */
function isAnagram(str, target) {
    let strMap = new Map();
    for (let item of str) {
        if (strMap.get(item)) {
            strMap.set(item, strMap.get(item) + 1);
        } else {
            strMap.set(item, 1);
        }
    }
    for (let item of target) {
        if (!strMap.get(item)) {
            return false;
        }
        strMap.set(item, strMap.get(item) - 1);
    }
    return true;
}
isAnagram("anagram", "nagaram");