// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n){
    var columns = 2*n -1;
    for(let i = 0; i < n; i++) {
        let stair = '';
        for(let j = 0; j < columns; j++) {
           let pos = Math.floor(columns/2);
           if(pos - i <= j && pos + i >= j) {
             stair += '#'
           } else {
             stair += ' '
           }
        }
    }
    return stair;
}


module.exports = pyramid;
