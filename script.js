const inputBox = document.querySelector("#input-box")
const generateBtn = document.querySelector("button")
let imageContainer = document.querySelector(".img-box")
let qrImg = document.querySelector(".img-box img")

async function generateCode (){
    if(inputBox.value.length > 0){
        let apiURL = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inputBox.value
        qrImg.src = apiURL
        imageContainer.classList.add("show-img")
    }
    else{
        inputBox.classList.add("error")
        setTimeout(() => {
            //inputBox.classList.remove("error")
        }, 100);
    }
}

generateBtn.addEventListener("click", generateCode)