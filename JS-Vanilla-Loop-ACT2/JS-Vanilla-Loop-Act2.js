// program to generate a multiplication

// take input 6 in our case
let number = parseInt(prompt('Enter an number: '));

//creating a multiplication
for(let i = 1; i <= 10; i++) {

    // multiply 'i' with number
    let result = i * number;

    //  result= number * numbers from 1 to 10
    console.log(`${number} * ${i} = ${result}`);
}