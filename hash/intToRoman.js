/**
 * @description lc-12整数转罗马数字
 */
function intToRoman(num) {
    let result = "";
    const romanMap = new Map([
        [1000, "M"], [900, "CM"], [500, "D"], [400, "CD"],
        [100, "C"], [90, "XC"], [50, "L"], [40, "XL"],
        [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"],
    ]);
    const romanValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    for (let value of romanValues) {
        let romanSymbol = romanMap.get(value);
        while (num >= value) {
            result += romanSymbol;
            num -= value;
        }
    }
    return result;
}
console.log(intToRoman(3323))