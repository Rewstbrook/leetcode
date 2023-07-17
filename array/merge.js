/**
 * leetcode-88 合并两个有序数组
 */
function merge(nums1, m, nums2, n) {
    let len1 = m - 1;
    let len2 = n - 1;
    let len = m + n - 1;
    let current = 0;
    while (len1 >= 0 || len2 >= 0) {
        console.log(nums1);
        if (nums1[len1] >= nums2[len2]) {
            current = nums1[len1];
            len1--;
        } else if (nums1[len1] < nums2[len2]) {
            current = nums2[len2];
            len2--;
        } else if (len1 == -1) {
            current = nums2[len2];
            len2--;
        } else if (len2 == -1) {
            current = nums1[len1];
            len1--;
        }
        nums1[len] = current;
        len--;
    }
    return nums1;
}
console.log(merge([1, 2, 3, 0, 0, 0, 0], 3, [2, 5, 6, 7], 4));