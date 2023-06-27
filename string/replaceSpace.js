/**
 * @description 替换空格
 */
function replaceSpace(s) {
    const arr = Array.from(s);
    // 计算空格数量
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == " ") {
            count++;
        }
    }
    let left = arr.length - 1;
    let right = arr.length + count * 2 - 1;
    while (left >= 0) {
        if (arr[left] == " ") {
            arr[right--] = "0";
            arr[right--] = "2";
            arr[right--] = "%";
            left--;
        } else {
            arr[right--] = arr[left--];
        }
    }
    return arr.join("");
}
console.log(replaceSpace("We are happy."))