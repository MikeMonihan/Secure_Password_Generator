// Assignment code here
var passLength = 0;
var lowerBool;
var upperBool;
var numericBool;
var specCharBool;


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

function passLengthAlert(){
  var passAlert = prompt("Please enter a valid numerical value from 8 to 128 for the length of your password.", "64");
  passInt = parseInt(passAlert);
  if(passInt >= 8 && passInt <= 128){
    
    passLength = passInt;
    lowerBoolAlert();
    upperBoolAlert();
    numericBoolAlert()
    specCharAlert();
  
  }else{
    while(passInt < 8 || passInt > 128){
      passAlert = prompt("Please enter a valid numerical value from 8 to 128 for the length of your password.", "64");
      console.log(passAlert);
      passInt = parseInt(passAlert);
      if(passInt >= 8 && passInt <= 128){
        passLength = passInt;
        lowerBoolAlert();
        upperBoolAlert();
        numericBoolAlert()
        specCharAlert();
        return;
      }
    }
  }
}

function lowerBoolAlert(){
  var lowerAlert = prompt("Please enter a \"Y\" or \"N\" if you would like lowercase characters to be included or excluded in your password.", "Y");

  if(lowerAlert.toString() == "Y" || lowerAlert.toString == "N"){
    
    lowerBool = lowerAlert;
  
  }else{
    while(lowerAlert.toString() != "Y" || lowerAlert.toString != "N"){
      lowerAlert = prompt("Please enter a \"Y\" or \"N\" if you would like lowercase characters to be included or excluded in your password.", "Y");
      console.log(lowerAlert);
      if(lowerAlert.toString() == "Y" || lowerAlert.toString() == "N"){
        lowerBool = lowerAlert;
        return;
      }
    }
  }
}

function upperBoolAlert(){
var upperAlert = prompt("Please enter a \"Y\" or \"N\" if you would like uppercase characters to be included or excluded in your password.", "Y");

if(upperAlert.toString() == "Y" || upperAlert.toString == "N"){
  
  upperBool = upperAlert;

}else{
  while(upperAlert.toString() != "Y" || upperAlert.toString != "N"){
    upperAlert = prompt("Please enter a \"Y\" or \"N\" if you would like uppercase characters to be included or excluded in your password.", "Y");
    console.log(upperAlert);
    if(upperAlert.toString() == "Y" || upperAlert.toString() == "N"){
      upperBool = upperAlert;
      return;
    }
  }
}
}

function numericBoolAlert(){
  var numericAlert = prompt("Please enter a \"Y\" or \"N\" if you would like numeric characters to be included or excluded in your password.", "Y");
  
  if(numericAlert.toString() == "Y" || numericAlert.toString == "N"){
    
    numericBool = numericAlert;
  
  }else{
    while(numericAlert.toString() != "Y" || numericAlert.toString != "N"){
      numericAlert = prompt("1Please enter a \"Y\" or \"N\" if you would like numeric characters to be included or excluded in your password.", "Y");
      console.log(numericAlert);
      if(numericAlert.toString() == "Y" || numericAlert.toString() == "N"){
        numericBool = numericAlert;
        return;
      }
    }
  }
  }

function specCharAlert(){
  var specAlert = prompt("Please enter a \"Y\" or \"N\" if you would like special characters to be included or excluded in your password.", "Y");

  if(specAlert.toString() == "Y" || specAlert.toString == "N"){
    
    specCharBool = specAlert;
  
  }else{
    while(specAlert.toString() != "Y" || specAlert.toString != "N"){
      specAlert = prompt("Please enter a \"Y\" or \"N\" if you would like special characters to be included or excluded in your password.", "Y");
      console.log(specAlert);
      if(specAlert.toString() == "Y" || specAlert.toString() == "N"){
        specCharBool = specAlert;
        return;
      }
    }
  }
}

function generatePassword(){
    console.log("Made it to generate");
    var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerChar = "abcdefghijklmnopqrstuvwxyz";
    var numericChar = "0123456789";
    var specChar = "!@#$%^&*()";
    var combString = "";
    var passLengthInt = parseInt(passLength);
    var pass = "";

    if(lowerBool.toString() == "Y"){
    
      combString += combString + lowerChar;
    
    }if(upperBool.toString() == "Y"){
      combString += combString + upperChar;

    }if(numericBool.toString() == "Y"){
      combString += combString + numericChar;

    }if(specCharBool.toString() == "Y"){
      combString += combString + specChar;
    }

    for (var i = 1 ; i <= passLengthInt; i++){
      var randNumb = Math.floor(Math.random() * combString.length);
      pass += combString.substring(randNumb, randNumb +1);
    }
    return pass;

  }

// Add event listener to generate button
generateBtn.addEventListener("click", passLengthAlert);

generateBtn.addEventListener("click", writePassword);



