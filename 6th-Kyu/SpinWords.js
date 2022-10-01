function spinWords(string) {
	//splits the string into an array
	const words = string.split(' ');

	for (let i = 0; i < words.length; i++) {
		//reverses all over 5 letter words
		if (words[i].length >= 5) {
			words[i] = words[i].split('').reverse().join('');
		}
	}
	//provides new string with all words joined
	return words.join(' ');
}

console.log(spinWords('welcome'));
// Expected: emoclew

console.log(spinWords('Hey fellow warriors'));
// Expected: Hey wollef sroirraw

console.log(spinWords('This is a test'));
// Expected: This is a test

console.log(spinWords('This is another test'));
// Expected: This is rehtona test

console.log(spinWords('You are almost to the last test'));
// Expected: You are tsomla to the last test
