const cardSign = document.querySelector(".anyCARD");
const btnSignIn = document.querySelector("#signINab");
const body = document.querySelector("body");

btnSignIn.addEventListener("click", showSignCard);

function showSignCard(e){
    
    cardSign.setAttribute("style","transform: translate (0,0); z-index: 5; ");
    
    cardSign.className = "anyCARD caRD2";
    
    let createDivOpacity = document.createElement("div");
    createDivOpacity.className = "selectClose";
    createDivOpacity.style = "width: 100%; height: 100%; position: absolute; opacity: 0.8; background: black; z-index: 4;";
    
    document.querySelector(".divOpacity").prepend(createDivOpacity);
    document.querySelector
}

body.addEventListener("click",closeFunc);

function closeFunc(e){
    if(e.target.className === "selectClose" || e.target.className === "btn btn-danger close"){
        
        if(document.querySelector(".divOpacity").children.length === 2){
            document.querySelector(".divOpacity").firstElementChild.remove();
            cardSign.className = "anyCARD caRD1"
        }
    }
}


const girisYap = document.querySelector(".girisYap");
const inputUser = document.querySelector("#signInUserId");
const inputPassword = document.querySelector("#signInUserPassword");
const signInForm = document.querySelector("#signInForm");
const newGetLocalStorage = new CreateStorage();

girisYap.addEventListener("click",checkSignDirect);
function checkSignDirect(e){
    const userValue = inputUser.value;
    const passwordValue = inputPassword.value;
    const userIdMassiv = newGetLocalStorage.getLocalUserName();
    const userPasswordMassiv = newGetLocalStorage.getLocalPassword();
    const userIdindex = userIdMassiv.indexOf(userValue);

   
    if(userIdMassiv.some(function(i){return i===userValue}) && passwordValue === userPasswordMassiv[userIdindex]){
        girisYap.setAttribute("href","film.html");
    }
}