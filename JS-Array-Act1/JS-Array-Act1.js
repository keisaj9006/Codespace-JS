array = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //creating new array with 10numbers


function sumArray(array) { //our function to sum all numbers
    let sum = 0; //the sum is initialed for 0

    // go through each item array and sum each item in this function
    array.forEach(element => {
        sum += element;
      });
    
      return sum; //return sum
    }
//
console.log(sumArray(array));// show result 55 on the console

