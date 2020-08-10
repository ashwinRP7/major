//window.prodnum = 1;

if(localStorage.currentuserlogin == ""){
     window.location.href = "login.html";
}

function showproduct(x){
    localStorage.currentPordDetail = x;
    //console.log(localStorage.currentPordDetail);
    //console.log(prodnum);
    window.location.href = "productdetail.html";
    event.preventDefault();
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
//console.log(window.prodnum);