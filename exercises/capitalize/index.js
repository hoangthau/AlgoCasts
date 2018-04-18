// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    var strSplit = str.split('');
    for(const [i, value] of strSplit.entries()) {
        console.log(i, value);
        if(value === ' ' && strSplit[i+1]) {
            strSplit[i+1] = strSplit[i+1].toUpperCase();
        }
        if(i === 0) {
            strSplit[i] = strSplit[i].toUpperCase();
        }
    }
    return strSplit.join('');
}


module.exports = capitalize;
