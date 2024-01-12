function findAnagrams(s, p) {
    let baseNum = "a".charCodeAt();
    let result = [];
    let target = new Array(26).fill(0);
    let window = new Array(26).fill(0);
    let left = 0;
    let right = 0;
    for (let i = 0; i < p.length; i++) {
        target[p[i].charCodeAt() - baseNum]++;
    }
    while (right < s.length) {
        let index = s[right].charCodeAt() - baseNum;
        window[index]++;
        if (right - left + 1 === p.length) {
            if (target.toString() == window.toString()) {
                result.push(left);
            }
            // 左指针右移
            let leftIndex = s[left].charCodeAt() - baseNum;
            window[leftIndex]--;
            left++;
        }
        right++;
    }
    return result;
}
console.log(findAnagrams("cbaebabacd", "abc"));