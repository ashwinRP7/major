if(localStorage.currentuserlogin == ""){
    window.location.href = "login.html";
}

document.getElementById("logoutbtn").addEventListener("click",function(){
    console.log("is this working or not");
    localStorage.currentuserlogin = "";
    localStorage.currentuser = "";
    window.location.href = "login.html";
    //event.preventDefault();
});

if(localStorage.currentuser == localStorage.user1){
    document.getElementById("userimage").setAttribute("src","./images/1.jpg");
}
else{
    document.getElementById("userimage").setAttribute("src","./images/2.jpg");
}