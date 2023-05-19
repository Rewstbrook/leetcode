/**
 * @description 滑动窗口最大值
 * @param {*} nums 
 * @param {*} k 
 */
function maxSlidingWindow(nums, k) {
    if (nums.length == 0 || k == 0) {return null}
    const queue = [];
    let ans = [];
    for (let i = 0; i < nums.length; i++) {
        if (queue.length == 0) {
            queue.push(nums[i]);
        } else {
            // 保证队首元素下标和将要push的元素下标满足 indexIn - indexOut <= k - 1
            // 如果不满足，就直接弹出队首元素
            while (i - queue[0] > k - 1) {
                queue.shift();
            }
            while (nums[i] >= nums[queue[queue.length - 1]])  {
                queue.pop();
            }
            queue.push(i)
        }
        if (i <= k - 1) {
            ans.push(nums[queue[0]])
        }
    }
    return ans;
}