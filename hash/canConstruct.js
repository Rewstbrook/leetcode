/**
 * @description leetcode-383赎金信
 */
function canConstruct(ransomNote, magazine) {
    if (ransomNote.length > magazine.length) {
        return false;
    }
    let maMap = new Map();
    for (let item of magazine) {
        maMap.set(item, (maMap.get(item) || 0) + 1);
    }
    for (let item of ransomNote) {
        if (!maMap.has(item) || !maMap.get(item)) {
            return false;
        }
        maMap.set(item, maMap.get(item) - 1);
    }
    return true;
}
// console.log(canConstruct("a", "b"));
// console.log(canConstruct("aa", "ab"));
// console.log(canConstruct("aa", "aab"));
function canConstruct(ransomNote, magazine) {
    if (magazine.length < ransomNote.length) {
        return false;
    }
    const start = 'a';
    const cnt = new Array(26).fill(0);
    for (const item of magazine) {
        cnt[item.charCodeAt() - start.charCodeAt()]++;
    }
    console.log(cnt);
    for (const item of ransomNote) {
        cnt[item.charCodeAt() - start.charCodeAt()]--;
        if (cnt[item.charCodeAt() - start.charCodeAt()] < 0) {
            return false;
        }
    }
    return true;
}
console.log(canConstruct("aa", "aab"));