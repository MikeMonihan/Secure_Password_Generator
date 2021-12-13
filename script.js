//Global variables 
var passLength = 0;
var lowerBool;
var upperBool;
var numericBool;
var specCharBool;


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //sets password's value to the generate password function output
  var password = generatePassword();
  //setting passwordText's value to the #password element on the page
  var passwordText = document.querySelector("#password");

  //Setting the value of passwordText to the password variable 
  passwordText.value = password;


}

//Creating function named passLengthAlert
function passLengthAlert(){
  //creates a passAlert variable and sets the value to equal the input from a user in a prompt text with the default text 64
  var passAlert = prompt("Please enter a valid numerical value from 8 to 128 for the length of your password.", "64");
  //sets the value of passInt to the converted value of passAlert to an integer
  passInt = parseInt(passAlert);
  //If passInt is greater than or equal to 8 and less than or equal to 128 go forward
  if(passInt >= 8 && passInt <= 128){
    //Set the value of the global variable passLength to equal the value of passInt
    passLength = passInt;
    //Run all other alert functions 
    lowerBoolAlert();
    upperBoolAlert();
    numericBoolAlert()
    specCharAlert();
  
  }else{
    //While passInt is less than 8 or greater than 128 
    while(passInt < 8 || passInt > 128){
      //Shows prompt with prompt text with default text of 64
      passAlert = prompt("Please enter a valid numerical value from 8 to 128 for the length of your password.", "64");
      //sets the value of passInt to equal the converted value of passAlert to an integer
      passInt = parseInt(passAlert);
      //If passInt is between 8 and 128 run
      if(passInt >= 8 && passInt <= 128){
        //Set value of global variable passLength to equal the value of passInt
        passLength = passInt;
        //Run all other alert functions
        lowerBoolAlert();
        upperBoolAlert();
        numericBoolAlert()
        specCharAlert();
        //Kicks out of while loop
        return;
      }
    }
  }
}

function lowerBoolAlert(){
  //Shows prompt with prompt text and the default value of Y 
  var lowerAlert = prompt("Please enter a \"Y\" or \"N\" if you would like lowercase characters to be included or excluded in your password.", "Y");
  //If lowerAlert value converted with a toString to a string value is equal to Y or N run
  if(lowerAlert.toString() == "Y" || lowerAlert.toString == "N"){
    //set value of global variable lowerBool to lowerAlert's value 
    lowerBool = lowerAlert;
  
  }else{
     //While lowerAlert value converted with a toString to a string value is not equal to Y or N run
    while(lowerAlert.toString() != "Y" || lowerAlert.toString != "N"){
      //Prompt user with text and default value of Y 
      lowerAlert = prompt("Please enter a \"Y\" or \"N\" if you would like lowercase characters to be included or excluded in your password.", "Y");
      //If lowerAlert value converted with a toString to a string value is equal to Y or N run
      if(lowerAlert.toString() == "Y" || lowerAlert.toString() == "N"){
        //Set value of global variable lowerBool to equal lowerAlert
        lowerBool = lowerAlert;
        //kicks out of while loop 
        return;
      }
    }
  }
}

function upperBoolAlert(){
//Shows prompt with prompt text and the default value of Y 
var upperAlert = prompt("Please enter a \"Y\" or \"N\" if you would like uppercase characters to be included or excluded in your password.", "Y");
//If upperAlert value converted with a toString to a string value is equal to Y or N run
if(upperAlert.toString() == "Y" || upperAlert.toString == "N"){
  //set value of global variable upperBool to upperAlert's value 
  upperBool = upperAlert;

}else{
  //While upperAlert value converted with a toString to a string value is not equal to Y or N run
  while(upperAlert.toString() != "Y" || upperAlert.toString != "N"){
    //Prompt user with text and default value of Y 
    upperAlert = prompt("Please enter a \"Y\" or \"N\" if you would like uppercase characters to be included or excluded in your password.", "Y");
    //If upperAlert value converted with a toString to a string value is equal to Y or N run
    if(upperAlert.toString() == "Y" || upperAlert.toString() == "N"){
      //Set value of global variable upperBool to equal upperAlert
      upperBool = upperAlert;
      //kicks out of while loop 
      return;
    }
  }
}
}

