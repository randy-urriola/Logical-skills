function removedu(nums) {
	let num = [];
	let k = 0;

	for (let i = nums.length - 1; i >= 0; i--) {
		if (nums[i] === nums[i - 1]) {
			num[i - 1] = nums[i];
			num[i] = '_';
			k++;
		} else {
			num[i] = nums[i];
		}
	}
	k = nums.length - k;
	num.sort();
	return [k, num];
}

let nume = removedu([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
console.log(nume);
