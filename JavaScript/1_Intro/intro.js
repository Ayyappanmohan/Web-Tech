

//! output methods

console.log("I am external js file")

document.write("hello") 

// alert("heyyy thevidiya")

// ! How to declare variable 

// var,let,const

var a =10
console.log(a)

let b =20
console.log(b)

const c = 30
console.log(c)

//? in var keyword re-declaration is possible

var a = 100
console.log(a)

//? in var keyword re-declaration is not possible

// let b = 20
// console.log(b)

// ! notes: for const we have to do the variable declaration and intialization in the same line

var myName
 
myName = "deva"
console.log(myName)


// ! data types


// ! primitive datatypes

// number , boolean , string , undefined , null , bigint

// ! non-primitive datatypes

// array , object , function

// ! number

let num1=20
console.log(num1)

//! types of operator is uesd to know that datatypes

console.log(typeof num1)

let num2=20.8

console.log(typeof num2)

//! boolean

let isPlayer = false 
console.log(typeof isPlayer)

//! string 

let str1='hello'
let str2='hello'
let str3='hello'

console.log(typeof str1)
console.log(typeof str2)
console.log(typeof str3)

//! undefined 

// when any varaible is declared but not initialized is called undefined

let empName

console.log(empName)

//! null

let sal=null

console.log(sal)
console.log(typeof sal)  // object 

//! bigint

let bigNumber = 2n

console.log(bigNumber)
console.log(typeof bigNumber)


//! Non-Primitive datatypes

//! Array
// it is colllection of hertogenous or homogenous element

let arr=[10,"hello",true,null,undefined,[20,80]]

//! object

// it will return inside curuly branches and we separate the data by using coma in object we store the data in the form key and value pairs,we can create a object inside the another object.

let student={
    sname:"Deva",
    sid:100,
    isPlayer:false,
    skills:['java','html'],
    add:{
        city:"chennai",
        pin:123544
    }
}

console.log(student)

//! function

//block of instruction which is used to perform the specified task

function display()
{
    console.log('i am display fuction..')
}

display()