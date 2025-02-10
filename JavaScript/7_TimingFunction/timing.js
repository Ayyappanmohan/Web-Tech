

let wish=()=>{
    console.log("good afternoon everyone");
    
}
setTimeout(msg,5000)

// ! setTimeout

// let wish =()=>{
//     console.log("happy birth 🤪");

// }
// setTimeout(wish,3000)





















let hi=()=>{
    console.log("Hi");
    
}
let t=setTimeout(hi,3000)
clearTimeout(t)

let interval=setInterval(()=>{
    console.log("hello");
    
},1000)

setTimeout(()=>{
    clearInterval(interval)
},3000)