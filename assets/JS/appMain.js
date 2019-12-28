$(document).ready(function(){

    // Select the Elements
    let reklam = $("#delHeaderReklam");
    let configureTicket = $(".changePageToRegist");
    let configureTicketContent = $(".cheangeContent");
    let mainNavSection = $("#headerNavbar");
    let mainSlideGOTSection = $("#mainSlideGOT");
    let searchIcon = $("#searchIcon");
    let searchItem = $("#searchChangeIcon");
    let freeFilms = document.querySelector(".pinkFilms");
    let paidFilms = document.querySelector(".successFilms");

    // Close Reklam
    DinamicPage.delReklam(reklam);

    // Right fixed registration
    DinamicPage.configureTicket(configureTicket,configureTicketContent);

    // SearchIcon ChangeAble
    DinamicPage.searchIcon(searchIcon,searchItem);

    // fixed Navbar/////////////////
    let limitTop = document.getElementById("headerNavbar").offsetTop;
    $("body").keydown(function(e){
        limitTop = document.getElementById("headerNavbar").offsetTop;
        return limitTop;
    })

    window.onresize = function() {
    limitTop = widthFunction()
    return limitTop;
    };
    window.onscroll = function() {myFunction(limitTop)};

    function widthFunction(){
        let limitTop = document.getElementById("headerNavbar").offsetTop;
        return limitTop;
    }
    function myFunction(limitTop) {
        if(document.body.scrollTop > limitTop || document.documentElement.scrollTop > limitTop ){
            let heightOfNavbar = $("#headerNavbar").outerHeight();
            $("#headerNavbar").addClass("fixedTopSticky");
            $("#headerNavbar").css("box-shadow","black 2px 2px 10px 2px");
            $("#mainSlideGOT").css("margin-top", `${heightOfNavbar}px` );
        }
        else{
            $("#headerNavbar").removeClass("fixedTopSticky");
            $("#mainSlideGOT").css("margin-top", "0");
            $("#headerNavbar").css("box-shadow","0px 0px 0px 0px black");
        }
    }
    /////////////////////////////////
        DinamicPage.countFilms(freeFilms,paidFilms);
    
    

    });