class StorageDram{
    static getVipLocal(){
        let notDram;
        if(localStorage.getItem("notDramVip")===null){
            notDram = [];
        }
        else{
            notDram = JSON.parse(localStorage.getItem("notDramVip"));
        }
        return notDram;
    }
    static getSimpleLoacl(){
        let notDram;
        if(localStorage.getItem("notDramSimple")===null){
            notDram = [];
        }
        else{
            notDram = JSON.parse(localStorage.getItem("notDramSimple"));
        }
        return notDram;
    }
    static setVipLocal(){
        let notDram = [];

        for(let i=0; i<$("#twentyDolars").find("img").length; i++){
            if($("#twentyDolars").find("img")[i].getAttribute("src") === "./pngTicket/premium.png" ||
             $("#twentyDolars").find("img")[i].getAttribute("src") === "./pngTicket/notAllowed.png"){
                notDram.push("./pngTicket/notAllowed.png")
                
            }
            else{
                notDram.push("./pngTicket/vipSeat.png")
            }
        }

        localStorage.setItem("notDramVip",JSON.stringify(notDram));
    }
    static setSimpleLocal(){
        let notDram = [];

        for(let i=0; i<$("#tenDolars").find("img").length; i++){
            if($("#tenDolars").find("img")[i].getAttribute("src") === "./pngTicket/selected.png" ||
            $("#tenDolars").find("img")[i].getAttribute("src") === "./pngTicket/notAllowed.png"){
                notDram.push("./pngTicket/notAllowed.png")
                
            }
            else{
                notDram.push("./pngTicket/seat.png")
            }
        }

        localStorage.setItem("notDramSimple",JSON.stringify(notDram));
    }
}