function parentheses(s) {
	let pila = [];
	let index = 0;
	s = s.split('');
	for (let i = 0; i < s.length; i++) {
		if (
			(s[i] == ')' && pila[index - 1] == '(') ||
			(s[i] == '}' && pila[index - 1] == '{') ||
			(s[i] == ']' && pila[index - 1] == '[')
		) {
			pila.pop();
			index--;
		} else {
			pila.push(s[i]);
			index++;
		}
	}

	return !pila.length ? true : false;
}

console.log(parentheses('()[]'));
