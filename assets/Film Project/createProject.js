// Elementleri secme
const submitForm = document.querySelector("#submitForm");
const formName = document.querySelector("#formName");
const formSurname = document.querySelector("#formSurname");
const selectDay = document.querySelector("#daySelect");
const selectMonth = document.querySelector("#monthSelect");
const selectYear = document.querySelector("#yearSelect");
const formEmail = document.querySelector("#emailForm");
const formUserId = document.querySelector("#usernameForm");
const formPasswordFirst = document.querySelector("#passwordForm");
const formPasswordSecond = document.querySelector("#passwordAgain");
const showPassword = document.querySelector("#showPassword");
const formCountry = document.querySelector("#formCountry");
const formCity = document.querySelector("#formCity");
const formAdress = document.querySelector("formAdress");
const checkTerms = document.querySelector("#customControlInline");
const btnSubmit = document.querySelector("#acceptBtn");
const pssErrorDiv = document.querySelector(".forPasswordError");
const emailErrorDiv = document.querySelector(".forEmailError");
const charTest = "~`!#$%^&*()-+=[]{}|.'/,?<>;:";
const bullshit = ["~","`","!","#","$","%","^","&",
                "*","(",")","-","+","=","\"","'","[","]",
                "{","}","|","/",",","<",">","?",";",":"," "];

///////////// Values
    const firstName = formName.value;
    const lastName = formSurname.value;
    const birthDay = selectDay.options[selectDay.selectedIndex].value;
    const birthMonth = selectMonth.options[selectMonth.selectedIndex].value;
    const birthYear = selectYear.options[selectYear.selectedIndex].value;
    const userName = formUserId.value;
    const email = formEmail.value;
    const password = formPasswordFirst;
    const country = formCountry.value;
    const city = formCity.value;
////////////////    
    const newCreateAccount = new CreateAccount(firstName,lastName,birthDay,birthMonth,birthYear,email,userName,password);

allEventListeners();
function allEventListeners(){
    checkTerms.addEventListener("click", function(){
        if(checkTerms.checked !== true){
            btnSubmit.setAttribute("disabled","true");
        }
        else{
            btnSubmit.removeAttribute("disabled");
        }
    }) 
    showPassword.addEventListener("click",togglePass);
    submitForm.addEventListener("submit", saveUser);
    formPasswordFirst.addEventListener("focus", removeErrorPss1);
    formPasswordSecond.addEventListener("focus", removeErrorPss2);
    formEmail.addEventListener("focus", removeErrorEmail);
    formEmail.addEventListener("blur",checkEmail);
    formPasswordFirst.addEventListener("blur",checkPasswordFirst);
    formPasswordSecond.addEventListener("blur",checkPasswordSecond);
}
// Email Kontrol
function checkEmail(e){
    const email = formEmail.value;
    if(email===""){
        formEmail.className = "form-control errorBorder";
        let p = document.createElement("p");
        p.className = "errorMessage";
        p.textContent = "*** Emailinizi olusturun!";
        emailErrorDiv.appendChild(p);
    }
    else{
        if(email.includes("@")===false || email.split("@").length!==2){
            formEmail.className = "form-control errorBorder";
            let p = document.createElement("p");
            p.className = "errorMessage";
            p.textContent = "*** Kayd ettiginiz e-mail dogru degil";
            emailErrorDiv.appendChild(p);
        }
        else{
            if(charTest.includes(email.split("@")[0].charAt(0)) || charTest.includes(email.split("@")[1].charAt(0))){
                formEmail.className = "form-control errorBorder";
                let p = document.createElement("p");
                p.className = "errorMessage";
                p.textContent = '*** "` ! # $ % ^ & * ( ) - + = { } [ ] , ? / : ; < >" gibi karakterler kullanamazsiniz.';
                emailErrorDiv.appendChild(p);
            }
            else{
                if(   charTest.includes(email.split("@")[0].charAt(email.split("@")[0].length-1)) || charTest.includes(email.split("@")[1].charAt(email.split("@")[1].length-1))  ){
                    formEmail.className = "form-control errorBorder";
                    let p = document.createElement("p");
                    p.className = "errorMessage";
                    p.textContent = '*** "` ! # $ % ^ & * ( ) - + = { } [ ] , ? / : ; < >" gibi karakterler kullanamazsiniz.';
                    emailErrorDiv.appendChild(p);
                }
                else{
                    if(email.includes("..")){
                        formEmail.className = "form-control errorBorder";
                        let p = document.createElement("p");
                        p.className = "errorMessage";
                        p.textContent = '*** ".." Ard-arda cift nokta kullanamazsiniz.';
                        emailErrorDiv.appendChild(p);
                    }
                    else{
                        for(let i=0 ; i<bullshit.length ; i++){
                            email.includes(bullshit[i])
                            if(email.split("@")[0].includes(bullshit[i]) === true || email.split("@")[1].includes(bullshit[i]) === true ){
                                formEmail.className = "form-control errorBorder";
                                let p = document.createElement("p");
                                p.className = "errorMessage";
                                p.textContent = '*** "` ! # $ % ^ & * ( ) - + = { } [ ] , ? / : ; < >" gibi karakterler kullanamazsiniz.';
                                emailErrorDiv.appendChild(p);
                                return;
                            }
                            else{
                                formEmail.className = "form-control successBorder";
                            }
                        }

                       
                    }
                }
            }
        }
    }
    if(emailErrorDiv.children.length ===3){
        emailErrorDiv.children[2].remove();
    }
}

