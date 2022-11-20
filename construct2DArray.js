var construct2DArray = function(original, m, n) {
    return ~~original.length === m * n ? new Array(m).fill(null).map((item, index) => original.slice(n * index, (index + 1) * n)) : []
};
var removeElement = function(nums, val) {
    return nums.filter(item => {return item != val});
};
console.log(removeElement([3,2,2,3], 3));