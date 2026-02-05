// const r1=require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// r1.question("Enter something: ",
//     (answer)=>{
//         console.log("You entered: ",answer);
//         r1.close();
//     }
// );

const calci = (op, a, b) => {
    switch(op) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return b === 0 ? "Error" : a / b;
        default:
            return "Invalid operation";
    }
}

console.log(calci('+', 1, 2));
console.log(calci('-', 3, 1));
console.log(calci('*', 2, 3));
console.log(calci('/', 6, 0));