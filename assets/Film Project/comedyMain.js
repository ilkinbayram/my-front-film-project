class StorageComedy{
    static getVipLocal(){
        let notComedy;
        if(localStorage.getItem("notComedyVip")===null){
            notComedy = [];
        }
        else{
            notComedy = JSON.parse(localStorage.getItem("notComedyVip"));
        }
        return notComedy;
    }
    static getSimpleLoacl(){
        let notComedy;
        if(localStorage.getItem("notComedySimple")===null){
            notComedy = [];
        }
        else{
            notComedy = JSON.parse(localStorage.getItem("notComedySimple"));
        }
        return notComedy;
    }
    static setVipLocal(){
        let notComedy = [];

        for(let i=0; i<$("#twentyDolars").find("img").length; i++){
            if($("#twentyDolars").find("img")[i].getAttribute("src") === "./pngTicket/premium.png" ||
             $("#twentyDolars").find("img")[i].getAttribute("src") === "./pngTicket/notAllowed.png"){
                notComedy.push("./pngTicket/notAllowed.png")
                
            }
            else{
                notComedy.push("./pngTicket/vipSeat.png")
            }
        }

        localStorage.setItem("notComedyVip",JSON.stringify(notComedy));
    }
    static setSimpleLocal(){
        let notComedy = [];

        for(let i=0; i<$("#tenDolars").find("img").length; i++){
            if($("#tenDolars").find("img")[i].getAttribute("src") === "./pngTicket/selected.png" ||
            $("#tenDolars").find("img")[i].getAttribute("src") === "./pngTicket/notAllowed.png"){
                notComedy.push("./pngTicket/notAllowed.png")
                
            }
            else{
                notComedy.push("./pngTicket/seat.png")
            }
        }

        localStorage.setItem("notComedySimple",JSON.stringify(notComedy));
    }
}