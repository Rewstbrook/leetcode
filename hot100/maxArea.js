/**
 * @description 盛水最多的容器
 * @param {*} height 
 */
// 暴力
function maxArea1(height) {
    let max = 0;
    for (let i = 0; i < height.length; i++) {
        for (let j = i + 1; j < height.length; j++) {
            let area = (j - i) * Math.min(height[i], height[j]);
            max = Math.max(max, area);
        }
    }
    return max;
}
// 双指针
function maxArea(height) {
    let max = 0;
    let left = 0;
    let right = height.length - 1;
    while (left < right) {
        let area = (right -left) * Math.min(height[left], height[right]);
        max = Math.max(max, area);
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return max;
}
console.log(maxArea([1,8,6,2,5,4,8,3,7]))