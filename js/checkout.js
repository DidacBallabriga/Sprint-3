// Get the input fields
var firstName = document.querySelector('.firstName');
var lastName = document.querySelector('.lastName');
var password = document.querySelector(".password");
var address = document.querySelector(".address");
var phone = document.querySelector('.phone');
var email = document.querySelector('.email');

// Get the error elements
var errorFirstName = document.getElementById('errorFirstName');  
var errorLastName = document.getElementById("errorLastName")
var errorPassword = document.getElementById("errorPassword");
var errorAddress = document.getElementById("errorAddress")
var errorPhone = document.getElementById('errorPhone');  
var errorEmail = document.getElementById("errorEmail")


// Exercise 6
function validate() {
    // Validate fields entered by the user: name, phone, password, and email
    validate_firstName();
    validate_lastName();
    validate_password();
    validate_address()
    validate_phone();
    validate_email();
}

function validate_firstName(){
    if(firstName.value.length < 3 || firstName.value.length == 0){
        firstName.className += " border border-danger";
        errorFirstName.style.display="block";
        errorFirstName.innerHTML = "Name must to have at least 3 letters"; 
    } else if (!firstName.value.match(/^[a-zA-Z]+$/)) {
        firstName.className += " border border-danger";
        errorFirstName.style.display="block";
        errorFirstName.innerHTML = "Numbers in the name are not valid"; 
    } else {
        firstName.className = "ml-3 input rounded p-2 firstName";
        errorFirstName.style.display="none";
        errorFirstName.innerHTML = "";
    }
}

function validate_lastName(){
    if(lastName.value.length < 3 || firstName.value.length == 0){
        lastName.className += " border border-danger";
        errorLastName.style.display="block";
        errorLastName.innerHTML = "Last Name must to have at least 3 letters"; 
    } else if (!lastName.value.match(/^[a-zA-Z]+$/)) {
        lastName.className += " border border-danger";
        errorLastName.style.display="block";
        errorLastName.innerHTML = "Numbers in the Last Name are not valid"; 
    } else {
        lastName.className = "ml-3 input rounded p-2 lastName";
        errorLastName.style.display="none";
        errorLastName.innerHTML = "";
    }
}

function validate_password(){
    if(password.value.length < 3 || firstName.value.length == 0){
        password.className += " border border-danger";
        errorPassword.style.display="block";
        errorPassword.innerHTML = "Password must to have at least 3 characters"; 
    } else if (!password.value.match(/[a-zA-Z]/) || !password.value.match(/[0-9]/)) {
        password.className += " border border-danger";
        errorPassword.style.display="block";
        errorPassword.innerHTML = "Password needs letters&num"; 
    } else {
        password.className = "ml-3 input password rounded p-2";
        errorPassword.style.display="none";
        errorPassword.innerHTML = "";
    }
}

function validate_phone(){
    if(phone.value.length < 9 || firstName.value.length == 0){
        phone.className += " border border-danger";
        errorPhone.style.display="block";
        errorPhone.innerHTML = "Phone must to have at least 9 characters"; 
    } else if (!phone.value.match(/^[0-9]+$/)){
        phone.className += " border border-danger";
        errorPhone.style.display="block";
        errorPhone.innerHTML = "Invalid phone number! Use only numbers"
    } else {
        phone.className = "ml-3 phone input rounded p-2";
        errorPhone.style.display="none";
        errorPhone.innerHTML = "";
    }
}

function validate_email(){
    var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    //console.log(email.value);
    var esValido=expReg.test(email.value);
    if(esValido==false){
        errorEmail.innerHTML = "The email address is not valid";
        email.className += " border border-danger";  
        errorEmail.style.display = "block";

    } else {
        errorEmail.innerHTML = "";
        email.className = "ml-3 input rounded p-2 email"; 
        errorEmail.style.display = "none";
    }
}

function validate_address(){
    if(address.value.length < 3 || address.value.length == 0){
        address.className += " border border-danger";
        errorAddress.style.display="block";
        errorAddress.innerHTML = "Address must to have at least 3 letters"; 
    } else {
        address.className = "ml-3 input rounded p-2 firstName";
        errorAddress.style.display="none";
        errorAddress.innerHTML = "";
    }
}