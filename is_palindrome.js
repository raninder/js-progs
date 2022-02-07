const palindrome = (str1,str2) => {
	// let splitStr = str1.split();
	// let revStr = splitStr.reverse();
	// let finalStr = revStr.join();
	let finalStr = str1.split().reverse().join();
	if(finalStr===str2)
	return "its palindrome";
	else 
	return "not palindrome";
}
let str1= "madam";
let str2="madam";

console.log(palindrome(str1,str2));

