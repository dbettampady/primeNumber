function isPrime(num){
	var prime = 1;
	if(num == 0 || num == 1){
		console.log("0 and 1 are neither prime or composite");
	}else if(num == 2){
		console.log(num+" is a prime number");
	}else{
		for(var i=2; i<num/2; i++){
			if(num %i == 0){
				prime = 0;
				break;
			}
		}
	}
	if(prime == 1){
		console.log("Number is prime");
	}else{
		console.log("Number is composite");
	}
}

isPrime(2);
isPrime(10);
isPrime(31);