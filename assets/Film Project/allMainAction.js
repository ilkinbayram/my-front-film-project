// click olunacaqlar
let buyClick = $(".submitCheckMoney");
let satisFormu = $(".satisFormu");
let simplePlace = $(".filmSeats1");
let vipPlace = $(".filmSeats2");
let ticketCountNumber = 0;
let ticketCount = $("#ticketCount");
let ticketAmount = $(".amountTicketResult");
let ticketAmountNumber = 0;
let promoInput = $("#customerPromoCode");
let promoCodes = ["HTC1M8","90XD090","M4A1"];
let endirimPromo = [25,50,10];
let amountInput = $("#customerAmountAccept");
let tenArray = $("#tenDolars").find("img");
let twentyArray = $("#twentyDolars").find("img");

allEventListeners();

function allEventListeners(){

    window.onload = function(e){
        let simpleSrcArray;
        let vipSrcArray;
        simpleSrcArray = StorageAction.getSimpleLoacl();
        vipSrcArray = StorageAction.getVipLocal();

        if(simpleSrcArray.length == tenArray.length && vipSrcArray.length == twentyArray.length){
            for(let i = 0; i < tenArray.length ; i++){
                tenArray[i].setAttribute("src",simpleSrcArray[i]);
                if(simpleSrcArray[i] === "./pngTicket/notAllowed.png"){
                    tenArray[i].parentElement.parentElement.className = "notAllowed";
                }
            }
            for(let j = 0; j < twentyArray.length ; j++){
                twentyArray[j].setAttribute("src",vipSrcArray[j]);
                if(vipSrcArray[j] === "./pngTicket/notAllowed.png"){
                    twentyArray[j].parentElement.parentElement.className = "notAllowed";
                }
            }
        }
    }

    satisFormu.submit(function(e){
        StorageAction.setSimpleLocal();
        StorageAction.setVipLocal();
    })
    buyClick.mouseover(function(e){
        if(amountInput.val() !== ticketAmount.text()){
            buyClick.attr("disabled","true");
        }
    })
    amountInput.mouseover(function(e){
        document.querySelector(".submitCheckMoney").removeAttribute("disabled");
    })
    simplePlace.click(function(e){
        e.preventDefault();
        if(e.target.parentElement.parentElement.className === "filmSeats1"){
            ticketCount.text(++ticketCountNumber);
            let clickedAmount = Number(e.target.getAttribute("filmAmount"));
            ticketAmountNumber += clickedAmount;
            ticketAmount.text(ticketAmountNumber);
            e.target.setAttribute("src","./pngTicket/selected.png");
            e.target.parentElement.parentElement.className = "default";
        }
        else if(e.target.parentElement.parentElement.className === "default"){
            ticketCount.text(--ticketCountNumber);
            let clickedAmount = Number(e.target.getAttribute("filmAmount"));
            ticketAmountNumber -= clickedAmount;
            ticketAmount.text(ticketAmountNumber);
            e.target.setAttribute("src","./pngTicket/seat.png");
            e.target.parentElement.parentElement.className = "filmSeats1";
        }
        promoInput.val("");
        $(".promoVerification").text("Qeyd Edilmeyib");
    })
    vipPlace.click(function(e){
        e.preventDefault();
        if(e.target.parentElement.parentElement.className === "filmSeats2"){
            ticketCount.text(++ticketCountNumber);
            let clickedAmount = Number(e.target.getAttribute("filmAmount"));
            ticketAmountNumber += clickedAmount;
            ticketAmount.text(ticketAmountNumber);
            e.target.setAttribute("src","./pngTicket/premium.png");
            e.target.style = "opacity: 1; position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: -1";
            e.target.parentElement.parentElement.className = "default";
        }
        else if(e.target.parentElement.parentElement.className === "default"){
            ticketCount.text(--ticketCountNumber);
            let clickedAmount = Number(e.target.getAttribute("filmAmount"));
            ticketAmountNumber -= clickedAmount;
            ticketAmount.text(ticketAmountNumber);
            e.target.setAttribute("src","./pngTicket/vipSeat.png");
            e.target.style = "opacity: 0.3; position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: -1";
            e.target.parentElement.parentElement.className = "filmSeats2";
        }
        promoInput.val("");
        $(".promoVerification").text("Qeyd Edilmeyib");  
    })

    promoInput.keyup(function(e){
        if(promoCodes.indexOf(promoInput.val()) !== -1){
            $(".promoVerification").text(promoInput.val());
            let realAmount = Number(ticketAmount.text());
            realAmount = realAmount*((100-endirimPromo[promoCodes.indexOf(promoInput.val())])/100);
            ticketAmount.text(realAmount);
        }
    })
}