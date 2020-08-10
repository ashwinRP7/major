//import * as lol from './info.js';

localStorage.user1 = "user1@gmail.com";
console.log(localStorage.user1);
localStorage.pass1 = "password1";
console.log(localStorage.pass1);
localStorage.user2 = "user2@gmail.com";
console.log(localStorage.user2);
localStorage.pass2 = "password2";
console.log(localStorage.pass2);
if(localStorage.currentuser != ""){
    document.getElementById("inputemail").value = localStorage.currentuser;
}



function rememberMe(){
    var uemail = document.getElementById("inputemail").value;
    var upass = document.getElementById("inputpass").value;
    var checkvalue = document.getElementById("logincheckbox"); 
    event.preventDefault();
    if(checkvalue.checked){
        if(localStorage.user1 == uemail){
            if(localStorage.pass1 == upass){
                localStorage.currentuser = localStorage.user1;
                localStorage.currentuserlogin = localStorage.user1;
                window.location.href = "cataloglist.html";
                event.preventDefault();
            }
            else{
                document.getElementById("loginformid").reset();
                alert("Incorrect Credentials !!!");
                event.preventDefault();
                console.log("User1 error");
            }
            event.preventDefault();
        }
        else if(localStorage.user2 == uemail){
            if(localStorage.pass2 == upass){
                localStorage.currentuser = localStorage.user2;
                localStorage.currentuserlogin = localStorage.user2;
                window.location.href = "cataloglist.html";
                event.preventDefault();
            }
            else{
                document.getElementById("loginformid").reset();
                alert("Incorrect Credentials !!!");
                event.preventDefault();
                console.log("User2 error");
            }
            event.preventDefault();
        }
        else{
            document.getElementById("loginformid").reset();
            alert("Incorrect Credentials !!!");
            console.log("Emial error");
            console.log(checkvalue);
            event.preventDefault();
        }
    }
    else{
        localStorage.currentuser = "";
        if(localStorage.user1 == uemail){
            if(localStorage.pass1 == upass){
                //localStorage.currentuser = localStorage.user1;
                localStorage.currentuserlogin = localStorage.user1;
                event.preventDefault();
                window.location.href = "cataloglist.html";
                event.preventDefault();
                console.log("This happened");
                event.preventDefault();
            }
            else{
                document.getElementById("loginformid").reset();
                alert("Incorrect Credentials !!!");
                event.preventDefault();
                console.log("User1 error in unchecked");
            }
            event.preventDefault();
        }
        else if(localStorage.user2 == uemail){
            if(localStorage.pass2 == upass){
                //localStorage.currentuser = localStorage.user2;
                localStorage.currentuserlogin = localStorage.user2;
                window.location.href = "cataloglist.html";
                event.preventDefault();
            }
            else{
                document.getElementById("loginformid").reset();
                alert("Incorrect Credentials !!!");
                event.preventDefault();
                console.log("User2 error in unchecked");
            }
            event.preventDefault();
        }
        else{
            document.getElementById("loginformid").reset();
            alert("Incorrect Credentials !!!");
            event.preventDefault();
            console.log("Email error in unchecked");
        }
        event.preventDefault();
    }
    //window.location.href = "cataloglist.html";
    //event.preventDefault();
}