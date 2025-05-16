export class Person {
	constructor(name) {
		this.name = name;
	}

	say(name) {
		console.info(`Hello ${name}, my name is ${this.name}`);;
	}
}