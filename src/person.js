export const isAdult = (age) => {
	if (age >= 18) {
		return console.log('Congratulations. You are an adult');
	} 
	console.log('Sorry. Try again when you are 18 or older.');
}

export const canDrink = (age) => {
	if (age >= 21) {
		return console.log('Congratulations. You can have some booze!!');
	}
	console.log('Sorry. Try again when you are older.');
}