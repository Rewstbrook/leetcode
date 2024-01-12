/**
 * @description leetcode-121买卖股票最佳时机
 */
function maxProfit(prices) {
    let lowerPrice = prices[0];// 重点是维护这个最小值（贪心的思想） 
    let profit = 0;
    for(let i = 0; i < prices.length; i++){
        lowerPrice = Math.min(lowerPrice, prices[i]);// 贪心地选择左面的最小价格
        profit = Math.max(profit, prices[i] - lowerPrice);// 遍历一趟就可以获得最大利润
    }
    console.log(profit)
    return profit;
}
maxProfit([7,1,5,3,6,4])


/**
 * @description 不相邻元素最大和
 */
function maxSum(nums) {
    let dp = [];
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
    }
    return dp[nums.length - 1];
}