// check if two objects are equal

const isEquivalent = (a, b) => { 
	// arrays of property names
	// let aProps = Object.getOwnPropertyNames(a); 
	let aProps = Object.keys(a);
	let bProps = Object.keys(b);
 

 // If their property lengths are different, they're different objects
	if (aProps.length != bProps.length) {
		 return false;
		}
 
 for (let i = 0; i < aProps.length; i++) {
	 let propName = aProps[i];

	 // If the values of the property are different, not equal
	 if (a[propName] !== b[propName]) {
		 return false;
	 }
 }
	 // If everything matched, correct
	 return true;
}

 console.log(isEquivalent({'hi':12},{'hi':13}));  // returns true