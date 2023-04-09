// Q1
let str = "The five boxing wizards jump quickly";
let newstr = '';
for(let i = str.length - 1; i >= 0; i--) {
	newstr += str[i];
}
// console.log(newstr);
let words = str.split(' ');
let reverseWords = words.reverse();
let reverseString = reverseWords.join(' ');
console.log(reverseString);