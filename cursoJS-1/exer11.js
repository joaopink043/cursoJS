const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter your weight (kg): ", (weight) => {
  rl.question("Enter your height (m): ", (height) => {
    // Convert the strings to floating-point numbers
    weight = parseFloat(weight);
    height = parseFloat(height);

    // Calculate BMI (BMI = weight / (height * height))
    let bmi = weight / (height * height);
    console.log(`Your BMI is: ${bmi.toFixed(2)}`);

    if (bmi < 18.5) {
      console.log("Classification: Underweight");
    } else if (bmi < 24.9) {
      console.log("Classification: Normal weight");
    } else if (bmi < 29.9) {
      console.log("Classification: Overweight");
    } else {
      console.log("Classification: Obesity");
    }

    // Close the readline interface
    rl.close();
  });
});