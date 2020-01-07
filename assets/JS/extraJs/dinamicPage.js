// Delete Reklam
class DinamicPage{
    static configureTicket(configBtn,content){
        configBtn.click(function(e){
            e.preventDefault();
            if(configBtn.css("right") === "0px"){
                configBtn.css({
                    "right":"200px",
                    "transition":"all 0.8s",
                    "border-top-left-radius":"10px"
                })
                content.css({
                    "right":"0px",
                    "transition":"all 0.8s"
                })
                
            }
            else{
                configBtn.css({
                    "right":"0px",
                    "transition":"all 0.8s",
                    "border-top-left-radius":"0px"
                })
                content.css({
                    "right":"-200px",
                    "transition":"all 0.8s"
                })
            }
        })
    }
    static searchIcon(iconSection,iconItem){
        iconSection.click(function(e){
            e.preventDefault();
            if(iconItem.css("display") === "none"){
                iconSection.find("i").removeClass("fas fa-search").addClass("fas fa-times");
            }else{
                iconSection.find("i").removeClass("fas fa-times").addClass("fas fa-search");
            }
            iconItem.toggle(1000);
        })
    }
    static countFilms(freeFilms,paidFilms){
        let countFree = Number(freeFilms.textContent);
        let countPaid = Number(paidFilms.textContent);
        
        for (let i=1; i<=countFree; i++) { 
            hesablaFree(i); 
         } 
           
         function hesablaFree(i) { 
           setTimeout(function() { 
               freeFilms.innerText = i; 
           }, 1000/countFree * i); 
         }

         for(let j = 1; j<= countPaid; j++){
             hesablaPaid(j)
         }

         function hesablaPaid(j){
             setTimeout(function(){
                paidFilms.innerText = j;
             },1000/countPaid* j)
         }
        
    }
}