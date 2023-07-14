/**
 * @description leetcode-66
 * 给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。
   最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
 */
function plusOne(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        let sum = digits[i] + 1;
        digits[i] = sum % 10;
        if (digits[i] == sum) {
            return digits;
        }
    }
    digits.splice(0, 0, 1);
    return digits;
}
console.log(plusOne([1, 2, 3]));
console.log(plusOne([1, 2, 9]));
console.log(plusOne([8, 9, 9]));