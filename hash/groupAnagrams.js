/**
 * 
 * @param {@description} 字母异位词分组
 */
function groupAnagrams(strs) {
    const baseNum = 'a'.charCodeAt();
    const strMap = new Map();
    for (const item of strs) {
        const count = new Array(26).fill(0);
        // 遍历字符串所有字符，统计单词出现次数
        for (const itemChild of item) {
            count[itemChild.charCodeAt() - baseNum]++;
        }
        let strCount = count.toString();
        if (strMap.get(strCount)) {
            let currentCountData = strMap.get(strCount).concat(item)
            strMap.set(strCount, currentCountData);
        } else {
            strMap.set(strCount, [item]);
        }
    }
    return [...strMap.values()];
}
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));