const sendBtn = document.querySelector("button");
const textarea = document.querySelector("textarea");

sendBtn.addEventListener("click",textareaClean);
function textareaClean(){
    if(textarea.value==""){
        alert("Nu ai introdus nici o opinie")
    }else{
        textarea.value="";
        alert("Multumim penru opinie")
    }
   
}

//  <!-- rentUserArea -->
let rentContainerWindow = document.querySelector(".rent-container");
let btnWindowContainet = document.querySelector(".menu-btn");
btnWindowContainet.addEventListener("click",()=>{
    rentContainerWindow.classList.add("rent-container-active")
    btnWindowContainet.classList.remove("menu-btn")
})

let closeBtnWindow = document.querySelector(".far")
closeBtnWindow.addEventListener("click",()=>{
    rentContainerWindow.classList.remove("rent-container-active");
    btnWindowContainet.classList.add("menu-btn")
})


