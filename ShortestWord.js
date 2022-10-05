/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

function findShort(s) {
	let strArr = s.split(' ');
	let shortest = 0;

	console.log(strArr);

	for (let word in strArr) {
		if (shortest === 0) {
			shortest = strArr[word].length;
		}

		if (strArr[word].length < shortest) {
			shortest = strArr[word].length;
		}
	}

	return shortest;
}