function numericBoolAlert(){
  //Shows prompt with prompt text and the default value of Y 
  var numericAlert = prompt("Please enter a \"Y\" or \"N\" if you would like numeric characters to be included or excluded in your password.", "Y");
  //If numericAlert value converted with a toString to a string value is equal to Y or N run
  if(numericAlert.toString() == "Y" || numericAlert.toString == "N"){
    //set value of global variable numericBool to numericAlert's value 
    numericBool = numericAlert;
  
  }else{
    //While numericAlert value converted with a toString to a string value is not equal to Y or N run
    while(numericAlert.toString() != "Y" || numericAlert.toString != "N"){
      //Prompt user with text and default value of Y 
      numericAlert = prompt("1Please enter a \"Y\" or \"N\" if you would like numeric characters to be included or excluded in your password.", "Y");
      //If numericAlert value converted with a toString to a string value is equal to Y or N run
      if(numericAlert.toString() == "Y" || numericAlert.toString() == "N"){
        //Set value of global variable numericBool to equal numericAlert
        numericBool = numericAlert;
        //kicks out of while loop 
        return;
      }
    }
  }
  }

function specCharAlert(){
  //Shows prompt with prompt text and the default value of Y 
  var specAlert = prompt("Please enter a \"Y\" or \"N\" if you would like special characters to be included or excluded in your password.", "Y");
  //If spacAlert value converted with a toString to a string value is equal to Y or N run
  if(specAlert.toString() == "Y" || specAlert.toString == "N"){
    //set value of global variable specCharBool to specAlert's value 
    specCharBool = specAlert;
  
  }else{
    //While specAlert value converted with a toString to a string value is not equal to Y or N run
    while(specAlert.toString() != "Y" || specAlert.toString != "N"){
      //Prompt user with text and default value of Y 
      specAlert = prompt("Please enter a \"Y\" or \"N\" if you would like special characters to be included or excluded in your password.", "Y");
      //If specAlert value converted with a toString to a string value is equal to Y or N run
      if(specAlert.toString() == "Y" || specAlert.toString() == "N"){
        //Set value of global variable specCharBool to equal specAlert
        specCharBool = specAlert;
        //kicks out of while loop 
        return;
      }
    }
  }
}

function generatePassword(){
    //Creates variable strings for each set of characters 
    var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerChar = "abcdefghijklmnopqrstuvwxyz";
    var numericChar = "0123456789";
    var specChar = "!@#$%^&*()";
    //Creates a variable that will include the selected values
    var combString = "";
    //Sets value of passLengthInt to the converted value of global value passLength to an integer
    var passLengthInt = parseInt(passLength);
    //Creates a password string 
    var pass = "";

    //if the lowerBool's converted string value is equal to Y run
    if(lowerBool.toString() == "Y"){
      //combine the combString value with itself and the lowerChar list of characters
      combString += combString + lowerChar;
    //if the upperBool's converted string value is equal to Y run
    }if(upperBool.toString() == "Y"){
      //combine the combString value with itself and the upperChar list of characters
      combString += combString + upperChar;
    //if the numericBool's converted string value is equal to Y run
    }if(numericBool.toString() == "Y"){
      //combine the combString value with itself and the numericChar list of characters
      combString += combString + numericChar;
    //if the specCharBool's converted string value is equal to Y run
    }if(specCharBool.toString() == "Y"){
      //combine the combString value with itself and the specChar list of characters
      combString += combString + specChar;
    }
    //Creating a for loop with the length of pasLengthInt's value 
    for (var i = 1 ; i <= passLengthInt; i++){
      //Creating a variable with the value of the largest integer of a random number multiplied with the length of the 
      //combStrength's length
      var randNumb = Math.floor(Math.random() * combString.length);
      //setting the value of pass to the substring value with randNumb values 
      pass += combString.substring(randNumb, randNumb +1);
    }
    //Return the value of pass
    return pass;

  }

// Add event listener to generate button
generateBtn.addEventListener("click", passLengthAlert);
// Add event listener to generate button for write password function
generateBtn.addEventListener("click", writePassword);



