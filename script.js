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
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

function passLengthAlert(){
var passAlert = prompt("Please enter a numerical value from 8 to 128 for the length of your password.", "64"); 
passInt = parseInt(passAlert);
while(passInt < 8 || passInt > 128){
  passFail = prompt("Please enter a valid numerical value from 8 to 128 for the length of your password.", "64");
  if(passFail >= 8 && passFail <= 128){
    passLength = passFail;
    lowerBoolAlert();
    upperBoolAlert();
    specCharAlert();
    return;
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
    upperAlert = prompt("1Please enter a \"Y\" or \"N\" if you would like uppercase characters to be included or excluded in your password.", "Y");
    console.log(upperAlert);
    if(upperAlert.toString() == "Y" || upperAlert.toString() == "N"){
      upperBool = upperAlert;
      return;
    }
  }
}
}

function specCharAlert(){
  var specAlert = prompt("Please enter a \"Y\" or \"N\" if you would like special characters to be included or excluded in your password.", "Y");

  if(specAlert.toString() == "Y" || specAlert.toString == "N"){
    
    specBool = specAlert;
  
  }else{
    while(specAlert.toString() != "Y" || specAlert.toString != "N"){
      specAlert = prompt("1Please enter a \"Y\" or \"N\" if you would like special characters to be included or excluded in your password.", "Y");
      console.log(specAlert);
      if(specAlert.toString() == "Y" || specAlert.toString() == "N"){
        upperBool = specAlert;
        return;
      }
    }
  }
}
  


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

generateBtn.addEventListener("click", passLengthAlert);

