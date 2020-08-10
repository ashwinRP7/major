if(localStorage.currentuserlogin == ""){
    window.location.href = "login.html";
}

console.log(localStorage.currentPordDetail);
switch(localStorage.currentPordDetail)
{
    case "1":{
        document.getElementById("prodid").src = "./images/001.jpg";
        console.log("Maybe this happened");
        break;
    }
    case "2":{
        document.getElementById("prodid").setAttribute("src","./images/002.jpg");
        break;
    }
    case "3":{
        document.getElementById("prodid").setAttribute("src","./images/003.jpg");
        break;
    }
    case "4":{
        document.getElementById("prodid").setAttribute("src","./images/004.jpg");
        break;
    }
}

// document.getElementsByClassName("trdown").addEventListener("click",function(){
//     console.log("Do nothing for now");
// });

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

var b = document.getElementById("backbutton");
var info = document.getElementById("infoli");
var desc = document.getElementById("descriptionli");

b.addEventListener("click",function(){
    window.history.back();
});

info.addEventListener("click",function(){
    document.getElementById("prodinfo").style.display = "block";
    document.getElementById("proddesc").style.display = "none";
    document.getElementById("infoli").style.borderBottom = "3px solid #b9f2ff";
    document.getElementById("descriptionli").style.borderBottom = "1px solid #dcdcdc";
});

desc.addEventListener("click",function(){
    document.getElementById("prodinfo").style.display = "none";
    document.getElementById("proddesc").style.display = "block";
    document.getElementById("infoli").style.borderBottom = "1px solid #dcdcdc";
    document.getElementById("descriptionli").style.borderBottom = "3px solid #b9f2ff";
});