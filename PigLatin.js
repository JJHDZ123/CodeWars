/*
    Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
*/

function pigIt(str) {
	const words = str.split(' ');

	return words
		.map((word) => {
			return word.match(/[A-z]/i) ? `${word.substring(1)}${word.substring(0, 1)}ay` : word;
		})
		.join(' ');
}

console.log(pigIt('Pig latin is cool'));
console.log(pigIt('Hello world !'));
