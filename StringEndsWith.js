/*
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string). 
*/

//answer
function solution(str, ending) {
	const ans = str.indexOf(ending, str.length - ending.length);

	return ans === -1 ? false : true;
}