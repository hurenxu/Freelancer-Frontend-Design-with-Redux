var password = document.getElementById("inputPassword")
var confirm_password = document.getElementById("confirmPassword");

function validatePassword(){
    if(password.value !== confirm_password.value) {
        confirm_password.setCustomValidity("Passwords Don't Match");
    } else {
        confirm_password.setCustomValidity('');
    }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;


var agreeTerms = document.getElementById("agreeTerms");
agreeTerms.onChange = function() {
    if(agreeTerms.checked) {
        agreeTerms.setCustomValidity("");
    } else {
        agreeTerms.setCustomValidity("Must agree to terms and conditions");
    }
}