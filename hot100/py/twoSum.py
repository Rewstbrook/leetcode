def twoSum(arr, target):
    if len(arr) < 2:
        return None
    
    start = 0
    idxMap = {}
    while start < len(arr):
        calcNext = target - arr[start]
        if calcNext in idxMap:
            return [idxMap.get(calcNext), start]
        
        idxMap[arr[start]] = start
        start += 1

    return None

print(twoSum([2,11,7,15], 9))