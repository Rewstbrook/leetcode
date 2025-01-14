def productExceptSelf(nums):
    n = len(nums)
    prefix = 1
    suffix = 1
    answer = [1] * n
    for i in range(n):
        answer[i] *= prefix
        prefix *= nums[i]
    for i in range(n - 1, -1, -1):
        answer[i] *= suffix
        suffix *= nums[i]
    
    return answer

print(productExceptSelf([1, 2, 3, 4])) # [24, 12, 8, 6]