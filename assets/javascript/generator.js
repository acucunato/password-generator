
// Generate password - if password is not between 8-128 char message will alert telling user to input a valid length. 

function generatePassword() {
    var finalLength = prompt("How many characters would you like your password to contain? (between 8-128 characters)");

    if (finalLength < 8 || finalLength > 128) {
        alert("Invalid length, please enter a number between 8-128 characters!")
        return;
    }
    
    //confirm which char are being used in the password
    var confirmSpecial = confirm("Click OK to confirm including special characters.");
    var confirmNumber = confirm("Click OK to confirm including numeric characters.");
    var confirmLower = confirm("Click OK to confirm including lowercase characters.");
    var confirmUpper = confirm("Click OK to confirm including uppercase characters.");

    // if all of these are false user cannot continue (! means false)
    if (!confirmSpecial && !confirmNumber && !confirmUpper && !confirmLower) {
        return alert("Must choose at least one character type. Try again!");
    }

    // define password var to hold password data
    var password = "";
    
    // generates random char in password string using the user inputted length
    for (i = 0; i < finalLength; i++) {

        if (confirmSpecial && password.length < finalLength) {
            password += specialChar();
        }

        if (confirmNumber && password.length < finalLength) {
            password += numberChar();
        }

        if (confirmUpper && password.length < finalLength) {
            password += upperChar();
        }

        if (confirmLower && password.length < finalLength) {
            password += lowChar();
        }
    }

    //created array to hold password data in order be able to randomize char

    var passwordArr = password.split("");

    //randomizing order of the sort & joining together
    passwordArr.sort(function() {
        return 0.5 - Math.random();
    });

    password = passwordArr.join("");

    // final generated password in an alert
    alert("Your password is: " + password);


    //generates password to text area
    document.getElementById("generated").value = password;
}

//copy to clipboard

function copyPassword() {
    document.getElementById("generated").select();

    document.execCommand("Copy");

    alert("Password copied to clipboard.");    
}

// generates random char to be used in the password 
function specialChar() {
    var special = "!#$%&'()*+,-./:;<=>?@]/[^_`{|}~";
    return special[Math.floor(Math.random() * special.length)]
}

function numberChar() {
    var number = "0123456789";
    return number[Math.floor(Math.random() * number.length)]
}

function lowChar() {
    var lower = "abcdefghijklmnopqrstuvwxyz";
    return lower[Math.floor(Math.random() * lower.length)]
}

function upperChar() {
    var upper = "ABCDEFGHIJKLMNOPQRZTUVWXYZ";
    return upper[Math.floor(Math.random() * upper.length)]
}
