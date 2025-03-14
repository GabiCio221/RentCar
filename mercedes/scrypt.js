let sendBtn = document.querySelector(".rent-new");
let containerWindow = document.querySelector(".window-container-all");
sendBtn.addEventListener("click", func)
function func(){
   containerWindow.classList.add("activee")
}

let closeWindoe = document.querySelector("#farr");
closeWindoe.addEventListener("click",()=>{
    containerWindow.classList.remove("activee")
})

// form data
let userName = document.querySelector("#name")
let userAge = document.querySelector("#age")
let userEmail = document.querySelector("#email")
let userPhone = document.querySelector("#phone")
 
let sendBtnForm = document.querySelector(".send-data");
sendBtnForm.addEventListener("click",formFunc)
function formFunc(e){
    e.preventDefault();
    if(age.value<=17){
        alert("Imi pare rau nu poti conduce o masina daca nu ai 18 ani")
        userAge.value="";
    }else if(userName.value==''||userAge.value==""){
        alert("Toate campurile trebuie completate")
        userName.value="";
        userAge.value="";
    }else if(userEmail.value==""||userPhone.value==""){
        alert("Toate campurile trebuiesc completate")
        userEmail.value="";
        userPhone.value="";
    }else{
       let popUp=document.querySelector(".pop-up")
       popUp.classList.add("pop-up-active")
       containerWindow.classList.remove("activee")
       let userNameElement = document.createElement("h1");
       userNameElement.innerText=userName.value;
       popUp.prepend(userNameElement)
       let closePopUp = document.querySelector("#clsBtn");
closePopUp.addEventListener("click",()=>{
    popUp.classList.remove("pop-up-active")
    userNameElement.remove()

})
        userName.value="";
        userAge.value="";
        userEmail.value="";
        userPhone.value="";
    }
}


