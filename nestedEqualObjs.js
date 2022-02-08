// check if two objects coniating nested objects are equal

const isEquivalent = (obj1, obj2) => { 
	let keys1 = Object.keys(obj1);
	let keys2 = Object.keys(obj2);

	if (keys1.length != keys2.length) {
		 return false;
		}
 
		for (let key of keys1) {
			let value1 = obj1[key];
			let value2 = obj2[key];
			console.log("obj1",typeof value1);
			if(typeof value1 === 'object' && typeof value2 === 'object'){
				if(!isEquivalent(value1, value2))
				return false;
			}
			else {
	 			if (value1 !== value2) {
		 		return false;
	 }
 }
}
	 return true;

}

 const hero1 = {
  name: 'Batman',
  address: {
    city: 'Gotham'
  }
};
const hero2 = {
  name: 'Batman',
  address: {
    city: 'Gotham'
  }
};
console.log(isEquivalent(hero1, hero2)); 