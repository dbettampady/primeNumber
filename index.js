function isPrime(num) {
  var sqrtnum=Math.floor(Math.sqrt(num));
    var prime = num != 1;
    for(var i=2; i<sqrtnum+1; i++) { // sqrtnum+1
        if(num % i == 0) {
            prime = false;
            break;
        }
    }
    if(prime){
	console.log("Number is Prime");
    }
    else{
	console.log("Number is Composite");
    }
}

isPrime(2);
isPrime(10);
isPrime(31);