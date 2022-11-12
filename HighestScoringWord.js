/*
DESCRIPTION:
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/

function high(x) {
	let mapper = [ ...`abcdefghijklmnopqurstuvwxyz` ].reduce((prev, curr, index) => {
		prev[curr] = index + 1;
		return prev;
	}, {});

	let word = x.split(' ').reduce((prev, curr) => {
		let currCount = 0;
		[ ...curr ].forEach((letter) => {
			currCount += mapper[letter];
		});

		if (currCount > prev.value) {
			prev.value = currCount;
			prev.word = curr;
		}

		console.log(prev);
		return prev;
	}, { value: 0, word: '' }).word;

	return word;
}
