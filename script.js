
function calculateArea(sideLength) {
    return sideLength * sideLength;
  }
  
 
  function calculatePerimeter(sideLength) {
    return 4 * sideLength;
  }
  
  const sideLength = parseFloat(prompt("Enter the side length of the square farm (in meters):"));
 
  if (!isNaN(sideLength) && sideLength > 0) {
    
    const area = calculateArea(sideLength);
    const perimeter = calculatePerimeter(sideLength);
  
    console.log(`The area of the farm is ${area} square meters.`);
    console.log(`The perimeter of the farm is ${perimeter} meters.`);
  } else {
    console.log("Please enter a valid positive number for the side length.");
  }
  