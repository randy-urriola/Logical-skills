function pal(x) {
	let number = x;
	let pali = 0;
	let reverse = 0;

	while (number >= 1) {
		pali = number % 10;
		number = Math.trunc(number / 10);
		reverse = reverse * 10 + pali;
	}

	return x === reverse ? true : false;
}

console.log(pal(121));
