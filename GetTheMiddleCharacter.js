/*
    You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

    A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.
*/

function getMiddle(s) {
	let strArr = s.split('');
	let length = strArr.length;
	let ans = '';

	console.log(strArr);

	if (length <= 0 || length > 1000) {
		console.log('expression error');
		ans = null;
	}

	if (length === 1) {
		ans = s;
	} else if (length % 2 === 0) {
		ans = `${strArr[length / 2 - 1]}${strArr[length / 2]}`;
	} else if (length % 2 === 1) {
		ans = `${strArr[Math.round(length / 2) - 1]}`;
	}

	return ans;
}
