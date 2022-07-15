const input = document.querySelector("input");
const button = document.querySelector("button");
const msgError = document.querySelector(".error-msg");
const iconError = document.querySelector("#error");

function ValidateEmail(mail) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (mail.match(mailformat)) {
      return true;
    } 
    else {
      return false;
    }
  }

  const submitEmail=() => {
    const userInput = input.value; 
    if (!ValidateEmail(userInput)){
        iconError.style.display = "block";
        msgError.style.display = "block";
    }
    else{
        iconError.style.display = "none";
        msgError.style.display = "none";
    }
  }
button.addEventListener("click", submitEmail);
