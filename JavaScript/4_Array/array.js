

let arr=[19,"hello",true,30]
console.log(arr)


//! how to get the length of the Array

console.log(arr.length)

//! Array Methods

//! 1.push()

// it is used to add element at the end of the array.

arr.push("bye")
console.log(arr)

//! 2.pop()

// it is used to remove element at the end of the array.


let names = ["rohit","rahul","virat"]

names.pop()
console.log(names)

//! 3. unshift()

// it is used to add element at the starting of the array.

names.unshift("dhawan")
console.log(names)

//! 4.shift()

// it is used to remove the element from the end of the array.

let fruits= ["mango","banana","apple"]

fruits.shift()
console.log(fruits)


//! 5.indexOf()

// it is used to get the index of the given element.

let subjects=["html","css","js","java"]
console.log(subjects.indexOf("css"))

//! 6. includes()
// it is used to check whether the given element is present or not in the array.

console.log(subjects.includes("html"))

//! 7. concat()

// it is used to combine two or more than two arrays.

let arr1=[10,20]
let arr2=[90,80]

let combineArr =arr1.concat(arr2)
console.log(combineArr)

//! 8. join()

// it is used to convert array to string.

let characters=['h','e','l','l','o']

console.log(characters.join(""))

//!9. reverse()

// it is used to reverse the array.

console.log(characters.reverse())


// !  Splice

// it will modify the original array.
// it will take 3 parameters(startIndex, count, replacementValue)


//            0  1  2  3  4  5
let numbers=[10,20,30,40,50,60]

numbers.splice(2,2)

console.log(numbers); //[10,20,50,60]


let numbers2=[10,20,30,40,50,60]

numbers2.splice(2,2,"how")

console.log(numbers2);


let numbers3=[10,20,30,40,50,60]

numbers3.splice(2,0,'hi')

console.log(numbers3);


// ! higherOrder array methods

// it is higherOrder array methods and it is used to traverse the array
// it has three parameters (elements,index, array)
// it can not retrun anything

let arr3=[10,20,30,40,50,60]

arr3.forEach(( ele , index , array)=>{
    console.log(index, ele , array);
})

let elements =arr3.forEach((ele)=>{
    return ele
})

// ! print elements greater than 30.

// input:[10,20,30,40,50,60]
// output:[40,50,60]

let arr4=[10,20,30,40,50,60]

let output=[]
arr4.forEach((ele)=>{
if (ele>30) {
        // console.log(ele);
        output.push(ele)    
}
})

console.log(output);


// ! Filter()

// it is higherorder array methods.
// it can take 3 parameters.
// it will check condition and it will return the element.


let greater=arr3.filter(ele=>{
    return ele>30
})

console.log(greater);




// ! add 100 with all the elements and return one new array.

// input:[10,20,30,40,50,60]
// output:[110,120,130,140,150,160]



/*arr3.forEach((ele)=>{
    arr3.push(ele +100)    
})
console.log(arr3);   or    */


// ! map()

let add_100 = arr3.map((ele)=>{
    return ele+100
})

console.log(add_100);


// ! add all elements of the array


let sum =0 
arr3.map((ele)=>{
    sum=sum+ele
})

console.log(sum);


// ! reduce()

let add = arr3.reduce((acc,ele)=>{
    return acc+ele
})

console.log(add);

// ! sort

let unsortedArr = [80,1,90,2,84]

let asc = unsortedArr.sort((a,b)=>{
    return a-b
})

console.log(unsortedArr);


let desc = unsortedArr.sort((x,y)=>{
    return y-x
})

console.log(desc);

