class StorageAction{
    static getVipLocal(){
        let notAction;
        if(localStorage.getItem("notActionVip")===null){
            notAction = [];
        }
        else{
            notAction = JSON.parse(localStorage.getItem("notActionVip"));
        }
        return notAction;
    }
    static getSimpleLoacl(){
        let notAction;
        if(localStorage.getItem("notActionSimple")===null){
            notAction = [];
        }
        else{
            notAction = JSON.parse(localStorage.getItem("notActionSimple"));
        }
        return notAction;
    }
    static setVipLocal(){
        // let notComedy = this.getLocal();
        let notAction = [];

        for(let i=0; i<$("#twentyDolars").find("img").length; i++){
            if($("#twentyDolars").find("img")[i].getAttribute("src") === "./pngTicket/premium.png" ||
             $("#twentyDolars").find("img")[i].getAttribute("src") === "./pngTicket/notAllowed.png"){
                console.log("./pngTicket/notAllowed.png");
                notAction.push("./pngTicket/notAllowed.png")
                
            }
            else{
                console.log("./pngTicket/vipSeat.png");
                notAction.push("./pngTicket/vipSeat.png")
            }
        }

        localStorage.setItem("notActionVip",JSON.stringify(notAction));
    }
    static setSimpleLocal(){
        // let notComedy = this.getLocal();
        let notAction = [];

        for(let i=0; i<$("#tenDolars").find("img").length; i++){
            if($("#tenDolars").find("img")[i].getAttribute("src") === "./pngTicket/selected.png" ||
            $("#tenDolars").find("img")[i].getAttribute("src") === "./pngTicket/notAllowed.png"){
                console.log("./pngTicket/notAllowed.png");
                notAction.push("./pngTicket/notAllowed.png")
                
            }
            else{
                console.log("./pngTicket/seat.png");
                notAction.push("./pngTicket/seat.png")
            }
        }

        localStorage.setItem("notActionSimple",JSON.stringify(notAction));
    }
}