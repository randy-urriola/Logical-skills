function twoSum(nums, target) {
	const rest = {};
	for (let i = 0; i < nums.length; i++) {
		const temp = nums[i];
		if (rest[target - temp]) {
			return [rest[target - temp].index, i];
		}

		rest[temp] = {
			index: i,
			value: target - temp,
		};
	}
}

console.log(twoSum([2, 7, 11, 15], 9));
