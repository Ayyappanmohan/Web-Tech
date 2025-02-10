// ! Named function

function display()
{
console.log("i am display function");

}
display()

// ! fuction with parameter

function msg(a){
    console.log(a);
    
}

msg(20)

// ! function with return

function add(a,b,c) {
    return a+b-c
}

let a1=add(20,60,50)
console.log(a1);

// ! anonymous function 
//  function that does not have any name.

// ? syntax:function(){

// ?                 }

// now we have to store this function in one variable

let add1=function(a,b){
    console.log("I am function with expression");
    console.log(a+b);
    
}
add1(50,70)

let ayya=function(a,b,c){
    console.log("I am ayyappan function");
   return a+b+c
    
}

let gani=ayya(10,70,90)
console.log(gani);



// ! Arrow function 
let sub=(a,b)=>{
    console.log("I am arrow function");
    console.log(a-b);
}

sub(150,80)

let reverse=(a)=>{
    i=0
    j=a.length-1
    while (i>j)
    {
        if (a.charAt(i)!=a.charAt(j)) 
        {
            
                return false
            
        }
        i++
        j--
    }
    return true
    
}


let str='madam'

if (reverse(str)==true)
    {
        console.log("palindrome");
    }
    else{
        console.log("not palindrome");
    }


    // ! nested function

    let outer=()=>{
        let a=10

        // console.log(b);
        let inner=()=>{
            let b=40
            console.log(a*b);
            
        } 
        inner()
        
    }
    outer()


    // ! lexical scopping
    //  when we are taking nested function ,inner function can take the property of outer function but the outer function.It is called lexical scopping.

    // ! 
