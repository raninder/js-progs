const countOnly = (items,itemsToCount) => {
	let res = {};
	for(let key in itemsToCount){
		if(itemsToCount[key]){
			let count = 0;
			for(let item of items){
				if(item === key){
					count++;
				}
			}
			res[key]=count;
		}
	}
	return res;
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

console.log(result1);