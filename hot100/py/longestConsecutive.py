nums1 = [0,3,7,2,5,8,4,6,0,1]
nums2 = [100,4,200,1,3,2]
def longestConsecutiveSetVersion(nums: list[int]):
    """
        最长连续序列长度 - set 版本
    """
    newSet = set(nums);
    print(newSet);
    longest = 0
    for num in newSet:
        length = 1;
        if num - 1 not in newSet:
            while num + length in newSet:
                length += 1
            longest = max(length, longest)
    return longest
def longestConsecutiveSortVersion(nums: list[int]):
    """
        最长连续序列长度 - sort版本
    """
    nums.sort()
    print(nums)
    longest = 0
    for num in nums:
        length = 1
        if num - 1 in nums:
            continue;
        

if __name__ == "__main__":
    longestConsecutiveSortVersion(nums2)