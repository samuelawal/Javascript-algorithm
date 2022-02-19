//  Body Mass index

// Create a BMI calculator that reads the user’s weight in pounds and height in inches (or, if you prefer, the user’s weight in kilograms and height in meters), then calculates and displays the user’s body mass index. Also, display the following information from the Department of Health and Human Services/National Institutes of Health so the user can evaluate his/her BMI:



// First create a function that takes in the weight and height of a user in Kilograms in height respectively

function userWeight(w, h){
const userData = w / Math.pow(h, 2)
console.log(userData.toFixed(2))
if(userData < 18.5){
    console.log('Your BMI report shows that you are underweight')
}
else if( userData <= 24.9){
    console.log('Your BMI report shows that you are Normal')
}
else if(userData <= 29.9){
    console.log('Your BMI report shows that you are Overweight')
}
else{
    console.log('Your BMI report shows that you are Obese')
}

}
userWeight(120, 1.5)