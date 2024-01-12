/**
 * @description 滑动窗口最大值
 * @param {*} nums 
 * @param {*} k 
 */
function maxSlidingWindow(nums, k) {
    const len = nums.length;
    const result = [];
    const deque = [];
    for (let i = 0; i < k; i++) {
        while (deque.length && deque[deque.length - 1] <= nums[i]) {
            deque.pop();
        }
        deque.push(nums[i]);
    }
    console.log(deque)
    for (i = k; i < len - k + 1; i++) {
        result.push(deque[0]);
        while (deque.length && deque[deque.length - 1] <= nums[i + k - 1]) {
            deque.pop();
        }
        deque.push(i + k - 1);
    }
    return result;
}
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))