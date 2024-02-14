let icon=document.getElementById("img")
let password=document.getElementById("inputpass")
let username =document.querySelector("inputname")
let warn = document.querySelectorAll(".input p")
let btn = document.querySelector("#btn")


for(let z=0; z<warn.length; z++){
    warn[z].classList.add("hide")


}


function show(){
    if(password.type=="password"){
        password.type="type"
        icon.src ="./assets/icons/close.png"
    }else{
        password.type="password"
        icon.src ="./assets/icons/open.png"
    }


}


btn.addEventListener("click", function (e){
    e.preventDefault()
    if(username.value && password.value){
        alert("Daxil olundu ")
    }

})

