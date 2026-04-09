/**
 * @description 字母异位词分组
 * @param {Array} strs 字符串数组
 * @returns {string[][]} 分组之后的异位词数组
 */
function groupAnagramsVersion1(strs) {
    const map = new Map();
    let baseNum = "a".charCodeAt();
    for (let str of strs) {
        let arr = new Array(26).fill(0);
        for (let s of str) {
            let n = s.charCodeAt() - baseNum
            arr[n] += 1;
        }
        let ns = arr.join(",")
        if (!map.has(ns)) {
            map.set(ns, [])
        }
        map.get(ns).push(str)
    }
    return Array.from(map.values())
}
console.log(groupAnagramsVersion1(["eat", "tea", "tan", "ate", "nat", "bat"]))