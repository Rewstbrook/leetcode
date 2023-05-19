/**
 * 最小覆盖子串
 */
function minWindow(str, target) {
    // 定义map-need记录需要匹配的字符以及对应的出现次数
    // 定义map-scrollWindow记录窗口中满足need条件的字符及其出现次数
    let need = new Map();
    let scrollWindow = new Map();
    for (let item of target) {
        need.set(item, need.get(item) ? need.get(item) + 1 : 1);
    }
    console.log(need);
    let left = 0;
    let right = 0;
    let start = 0;
    let valid = 0;
    let len = Infinity;
    while (right < str.length) {
        let c = str[right];     // 将要移入窗口的字符
        right++;                // 窗口扩大右移
        // 将窗口内数据更新
        if (need.has(c)) {
            if (scrollWindow.has(c)) {
                scrollWindow.set(c, scrollWindow.get(c) + 1);
            } else {
                scrollWindow.set(c, 1);
            }
            if (scrollWindow.get(c) === need.get(c)) {
                valid++;
            }
        }
        // 判断左侧窗口是否需要收缩
        while (valid == need.size) {
            // 更新最小子串
            if (right - left < len) {
                start = left;
                len = right - left;
            }
            // d是移出窗口的字符
            let d = str[left];
            // 缩小窗口
            left++;
            // 进行窗口内数据的一系列更新
            if (need.has(d)) {
                if (scrollWindow.get(d) === need.get(d)) {
                    valid--;
                }
                scrollWindow.set(d, scrollWindow.get(d) - 1);
            }
        }
    }
    return len === Infinity ? "" : str.substr(start, len);
}
// console.log(minWindow("ADOBECODEBANC", "ABC"));
console.log(minWindow("a", "aa"));
