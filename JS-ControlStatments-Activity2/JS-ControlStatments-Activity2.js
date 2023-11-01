let x = 1524; // x=1524
let y = 2345; // y=2345
let z = 3321; // z=3321

if (x < y && y < z) //check if numbers increasing
        {
            console.log("Increasing order"); // block of code if condition is true
        }
        else if (x > y && y > z)  //check of numbers decreasing
        {
            console.log("Decreasing order"); //block of code if condition is fals
        }
        else  // check if numbers are neither decreasing or increasing
        {
            console.log("Neither increasing or decreasing order");
        }