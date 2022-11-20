const defaultPhraseList = ["drop", "pilot", "mushroom", "gown", "tilt", "razor", "chapter", "pioneer", "scrub", "strong", "erode", "chicken"];
const defaultPhraseList2 = new Array(2).fill(null).map((_, index) => defaultPhraseList.slice(index * 6, (index + 1) * 6));
// const defaultPhraseList3 = defaultPhraseList.reduce((prev, current, index) => {
//     const pIndex = Math.floor(index / 6);
//     const mIndex = index % 6;
//     prev.push(defaultPhraseList2[pIndex * 6][mIndex * 6]);
//     console.log(pIndex, mIndex);
//     console.log(prev);
//     // if (mIndex == 0) {

//     //     prev.push(defaultPhraseList[index]);
//     // } else {
//     //     prev.push(defaultPhraseList[index]);
//     // }
//     return prev;
// }, [])
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    let dd = []
    dd = matrix.map((val, matrixIndex) => {
        let arr = []
        for (let i = val.length - 1; i >= 0; i--) {
            // 第一行等于第一列，以此类推
            arr.push(matrix[i][matrixIndex])
        }
        return arr
    })
    matrix.forEach((val, index) => {
        matrix[index] = dd[index]
    })
};
var defaultPhraseList4 = rotate(defaultPhraseList2);
console.log(defaultPhraseList4);

