const countLetters = (str) => {
	let res = {};
	let count = 1;
	for (let s of str) {
		if(res.hasOwnProperty(s)){
			count++;
		res[s] = count;
	}
	else{
		res[s] = count;
	}
}
return res;
}

console.log(countLetters("LHL"));