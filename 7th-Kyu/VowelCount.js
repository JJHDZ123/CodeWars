function getCount(str) {
	const Str = str
		.replace(/b/g, '')
		.replace(/c/g, '')
		.replace(/d/g, '')
		.replace(/f/g, '')
		.replace(/g/g, '')
		.replace(/h/g, '')
		.replace(/j/g, '')
		.replace(/k/g, '')
		.replace(/l/g, '')
		.replace(/m/g, '')
		.replace(/n/g, '')
		.replace(/p/g, '')
		.replace(/q/g, '')
		.replace(/r/g, '')
		.replace(/s/g, '')
		.replace(/t/g, '')
		.replace(/v/g, '')
		.replace(/w/g, '')
		.replace(/x/g, '')
		.replace(/y/g, '')
		.replace(/z/g, '')
		.replace(/ /g, '');
	return Str.length;
}

console.log(getCount('abracadabra'));
