function validIPAddress(str) {
    if (!str) {
        return false;
    }
    let strArr = str.split(".");
    if (strArr.length != 4) {
        return false;
    }
    for (let item of strArr) {
        if (item.length < 1 || item.length > 4) {
            return false;
        }
        if (item.charAt(0) == "0" && item.length > 0) {
            return false;
        }
        let ans = 0;
        for (let itemChild of item) {
            if (isNaN(itemChild)) {
                return false;
            }
            ans += ans * 10 + (itemChild - "0");
        }
        console.log(ans);
        if (ans > 255) {
            return false;
        }
    }
    return true;
}
function validIPAddress2(str) {
    if (!str) {
        return false;
    }
    let reg = /[a-f]/;
    let strArr = str.split(":");
    if (strArr.length != 8) {
        return false;
    }
    for (let item of strArr) {
        if (item.length > 4 || item.length == 0) {
            return false;
        }
        for (let itemChild of item) {
            if (isNaN(itemChild) && reg.test(itemChild.toLowerCase)) {
                return false;
            }
        }
    }
    return true;
}
function test(str) {
    let ans = 0;
    for (let itemChild of str) {
        if (isNaN(itemChild)) {
            return false;
        }
        ans = ans * 10 + (itemChild - "0");
    }
    return ans;
}
let ip1 = "1e1.1.1.1";
let ip2 = "00.1.1.2";
let ip3 = "172.16.254.1";
// console.log(validIPAddress(ip3));
console.log(test("254"))