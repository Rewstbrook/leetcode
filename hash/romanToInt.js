/**
 * @description lc-13罗马数字转整数
 */
function romanToInt(s) {
    const romanMap = new Map([
        ["M", 1000],
        ["D", 500],
        ["C", 100],
        ["L", 50],
        ["X", 10],
        ["V", 5],
        ["I", 1]
    ]);
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        let currentValue = romanMap.get(s[i]);
        if (i < s.length - 1 && currentValue < romanMap.get(s[i + 1])) {
            result -= currentValue;
        } else {
            result += currentValue;
        }
    }
    return result;
}