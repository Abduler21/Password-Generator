
// Variables that we will use to display the password 
var generateBtn = document.querySelector("#generate");
var passDisplay = document.getElementById("#password");

//Variables needed to make the password
var passLength;
var lowerCase;
var upperCase;
var Symbols;
var numbers;

// When the use clicks generate pass btn it will ask prompts to user
generateBtn.addEventListener("click",function() {
    passLength=prompt("How Many Characters Will Your Password Be? (ex: 1,2,3,etc...)");

    //conditions to check if length of password is valid
    while(passLength < 8 || passLength >128){
        passLength=prompt("Password must be between 8-128 characters. Please try again");
        while(isNaN(passLength)){
            passLength=prompt("Please enter a number.");
        }
    }
    while(isNaN(passLength)){
        passLength=prompt("Please enter a number.");
        while(passLength < 8 || passLength >128){
            passLength=prompt("Password must be between 8-128 characters. Please try again");
        }
    }
        
    lowerCase=confirm("Do you want it to be lowercase");
    upperCase=confirm("Do you want it to be Uppercase");
    Symbols=confirm("Do you want symbols?");
    numbers=confirm("Do you want numbers?");
    

})  


// function generate_password (len,lower,upper,symbol,numb) {

// }