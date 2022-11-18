/*
Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

Examples:

encrypt("012345", 1)  =>  "135024"
encrypt("012345", 2)  =>  "135024"  ->  "304152"
encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

encrypt("01234", 1)  =>  "13024"
encrypt("01234", 2)  =>  "13024"  ->  "32104"
encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
Together with the encryption function, you should also implement a decryption function which reverses the process.

If the string S is an empty value or the integer N is not positive, return the first argument without changes.
*/

function encrypt(text, n) {
	if (!text || text.length === 0) {
		return text;
	}

	for (let i = n; i > 0; i--) {
		let ans = '';

		for (let j = 1; j < text.length; j += 2) {
			ans += text[j];
		}
		for (let j = 0; j < text.length; j += 2) {
			ans += text[j];
		}

		text = ans;
	}
	return text;
}

function decrypt(encryptedText, n) {
	if (!encryptedText || encryptedText.length === 0) {
		return encryptedText;
	}

	let ans = new Array(encryptedText.length);

	for (let i = n; i > 0; i--) {
		let pos = 0;

		for (let j = 1; j < encryptedText.length; j += 2) {
			ans[j] = encryptedText[pos++];
		}
		for (let j = 0; j < encryptedText.length; j += 2) {
			ans[j] = encryptedText[pos++];
		}

		encryptedText = ans.join('');
	}
	return encryptedText;
}
