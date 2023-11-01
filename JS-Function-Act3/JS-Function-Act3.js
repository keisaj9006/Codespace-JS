//Let's create a function to check is the number is Prime or not
function isPrime(num) {
    if (num <= 1) return false; //check if the number is less or equal to 1
    if (num === 2) return true; //check if the number is equal to 2
     for (let i= 2; i < num; i++) { //we start from number 2              out the even numbers
    if (num % i === 0) { //Check if 'i' divides 'number' without leaving the remainder
     return false; // if no than show false
      }
     }
     return true; //if yes than show true
    }

console.log(isPrime(19)); //for 19 it's going to be true
console.log(isPrime(24)); // for 19 result will be false