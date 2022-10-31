var construct2DArray = function(original, m, n) {
    return ~~original.length === m * n ? new Array(m).fill(null).map((item, index) => original.slice(n * index, (index + 1) * n)) : []
};
console.log(construct2DArray([1,2,3,4], 2, 2));
console.log(construct2DArray([1], 1, 1));