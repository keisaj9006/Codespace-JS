array = [20, 30, 25, 35, -16, 60, -100];
//lets create the function to calculate the average
function avg(array) {
    let sum = 0; // the sum is initialed for 0
 
    // Iterate the elements of the array
    array.forEach(function (element, indx) {
      sum += element;
    });
 
    // Return the average 
    return sum / array.length;
  }
 
  console.log(avg(array)); //show us the result on the console