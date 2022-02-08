// check if two objects are equal

const isEquivalent = (obj1, obj2) => { 
	// arrays of property names
	// let aProps = Object.getOwnPropertyNames(a); 
	let keys1 = Object.keys(obj1);
	let keys2 = Object.keys(obj2);
 

 // If their property lengths are different, they're different objects
	if (keys1.length != keys2.length) {
		 return false;
		}
 
		for (let key of keys1) {
	 // If the values of the property are different, not equal
	 if (obj1[key] !== obj2[key]) {
		 return false;
	 }
 }
	 // If everything matched, correct
	 return true;
}

 console.log(isEquivalent({'hi':12},{'hi':12}));  // returns true