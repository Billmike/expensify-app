const multiplier = {
	numbers: [2, 4, 6],
	multiplyBy: 4,
	multiply() {
		return this.numbers.map((multiplied) => this.multiplyBy * multiplied);
	}
}

console.log(multiplier.multiply());
