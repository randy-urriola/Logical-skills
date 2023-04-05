function romanInteger(s) {
	array = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };
	result = 0;
	s = s.toUpperCase();

	s = s.split('');
	for (let i = 0; i < s.length; i++) {
		if (array[s[i]] < array[s[i + 1]]) {
			result += array[s[i + 1]] - array[s[i]];
			i++;
		} else {
			result += array[s[i]];
		}
	}
	return result;
}

console.log(romanInteger('MCMXCIV'));
