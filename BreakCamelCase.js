/*
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

function solution(string) {
	let splitStr = string.split('');
	let newStr = '';

	splitStr.forEach((e) => {
		e === e.toUpperCase() ? (newStr += ' ' + e) : (newStr += e);
	});

	return newStr;
}
