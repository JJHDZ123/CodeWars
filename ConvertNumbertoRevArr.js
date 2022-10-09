/*
Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]
*/

function digitize(n) {
	const newArr = n.toString().split('');
	const ans = [];

	for (let item of newArr) {
		ans.unshift(Number(item));
	}

	return ans;
}
