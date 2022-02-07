//reversing command line args strings
// node strrev.js hello dear
// [ 'olleh', 'raed' ]

const reverse = (str) =>{
	let arr =[];
	let res = str.map( (item)=> {
	let newstr = '';
	for(let i=item.length-1; i>=0; i--){
		newstr+= item[i];
	}
	arr.push(newstr);
	}
	)
	return arr;
}
const args = process.argv;
args.splice(0,2);
console.log(reverse(args));