function checkPasswordFirst(e){
    const passwordFirst = formPasswordFirst.value;
    if(passwordFirst.length<8){
        formPasswordFirst.className = "form-control errorBorder";
        formPasswordSecond.className = "form-control errorBorder";
        let p = document.createElement("p");
        p.className = "errorMessage";
        p.textContent = "*** Sifre en az 8 karakterden olusmali !"
        pssErrorDiv.appendChild(p);
    }
    else{
        if(passwordFirst.charAt(0)!==passwordFirst.charAt(0).toUpperCase()){
            formPasswordFirst.className = "form-control errorBorder";
            formPasswordSecond.className = "form-control errorBorder";
            let p = document.createElement("p");
            p.className = "errorMessage";
            p.textContent = "*** Ilk Harf Buyuk harf icermelidir !";
            pssErrorDiv.appendChild(p);
        }
        }
    if(pssErrorDiv.children.length === 3){
        pssErrorDiv.children[2].remove();
    }
}
function checkPasswordSecond(e){
    const passwordSecond = formPasswordSecond.value;
    if(passwordSecond.length<8){
        formPasswordSecond.className = "form-control errorBorder";
        formPasswordFirst.className = "form-control errorBorder";
        let p = document.createElement("p");
        p.className = "errorMessage";
        p.textContent = "*** Sifre en az 8 karakterden olusmali !"
        pssErrorDiv.appendChild(p);
    }
    else{
        if(passwordSecond.charAt(0)!==passwordSecond.charAt(0).toUpperCase()){
            formPasswordSecond.className = "form-control errorBorder";
            formPasswordFirst.className = "form-control errorBorder";
            let p = document.createElement("p");
            p.className = "errorMessage";
            p.textContent = "*** Ilk Harf Buyuk harf icermelidir !";
            pssErrorDiv.appendChild(p);
        }
    }
    if(pssErrorDiv.children.length === 3){
        pssErrorDiv.children[2].remove();
    }
}
function removeErrorEmail(e){
    if(emailErrorDiv.children.length===2){
        formEmail.classList.remove("errorBorder");
        emailErrorDiv.children[1].remove();
    }
}
function removeErrorPss1(e){
    if(e.target.getAttribute("class")==="form-control errorBorder"){
    formPasswordFirst.classList.remove("errorBorder");
    formPasswordSecond.classList.remove("errorBorder");
    if(pssErrorDiv.children.length===2){
            pssErrorDiv.children[1].remove();
        }
    }
}
function removeErrorPss2(e){
    if(e.target.getAttribute("class")==="form-control errorBorder"){   
    formPasswordSecond.classList.remove("errorBorder");
    formPasswordFirst.classList.remove("errorBorder");
    if(pssErrorDiv.children.length===2){
            pssErrorDiv.children[1].remove();
        }
    }
}
function togglePass(e){
    const passwordFirst = formPasswordFirst.value;
    const passwordSecond = formPasswordSecond.value;
    
    if(passwordFirst==="" && passwordSecond===""){

    }
    else{
        if(formPasswordFirst.getAttribute("type")==="password"){
            formPasswordFirst.removeAttribute("type");
            showPassword.innerHTML = `<i class="fas fa-eye-slash"></i> Sifreyi Gizle`;
            formPasswordFirst.setAttribute("type","text");
        }else{formPasswordFirst.removeAttribute("type");
            formPasswordFirst.setAttribute("type","password");
            showPassword.innerHTML = `<i class="far fa-eye"></i> Sifreyi Goster`;
            }
        if(formPasswordSecond.getAttribute("type")==="password"){
            formPasswordSecond.removeAttribute("type");
            showPassword.innerHTML = `<i class="fas fa-eye-slash"></i> Sifreyi Gizle`;
            formPasswordSecond.setAttribute("type","text");
        }else{formPasswordSecond.removeAttribute("type");
            formPasswordSecond.setAttribute("type","password");
            showPassword.innerHTML = `<i class="far fa-eye"></i> Sifreyi Goster`;
            }
    }
    
}
function saveUser(e){

    ///////////// Values
    const firstName = formName.value;
    const lastName = formSurname.value;
    const birthDay = selectDay.options[selectDay.selectedIndex].value;
    const birthMonth = selectMonth.options[selectMonth.selectedIndex].value;
    const birthYear = selectYear.options[selectYear.selectedIndex].value;
    const userName = formUserId.value;
    const email = formEmail.value;
    const password = formPasswordFirst.value;
    const country = formCountry.value;
    const city = formCity.value;

////////////////    
const new2CreateAccount = new CreateAccount(firstName,lastName,birthDay,birthMonth,birthYear,email,userName,password);

// console.log(new2CreateAccount);

    const passwordFirst = formPasswordFirst.value;
    const passwordSecond = formPasswordSecond.value;
    if(passwordFirst==="" || passwordSecond===""){
        formPasswordFirst.className = "form-control errorBorder";
        formPasswordSecond.className = "form-control errorBorder";
        let p = document.createElement("p");
        p.className = "errorMessage";
        p.textContent = "*** Bu Bolum Bos Birakilamaz !";
        
        if(pssErrorDiv.children.length===2){
            pssErrorDiv.children[1].remove();
        }
        pssErrorDiv.appendChild(p);
        return
    }
    else{
        if(passwordFirst !== passwordSecond){
            formPasswordFirst.className = "form-control errorBorder";
            formPasswordSecond.className = "form-control errorBorder";
            let p = document.createElement("p");
            p.className = "errorMessage";
            p.textContent = "*** Sifreler Ayni Degil !";
            pssErrorDiv.appendChild(p);
            return
        }
        else{
            formPasswordFirst.className = "form-control successBorder";
            formPasswordSecond.className = "form-control successBorder";
        }
    }
    if(pssErrorDiv.children.length === 3){
        pssErrorDiv.children[2].remove();
    }

    const new2CreateStorage = new CreateStorage();
    new2CreateStorage.addLocalStorageUsername(new2CreateAccount.userID);
    new2CreateStorage.addLocalStorageEmail(new2CreateAccount.email);
    new2CreateStorage.addLocalStoragePassword(new2CreateAccount.password);

    
}

