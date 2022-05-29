const sendBtn = document.getElementById("send-btn");
const emailRegXep = new RegExp("(^[a-z0-9])([a-z0-9\!\#\$\%\&\'\*\+\-\/\=\?\^\_\`\{\|\]\*]*)@[a-z0-9]+[\.]{1}.+[a-z0-9]+$", "i");
const email = document.querySelector(".email input");
const errormessage = document.querySelectorAll(".error-message");


sendBtn.addEventListener("click", ()=> {
    if (!emailRegXep.test(email.value)){
        errormessage.forEach(message => {
            message.style.height = "auto";
            message.style.opacity = "1";
            email.style.border = "1.5px solid hsl(354, 100%, 66%)";
        })
    }
    else{
        errormessage.forEach(message => {
            message.style.height = "0";
            message.style.opacity = "0";
            email.style.border = null;
        })
    }
})