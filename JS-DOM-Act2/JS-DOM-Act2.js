// creating function 'calculateSphereVolume'
function calculateSphereVolume(radius) {
    if (radius <= 0) {
      return "Radius must be a positive number.";
    } // here is a condition, if the number will be '0' or less we expect output 'Radius must be a positive number.' It means that the number can't be lower than '0'
    
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3); //Sphere formula: v= 4/3*pi*r3
    return volume.toFixed(2);
  }
  // creating function 'calculateAndDisplayVolume'
  function calculateAndDisplayVolume() {
    const radiusInput = document.getElementById("radius"); // this is our radius Input number
    const volumeOutput = document.getElementById("volume"); // and our output volume
    
    const radius = parseFloat(radiusInput.value); // we accept a string and cover it into a number
    const volume = calculateSphereVolume(radius); // our expected output
    
    volumeOutput.textContent = "The volume of the sphere is: " + volume; // here is our output and we expect counted score
  }