// let arr = [1, 2, 3];
// let a = 1;
// let arr1 = arr.map((item, index, target) => {
//     return item * 2;
// }, a);
// console.log(arr1)
// function customMap(cb, thisArg) {
//     if (!Array.isArray(this) || typeof cb !== "function") {
//         throw new Error("ss");
//     }
//     let result = [];
//     for (let i = 0; i < this.length; i++) {
//         result.push(cb.call(thisArg, this[i], i, this));
//         // result.push(cb(this[i], i, this));
//     }
//     return result;
// }
// Array.prototype.customMap = customMap;


/**
 * @desc 二分查找
 * @description 左闭右闭区间
 */
function binarySearch1(nums, target) {
    // let middle = 0;
    let result = null;
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let middle = left + ~~((right - left) / 2);
        console.log(middle)
        if (nums[middle] > target) {
            right = middle - 1;
        } else if (nums[middle] < target) {
            left = middle + 1;
        } else {
            result = middle
            return middle
        }
    }
}
/**
 * @desc 二分查找
 * @description 左闭右开区间
 */
function binarySearch2(nums, target) {
    let left = 0;
    let right = nums.length;
    while (left < right) {
        let middle = left + ~~((right - left) / 2);
        if (target == nums[middle]) {
            return middle;
        }
        if (nums[middle] > target) {
            right = middle;
        } else {
            left = middle + 1;
        }
    }
}
// console.log(binarySearch2([1,2,3,4,5,6,7], 4));

/**
 * @desc 搜索插入
 * @param {*} nums 
 * @param {*} target 
 */
function searchInsert(nums, target) {
    let left = 0;
    let right = nums.length;
    while (left <= right) {
        let middle = left + ~~((right - left) / 2);
        if (nums[middle] > target) {
            right = middle - 1;
        } else if (nums[middle] < target) {
            left = middle + 1;
        } else if (nums[middle] == target) {
            return middle;
        }
    }
    return right + 1;
}
/**
 * @desc leetcode-34
 */
function searchRange(nums, target) {
    let start = getStartIndex(nums, target);
    let end = getEndIndex(nums, target);
    return [start, end];
}
function getStartIndex(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let startIndex = -1;
    while (left <= right) {
        let middle = left + Math.floor((right - left) / 2);
        if (nums[middle] > target) {
            right = middle - 1;
        } else if (nums[middle] < target) {
            left = middle + 1;
        } else {
            startIndex = middle;
            right = middle - 1;
        }
    }
    return startIndex;
}
function getEndIndex(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let endIndex = -1;
    while (left <= right) {
        let middle = left + Math.floor((right - left) / 2);
        if (nums[middle] > target) {
            right = middle - 1;
        } else if (nums[middle] < target) {
            left = middle + 1;
        } else {
            endIndex = middle;
            left = middle + 1;
        }
    }
    return endIndex;
}
function binarySearchIndex(nums, target, isFindStart = true) {
    let left = 0;
    let right = nums.length - 1;
    let startIndex = -1;
    let endIndex = -1;
    while (left <= right) {
        let middle = left + Math.floor((right - left) / 2);
        if (nums[middle] == target) {
            if (isFindStart) {
                startIndex = middle;
                console.log('startIndex', startIndex);
                right = middle - 1;
            } else {
                endIndex = middle;
                console.log('endIndex', endIndex)
                left = middle + 1;
            }
        } else if (nums[middle] > target) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }
    if (isFindStart) {
        return startIndex;
    } else {
        return endIndex;
    }
}
function searchRange2(nums, target) {
    let startIndex = binarySearchIndex(nums, target, true);
    let endIndex = binarySearchIndex(nums, target, false);
    return [startIndex, endIndex];
}

console.log(searchRange2([2,2], 8));
console.log(searchRange2([5,7,7,8,8,10], 8));