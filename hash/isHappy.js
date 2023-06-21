/**
 * @description 快乐数
 */
// 获取数字每一位的平方和
function getSum(n) {
    let sum = 0;
    while (n) {
        sum += (n % 10) ** 2;
        n = Math.floor(n / 10);
    }
    return sum;
}
function isHappy(num) {
    if (num == 1) {
        return true;
    }
    const numMap = new Map();
    while (true) {
        let sum = getSum(num);
        if (numMap.has(sum)) {
            return false;
        }
        if (sum == 1) {
            return true;
        }
        numMap.set(num, 1);
        num = getSum(num);
    }
}
console.log(isHappy(19));