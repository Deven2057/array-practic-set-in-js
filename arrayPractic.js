// practic set 1

// -------->problem no 1: creat an aray of number and take input from the user to add numbers to tis array.

// let arr=[1,2,3,4,5]
// let a=prompt("enter a number")
// a=Number.parseInt(a)
// arr.push(a)
// console.log(arr)


//........> problem no 2: keep adding numbers to the array (practic set 1) until 0 is added to the array.

// let arr=[1,2,3,4,5]
// let a
// do{
//  a=prompt("enter a number")
//  a=Number.parseInt(a)
//  arr.push(a)  
// }
// while(a!=0)
// console.log(arr)


//------>problem set 3:filter for the number divisible from 10 from array

let arr=[20,2,3,40,5]
let a=arr.filter((value)=>{
    
      return value%10==0
  
})
console.log(a)
