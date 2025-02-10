let ob={
    sname:"abc",
    age:30,
    isstudent:true
}

console.log(ob.sname);

console.log(ob.age);


// ! object destructure

let{isstudent,sname,age}=ob
console.log(sname);

// ! array destructure

let arr=[10,20,30,40]

let[a,b,c,d]=arr
console.log(a);
console.log(b);


// ! reset parameter

let hello =(a,b,...c)=>{
    console.log(a);
    console.log(b);
    console.log(c);
}

hello(10,20,30,40,50,60,70,80)


let[x,...y]=arr

console.log(y);






