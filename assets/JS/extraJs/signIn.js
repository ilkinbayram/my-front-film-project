class SignCheck{
    constructor(usernameOremail,password,userMassiv,passwordMassiv,emailMassiv,aHref){
        this.usernameOremail = usernameOremail,
        this.password = password,
        this.userMassiv = userMassiv,
        this.emailMassiv = emailMassiv,
        this.passwordMassiv = passwordMassiv,
        this.aHref = aHref
    }
    signIn(){
        if(this.passwordMassiv.indexOf(this.password) !== -1){
            
            console.log(this.emailMassiv.indexOf(this.usernameOremail));
            if(this.emailMassiv.indexOf(this.usernameOremail) !== -1 || this.userMassiv.indexOf(this.usernameOremail) !== -1){
                let passwordIndex = this.passwordMassiv.indexOf(this.password);
                if(passwordIndex === this.emailMassiv.indexOf(this.usernameOremail) || passwordIndex === this.userMassiv.indexOf(this.usernameOremail)){
                    this.aHref.attr("href","./assets/Film Project/film.html");
                }
                else{
                    document.querySelector(".alertDivChecking").textContent = "Warning! Your username or email or password may be incorrect! Please be careful next try...";
                    this.aHref.attr("href","#");
                }
            }
            else{
                document.querySelector(".alertDivChecking").textContent = "Warning! Your username or email incorrect! Please be careful next try...";
                this.aHref.attr("href","#");
            }
        }
        else{
            document.querySelector(".alertDivChecking").textContent = "Warning! Your password may be incorrect! Please be careful next try...";
            this.aHref.attr("href","#");
        }
    }

    changeValues(newUserName,newPassword){
        this.usernameOremail = newUserName;
        this.password = newPassword;
        return this.usernameOremail,this.password;
    }
}