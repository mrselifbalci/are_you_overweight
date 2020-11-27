
//  Calculate the person's BMI and tell them if they are overweight.

const calculateBMI = (name, mass, height) => {
  let BMI = (mass / (height * height)).toFixed(2);
  if (BMI < 18.5) {
    return `${name}'s BMI is ${BMI}. ${name} is underweight.`;
  } else if (BMI >= 18.5 && BMI <= 24.9) {
    return `${name}'s BMI is ${BMI}. ${name}'s weight is in normal range.`;
  } else if (BMI <= 25 && BMI >= 29.9) {
    return `${name}'s BMI is ${BMI}. ${name}'s weight is overweight.`;
  } else if (BMI >= 30) {
    return `${name}'s BMI is ${BMI}. ${name}'s weight is obese.`;
  }
};
let name = prompt("Enter your name.");
let mass = prompt("Enter your mass in kg.");
let height = prompt("Enter your height in meters.");

alert(calculateBMI(name, mass, height));
