/*
Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0. 
*/

function expandedForm(num) {
	let numStr = num.toString().split('');

	return numStr
		.map((item, index) => {
			for (let i = numStr.length - index; i > 1; i--) {
				item += '0';
			}
			return item;
		})
		.filter((item) => !item.startsWith(0))
		.join(' + ');
}
