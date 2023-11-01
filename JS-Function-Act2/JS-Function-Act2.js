// lets create a factorial function
function factorial(i) { 
  if (i === 0) {
    return 1; //if the number i 0, its factorial is 1
 }
  return i * factorial(i-1);     //our procedure
}

console.log(factorial(6)); //result 720