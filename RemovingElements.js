/*
Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!
*/

function removeEveryOther(arr) {
	let ans = [];
	let pos = 0;

	for (let i = 0; i < arr.length; i++) {
		if ((i + 1) % 2 === 0) {
			continue;
		}

		ans[pos++] = arr[i];
	}

	return ans;
}
