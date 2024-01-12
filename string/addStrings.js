function addStrings(num1, num2) {
    let len1 = num1.length;
    let len2 = num2.length;
    let carry = 0;
    let result = "";
    while (len1 > 0 || len2 > 0) {
        let n1 = parseInt(num1.charAt(len1 - 1)) || 0;
        let n2 = parseInt(num2.charAt(len2 - 1)) || 0;
        let sum = n1 + n2 + carry;
        carry = sum / 10 | 0;
        result = sum % 10 + result;
        len1--;
        len2--;
    }
    if (carry > 0) {
        result = carry + result;
    }
    return result;
}
function addStrings2(num1, num2) {
    let len1 = num1.length - 1;
    let len2 = num2.length - 1;
    let carry = 0;
    let result = "";
    while (len1 >= 0 && len2 >= 0) {
        let n1 = ~~num1[len1];
        let n2 = ~~num2[len2];
        let sum = n1 + n2 + carry;
        carry = sum / 10 | 0;
        result = sum % 10 + result;
        len1--;
        len2--;
    }
    console.log(result);
    if (len1 >= 0) {
        while (len1 >= 0) {
            let n1 = ~~num1[len1];
            let sum = n1 + carry;
            carry = sum / 10 | 0;
            result = sum % 10 + result;
            len1--;
        }
    }
    if (len2 >= 0) {
        while (len2 >= 0) {
            let n2 = ~~num2[len2];
            let sum = n2 + carry;
            carry = sum / 10 | 0;
            result = sum % 10 + result;
            len2--;
        }
    }
    if (carry > 0) {
        result = carry + result;
    }
    return result;
}
console.log(addStrings("11", "123"))