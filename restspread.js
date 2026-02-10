// function sum(...numbers){
//     let total=0;
//     for(let i of numbers){
//         total+=i;
//     }
//     return total;
// }
// console.log(sum(1,2,3,4,5))

// let a=[1,2,3,4,5];
// let [first,sec,...last]=a;
// console.log(first,sec,...last)

// let arr=[1,2,3];
// let arr1=[...arr];
// console.log(arr1);

// function test(...args){
//     console.log(args);
// }
// let arr=[1,2,3];
// test(...arr)
// const isEven=(x)=>{
//   if(x%2===0) {
//     return "Even";
//   } else {
//     return "Odd";
//   }
// };
// console.log(isEven(15));

// const reverseString=(str)=>{
//     let rev="";
//     for(let i=str.length-1;i>=0;i--){
//         rev+=str.charAt(i);
//     }
//     return rev;
// }
// console.log(reverseString("Hello World"));

const averageMarks=(marks)=>{
    let sum=0;
    for(let mark of marks){
        sum+=mark;
    }
    let avg=sum/marks.length;
    if(avg>=40){
        return "Pass";
    }
    else{
        return "Fail";
    }
}
console.log(averageMarks([10,43,45,43,26,78]));