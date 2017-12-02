class Person {
	constructor(name="Anonymous", age=0) {
		this.name = name;
		this.age = age;
	}
	getGreeting() {
		return `Hi there. My name is ${this.name}, and I am ${this.age} yrs old`
	}
}

class Student extends Person {
	constructor(name, age, major) {
		super(name, age);
		this.major = major;
	}
	hasMajor() {
		return !!this.major;
	}
	getGreeting() {
		let description = super.getGreeting();
		if (this.hasMajor()) {
			description += ` I am a ${this.major} major.`;
	}
		return description;
	}
}

class Traveler extends Person {
	constructor(name, age, homeDescription) {
		super(name, age);
		this.homeDescription = homeDescription;
	}
	hasHomeLocation() {
		return !!this.homeDescription;
	}
	getGreeting() {
		let greeting = super.getGreeting();
		if (this.hasHomeLocation()) {
			greeting += `. I currently live in ${this.homeDescription}.`
		}
		return greeting;
	}
}


const us = new Traveler('Peter', 40);
console.log(us.getGreeting());

