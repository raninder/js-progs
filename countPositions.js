// count letter positions -{ H: [ 0 ], E: [ 1 ], L: [ 2, 3 ], O: [ 4 ] }
const countPositions = (str) => {
	let res = {};
	for (let i=0; i<str.length; i++) {
		if(res[str[i]]){
		res[str[i]].push(i);
	}
	else{
		res[str[i]] = [i];
	}
}
return res;
}

console.log(countPositions("HELLO"));