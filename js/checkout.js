// Get the input fields
var password = document.querySelector(".password");
var phone = document.querySelector('.phone');
var name = document.querySelector('.name');
var email = document.querySelector('.email');
var mail = document.getElementById("email").value;



// Get the error elements
var errorPassword = document.getElementById("errorPassword");
var errorName = document.getElementById('errorName');  
var errorPhone = document.getElementById('errorPhone');  
var errorEmail = document.getElementById('errorEmail');


// Exercise 6
function validate() {
    // Validate fields entered by the user: name, phone, password, and email
    
    validarEmail();
}

function validarPasword(password){
    console.log(password);
    
}


function validarEmail(mail) {
    console.log(mail);
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(mail) ? true : false;
}