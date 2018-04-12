// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    const strA = stringA.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g,"");
    const strB = stringB.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g,"");
    const countCharA = countChar(strA);
    const countCharB = countChar(strB);
    const indexCountChar = strA.length > strB.length ? countCharA : countCharB;
    for(const char in indexCountChar){
        if(indexCountChar.hasOwnProperty(char)){
            if(countCharA[char.toLowerCase()] !== countCharB[char.toLowerCase()]){
                return false;
            }
        }
    }
    return true;

}

function countChar(str) {
    let countChar = {};
    for(let char of str) {
        char = char.toLowerCase();
        if(!countChar[char]){
          countChar[char] = 1;
        } else {
          countChar[char]++;
        }
    }
    return countChar;
}

module.exports = anagrams;
