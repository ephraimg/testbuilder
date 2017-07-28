// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cn) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.

  let len = cn.length;

	if (len === 15 && ['34', '37'].includes(cn.slice(0,2))) { 
		return "American Express" 
	} 

	else if (len === 14 && ['38', '39'].includes(cn.slice(0,2))) {
		return 'Diner\'s Club'
	} 

    else if (
    	  (
    		[4903, 4905, 4911, 4936, 6333, 6759].includes(Number(cn.slice(0,4))) 
     	    || ['564182', '633110'].includes(cn.slice(0,6))
     	  ) &&
     	    [16, 18, 19].includes(len)
     	){
     	return 'Switch'
    }

	else if (cn[0] === '4' && [13, 16, 19].includes(len)) {
		return "Visa"
	} 

	else if (len === 16 && Number(cn.slice(0,2)) > 50 && Number(cn.slice(0,2)) < 56) {
		return "MasterCard"

	}	

	else if ([16, 19].includes(len) && (cn.slice(0,2) === '65' || cn.slice(0,4) === '6011' || 
		(Number(cn.slice(0,3)) > 643 && Number(cn.slice(0,3)) < 650))) {
		return "Discover"
	}

	else if ((len > 11 && len < 20) && ['5018', '5020', '5038', '6304'].includes(cn.slice(0,4))) {
		return "Maestro"
	}

	else if (len > 15 && len < 20 && (
		((Number(cn.slice(0,3)) > 623) && Number(cn.slice(0,3)) < 627) ||
        ((Number(cn.slice(0,4)) > 6281) && Number(cn.slice(0,4)) < 6289) ||
        ((Number(cn.slice(0,6)) > 622125) && Number(cn.slice(0,6)) < 622926) )
	  ) { 
        return 'China UnionPay' 
    }

    else {
    	return 'Invalid card number'
    }
    
};


