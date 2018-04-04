// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let result = '';
	if(!str || typeof str !== 'string') {
		return result;
	}
	const len = str.length;
	for(let i = len - 1; i >= 0 ; i--) {
		result += str[i];
	}
	return result;
}

module.exports = reverse;
