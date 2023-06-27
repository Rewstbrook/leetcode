/**
 * @description 四数之和
 */
function fourSumCount(nums1, nums2, nums3, nums4) {
    const mapA = new Map();
    let result = 0;
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            let sum = nums1[i] + nums2[j];
            if (mapA.get(sum)) {
                mapA.set(sum, mapA.get(sum) + 1);
            } else {
                mapA.set(sum, 1);
            }
        }
    }
    for (let i = 0; i < nums3.length; i++) {
        for (let j = 0; j < nums4.length; j++) {
            let sum2 = 0 - nums3[i] - nums4[j];
            if (mapA.get(sum2)) {
                result += mapA.get(sum2);
            }
        }
    }
    return result;
}