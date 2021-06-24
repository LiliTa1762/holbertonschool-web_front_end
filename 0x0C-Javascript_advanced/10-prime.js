function countPrimeNumbers() {
	let counterd = 0;
	for (let  counter = 2; counter <= 100; counter++) {
		let notPrime = false;
		for (let i = 2; i <= counter; i++) {
			if (counter % i === 0 && i !== counter) {
				notPrime = true;
			}
		}
		if (notPrime === false) {
			counterd += 1;
		}
	}
	return counterd
}

let first = performance.now();
for (let i = 0; i < 100; i++) {
	countPrimeNumbers();
}
let second = performance.now();
let time = second - first;
console.log(`Execution time of calculating prime numbers 100 times was ${time} milliseconds.`);
