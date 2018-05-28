// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {}

function matrix(n) {
    var result = [];
    for(let i = 0; i < n; i++) {
        let elements = [];
        const start = 1 + n*i , end = n + n*i;
        for(let j = start; j <= end; j++){
            elements.push(j);
        }
        result.push(elements);
    }
    return result;
}

module.exports = matrix;
