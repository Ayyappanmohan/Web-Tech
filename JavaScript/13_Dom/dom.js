

// ! 1. How to access any element

//  ? document.getElementById()

let p1=document.getElementById("p1")

console.log(p1)

let con1= document.getElementById("con1")

console.log(con1)

//  ! 2.how to know what is present inside the 
let con2=document.getElementById("con2") 
// console.log(con2);

// ! i>innerText
console.log(con2.innerText)


// ! ii> innerHTML
console.log(con2.innerHTML)

let p2 =document.getElementById("p2")

p2.innerText='HI'


//  con2.innerText='hello how are you'


con2.innerHTML=' <h2> I am from js file</h2> <p> hi </p>'