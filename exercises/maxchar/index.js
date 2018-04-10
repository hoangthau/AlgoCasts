// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str){
    if(!str || typeof str !== 'string') {
        return '';
    }
    let countChar = {};
    let maxCount = 0;
    let maxChar = '';

    for(const char of str) {
        if(!countChar[char]){
          countChar[char] = 1;
        } else {
          countChar[char]++;
        }
    }

    for(const char in countChar) {
        if(countChar[char] > maxCount) {
            maxCount = countChar[char];
            maxChar = char;
        }
    }
    return maxChar;
}

module.exports = maxChar;
