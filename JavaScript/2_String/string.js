let sname="ayyappan"
let sname2='AYYAPPAn'
let sname3=`ayyappan`

console.log(typeof sname2);

//! how to know the lenght of the string 
console.log(sname.length);

//! 1. touppercase()

/*it is used to convert any string into uppercase and it will return one now new string */

let ayya=sname.toUpperCase()
console.log(ayya);

console.log(sname2);


//! 2.lowercase()

// it is used to convert any string into lowercase and it will return one new string

let lower=sname2.toLowerCase()

console.log(lower);
console.log(sname2);

//! 3.indexof()
/*it is used to know that character of the specific character .
it will take the first occurance of the character */

console.log(sname.indexOf('p'));

//! 4.CharAt()
/*it is used to know that character of the specific index */

console.log(sname.charAt(5));

//! 5.Includes

/*it will return true if one string is present inside the another string otherwise it will return false */

console.log(sname.includes(``));
console.log(sname.includes('a'));
console.log(sname.includes("ayyappan"));
console.log(sname.includes('s'));

//! 6. trim()
/*it is used to remove the white space from both sides of the string*/

let str=` Money `

console.log(str.length);
console.log(str.trim().length);

//! 7. split

// it will convert the string into array

let str1="hi from all of you"

console.log(str1.split(""));
console.log(str1.split("o"));

//! 8.slice()

//it is used to extract the string from another string.
// here it will take two parameters (start index, end index).
//it will not includes the endindex value.
// whenever we are giving the index value from right to left (bignumber to small number )it will not print any output.

console.log(str1.slice(0,4));
console.log(str1.slice(4));
console.log(str1.slice(-1));
console.log(str1.slice(-4,-1));


//! 9.substring()

//it is used to extract the string from another string.
//here it will take two paramerters (start index, end index).
//it will not includes the endindex value.
//here if we use negative index it will be converted into 0.


console.log(str1.substring(0,4));
console.log(str1.substring(4));
console.log(str1.substring(4,1));
console.log(str1.substring(3));
console.log(str1.substring(-1));

//! 10.lastindexof()

//it will give the last occurances index of the specific character

let str3="kelivn for kemn"
console.log(str3.lastIndexOf("e"));

//! 11.concat()
// it is used to combine two or more than two strings

let combinedStr=str3.concat(" ",str3,"hot")
console.log(combinedStr);


