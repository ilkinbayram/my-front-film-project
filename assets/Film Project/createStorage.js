function CreateStorage(){

}
CreateStorage.prototype.getLocalUserName = function (){
    let userNames;
    if(localStorage.getItem("userNames")===null){
        userNames = [];
    }
    else{
        userNames = JSON.parse(localStorage.getItem("userNames"));
    }
    return userNames;
}
CreateStorage.prototype.getLocalEmail = function (){
    let email;
    if(localStorage.getItem("email")===null){
        email = [];
    }
    else{
        email = JSON.parse(localStorage.getItem("email"));
    }
    return email;
    
}
CreateStorage.prototype.getLocalPassword = function (){
    let passwords;
    if(localStorage.getItem("passwords")===null){
        passwords = [];
    }
    else{
        passwords = JSON.parse(localStorage.getItem("passwords"));
    }
    return passwords;
}

CreateStorage.prototype.addLocalStorageUsername = function (newUserName){
    const userNames = this.getLocalUserName();
    userNames.push(newUserName);
    localStorage.setItem("userNames",JSON.stringify(userNames));
}

CreateStorage.prototype.addLocalStorageEmail = function (newEmail){
    const email = this.getLocalEmail();
    email.push(newEmail);
    localStorage.setItem("email",JSON.stringify(email));
}

CreateStorage.prototype.addLocalStoragePassword = function (newPassword){
    const passwords = this.getLocalPassword();
    passwords.push(newPassword);
    localStorage.setItem("passwords",JSON.stringify(passwords));
}

