const nameArr = document.getElementById("nameArr");
const numberArr = document.getElementById("numberArr");
const emailArr = document.getElementById("emailArr");
const passwordArr = document.getElementById("passwordArr");
const textareaArr = document.getElementById("textareaArr");
const submitArr = document.getElementById("submitArr");


// Name Validted start hear

function nameFn(){
    var name = document.getElementById("name").value;
    var namePattern = /^[a-zA-Z\s-]+$/;
    var nameFull = /^[A-Za-z]*\s{1}[A-Za-z]*$/;
if (name.length === 0) {
    nameArr.innerHTML = 'Name is not valid <i class="fa-solid fa-xmark" style="color: #f01414;"></i>';
    nameArr.style.color = "red";
    return false;
} 
else if(!namePattern.test(name)){
    nameArr.innerHTML = 'Your Name is not Valid <i class="fa-solid fa-xmark" style="color: #f01414;"></i>';
    nameArr.style.color = "#d7d881";
   return false;
}
else if(!name.match(nameFull)){
    nameArr.innerHTML = 'Enter Your Full Name';
    nameArr.style.color = "coral";
    return false;
}else {
    nameArr.innerHTML = 'Valid <i class="fa-solid fa-circle-check" style="color: #008efa;"></i>';
    nameArr.style.color = "green";
    return true;
}
}
// Name Validted End hear

// number Validted Start hear

function NumberFn(){
    var number = document.getElementById("number").value;
    var numberMc = /^[0-9]{11}$/
    if(number.length === 0){
        numberArr.innerHTML = 'Numbar is not valid <i class="fa-solid fa-xmark" style="color: #f01414;"></i>';
        numberArr.style.color = "red";
        return false;
    }
else if(number.length !== 11){
    numberArr.innerHTML = ' Enter your phone number 11 Digit';
    numberArr.style.color = "coral";
    return false;
  }

else if(!number.match(numberMc)){
    numberArr.innerHTML = 'Numbar is Not Valid <i class="fa-solid fa-xmark" style="color: #f01414;"></i>';
    numberArr.style.color = "#d7d881";
    return false;
}else{
    numberArr.innerHTML = 'Valid <i class="fa-solid fa-circle-check" style="color: #008efa;"></i>';
    numberArr.style.color = "green";
    return true;
}
}
// number Validted End hear

// email Validted start hear

function emailFn(){
    var email = document.getElementById("email").value;
    var validemail = /^([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$)/;
    if(email.length === 0){
        emailArr.innerHTML = 'Email is not valid <i class="fa-solid fa-xmark" style="color: #f01414;"></i>';
        emailArr.style.color = "red"
        return false;
    }
else if(!email.match(validemail)){
        emailArr.innerHTML = 'Your Email is Not Valid <i class="fa-solid fa-xmark" style="color: #f01414;"></i>';
        emailArr.style.color = "coral";
        return false;
 }else{
    emailArr.innerHTML = 'Valid <i class="fa-solid fa-circle-check" style="color: #008efa;"></i>';
    emailArr.style.color ="green";
    return true;
    }
}
// email Validted End hear

// password Validted start hear

function passwordFn(){
    var password = document.getElementById("password").value;
    if(password.length === 0){
        passwordArr.innerHTML = 'password is not valid <i class="fa-solid fa-xmark" style="color: #f01414;"></i>';
        passwordArr.style.color = "red";
        return false;
    }
else if(password.length < 8){
        passwordArr.innerHTML = 'password minimum 8 character';
        passwordArr.style.color = "coral";
       return false;
 }else{
    passwordArr.innerHTML = 'Valid <i class="fa-solid fa-circle-check" style="color: #008efa;"></i>';
    passwordArr.style.color = "green";
    return true;
   }
}
// password Validted end hear
// submit Validted start hear
function submitFn(){
    
    if(!nameFn() || !NumberFn() || !emailFn() || !passwordFn() || !textareaFn()){
        submitArr.style.display = "block";

        submitArr.innerHTML = "please fix Arror to Submit";
        submitArr.style.color = "red"
        setTimeout(function (){
            submitArr.style.display = "none";
        },3000);
        return false;
    }
}