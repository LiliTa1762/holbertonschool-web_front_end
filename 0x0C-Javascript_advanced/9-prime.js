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
let time = performance.now();
console.log("Execution time of printing countPrimeNumbers was "+ time + " milliseconds")
countPrimeNumbers();
