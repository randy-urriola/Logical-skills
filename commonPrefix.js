function logestCommonPrefix(strs) {
	let index = Infinity;
	let index1 = -1;

	for (let i = 0; i < strs.length; i++) {
		for (let k = 0; k < strs[0].length; k++) {
			if (i < strs.length - 1) {
				if (strs[i].charAt(k) == strs[i + 1].charAt(k)) {
					index1++;
				} else {
					break;
				}
			} else {
				index1 = Infinity;
			}
		}
		if (index1 < index) {
			index = index1;
		}
		index1 = -1;
	}

	if (index == 1) {
		return strs[0].substring(0, 2);
	} else if (index == -1) {
		return '';
	} else if (index == 0) {
		return strs[0].charAt(index);
	} else {
		return strs[0].substring(0, index + 1);
	}
}

console.log(logestCommonPrefix(['flower', 'flower', 'flower', 'flower']));
