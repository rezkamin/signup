
var arrOfUsers=[];

if (localStorage.getItem("arrOfUsers")!=null){
arrOfUsers=JSON.parse(localStorage.getItem("arrOfUsers"));
}





var uname = document.querySelector('.form form .user-name input ');
var email = document.querySelector('.form form .user-email input ');
var pass = document.querySelector('.form form .user-pass input ');
var errorNameP=document.querySelector(".errorName");
var errorEmailP=document.querySelector(".errorEmail");
var errorPassP=document.querySelector(".errorPass");



var regxUserName=/^[a-zA-Z][a-zA-Z0-9._-]{3,15}$/;
var regxUserEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
var regxUserPass=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;


function nameVald(nameValue){

return regxUserName.test(nameValue);

}

function emailVald(emailValue){

return regxUserEmail.test(emailValue);

}
function passVald(passValue){

return regxUserPass.test(passValue);

}


function nameAvilable(nameValue) {

  
    for (var i =0;i<arrOfUsers.length;i++){

if (arrOfUsers[i].nameValue==nameValue){

    return false;

    }


}

return true;

}

function emailAvilable(emailValue){

    for (var i =0;i<arrOfUsers.length;i++){

if (arrOfUsers[i].emailValue==emailValue){

    return false;

    }


}

return true;

}

function addUser (event){

 
  event.preventDefault();    

    var user= {
nameValue: uname.value,
emailValue: email.value,
passValue: pass.value,
    };

  errorNameP.innerHTML = "";
  errorEmailP.innerHTML = "";
  errorPassP.innerHTML = "";


if (nameVald(user.nameValue)&& nameAvilable(user.nameValue)&&emailVald(user.emailValue)&&emailAvilable(user.emailValue)&&passVald(user.passValue)){

    arrOfUsers.push(user);
    alert("user succsesfully added");
localStorage.setItem("arrOfUsers",JSON.stringify(arrOfUsers));



}else{

if(!nameVald(user.nameValue)){

   errorNameP.innerHTML="UserName should start with letter & followed by 3 to 15 char or numbers or (.-_)"

}
if(!nameAvilable(user.nameValue)){

   errorNameP.innerHTML="UserName is already exist"

}

if(!emailVald(user.emailValue)){

   errorEmailP.innerHTML="email should be formated to start at least by one of any alphapete letter or numbers or(.%+-) followed by @ followed by at least by one of any alphapete letter or numbers or(.-) followed by . and at least 2 letters"

}
if(!emailAvilable(user.emailValue)){

   errorEmailP.innerHTML="email is already exist"

}

if(!passVald(user.passValue)){

   errorPassP.innerHTML="pass should be formated to contain at least 8 char at least contain one lowercase letter and one uppercase letter and a number and a special char as {@$!%*?&#} ";

}else{
    errorPassP.innerHTML=""
}


}

}

var signupbtn = document.querySelector('#signup-btn ');



//  







//sign in functions




var signinEmail = document.querySelector('.SIEmail');
var signinPass = document.querySelector('.SIPass');

var signinbtn = document.querySelector('#signIn');
var erorrparg = document.querySelector('.errorMsg');
var welcomParg = document.querySelector('.welcomMsg');


function userNameMatched(){

   var signinEmailValue= signinEmail.value;
    var signinPassValue= signinPass.value;

for (var i =0;i<arrOfUsers.length;i++){

if (arrOfUsers[i].emailValue==signinEmailValue && arrOfUsers[i].passValue== signinPassValue  ){
var userNamereturned=arrOfUsers[i].nameValue;
localStorage.setItem("userNamereturned",userNamereturned);
    return true;

    }


}

return false;



}


function signInToHome (event){

event.preventDefault();

erorrparg.innerHTML="";

if(emailAvilable(signinEmail.value)) {

erorrparg.innerHTML="invalid not found"

    }else if ( userNameMatched()){

window.location.href = "home.html";




    }else {

      erorrparg.innerHTML="wrong password"  
    }

}

if (welcomParg!=null){

    welcomParg.innerHTML=`welcom ${localStorage.getItem("userNamereturned")}`

}





var signoutbtn = document.querySelector(".signotsbtn");





if(signoutbtn!=null){

    signoutbtn.addEventListener('click',function(event){
 event.preventDefault();
    window.location.href="index.html";
});

}

if(signinbtn!=null){

    signinbtn.addEventListener('click',signInToHome);



}

 if (signupbtn!=null){
signupbtn.addEventListener('click',addUser);
 }
 

