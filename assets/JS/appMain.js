$(document).ready(function () {
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
    let limitTop = document.getElementById("headerNavbar").offsetTop;
    let main = document.querySelector("main");
    let iframe = document.querySelector(".iFrame");
    let body = document.body;
    let signUpBtn = $(".signUpBtn");
    let signInBtn = $(".signInBtn");
    let pixelArray = [];
    let username = $("#userId");
    let password = $("#userPassword");
    let newMainCreateStorage = new CreateStorage();
    let userMassiv = newMainCreateStorage.getLocalUserName();
    let emailMassiv = newMainCreateStorage.getLocalEmail();
    let passwordMassiv = newMainCreateStorage.getLocalPassword();
    let signInForm = $(".userEntranceForm");
    let aHref = $("#signInBtnAHref");
    let signCheckClass = new SignCheck(username.val(),password.val(),userMassiv,passwordMassiv,emailMassiv,aHref);


    // Owl Carousel
    var owl = $('.owl-carousel');
        owl.owlCarousel({
        items:4,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true
    });
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })

    // all event listeners
    allEventListeners();
//////////////////////////////////////////////////////////////////////////////
    function allEventListeners() {
    // Sign In UI
        signInBtn.click(function(e){
            $(".signInModal").css({
                "transition":"all 1s linear",
                "top":"30px"
            })
            $(".coverOfMovie").removeClass("d-none");
            document.querySelector("body").style = "overflow: hidden;";
            $(".fixedStore").hide();
            $(".changePageToRegist").hide();
        })
    // Sign In Check
        aHref.click(function(e){
            signCheckClass.changeValues(username.val(),password.val());
            signCheckClass.signIn();
            document.querySelector("#userId").value = "";
            document.querySelector("#userPassword").value = "";
            UI.clearAlert();  
        })
        
    // Sign Up
        signUpBtn.click(function(e){
            signUpBtn.attr("href","./assets/Film Project/registration.html");
        })
    // When Onload Opacity of the Page
        window.onload = function (e) {
            document.querySelector("#insteadBod").style = "opacity: 1; transition: all 2s ease !important;"
        }
    // When page is littling
        window.onresize = function () {
            limitTop = widthFunction();
            return limitTop;
        };
    
    // When the page is scrolling
        window.onscroll = function () {

            myFunction(limitTop)
            if ($("html").scrollTop() > 1111 && $("html").scrollTop() < 1181) {

                if (pixelArray.indexOf(1135) == -1) {
                    DinamicPage.countFilms(freeFilms, paidFilms);
                    for (let i = 1111; i <= 1181; i++) {
                        pixelArray.push(i);
                    }
                }

            }
        };
        // When Mobile Touch
        $("body").mousedown(function (e) {
            limitTop = document.getElementById("headerNavbar").offsetTop;
            // return limitTop;
        })
        $("body").mousemove(function (e) {
            limitTop = document.getElementById("headerNavbar").offsetTop;
            // return limitTop;
        })
        // iframe Click To Video
        iframe.addEventListener("click", function (e) {
            e.preventDefault();
            if (e.target.className === "iFrame" || e.target.className === "avengersIframeImageClass" || e.target.className === "playIcon" ||
                e.target.className === "playIconAnimate1" || e.target.className === "playIconAnimate2" || e.target.className === "fas fa-play") {
                    
                UI.playVideo(main);
            }

        })

        body.addEventListener("click", function (e) {
            if (e.target.className === "fas fa-times-circle" || e.target.className === "coverOfMovie") {
                e.preventDefault();
                UI.exitVideo(e);
                $(".signInModal").css({
                    "transition":"all 1s linear",
                    "top":"-500px"
                })
            }
            
        })


    }

    // Close Reklam
    UI.delReklam(reklam);

    // Right fixed registration
    DinamicPage.configureTicket(configureTicket, configureTicketContent);

    // SearchIcon ChangeAble
    DinamicPage.searchIcon(searchIcon, searchItem);

    // fixed Navbar/////////////////


    function widthFunction() {
        let limitTop = document.getElementById("headerNavbar").offsetTop;
        return limitTop;
    }

    function myFunction(limitTop) {
        if (document.body.scrollTop > limitTop || document.documentElement.scrollTop > limitTop) {
            let heightOfNavbar = $("#headerNavbar").outerHeight();
            $("#headerNavbar").addClass("fixedTopSticky");
            $("#headerNavbar").css("box-shadow", "black 2px 2px 10px 2px");
            $("#mainSlideGOT").css("margin-top", `${heightOfNavbar}px`);
        } else {
            $("#headerNavbar").removeClass("fixedTopSticky");
            $("#mainSlideGOT").css("margin-top", "0");
            $("#headerNavbar").css("box-shadow", "0px 0px 0px 0px black");
        }
    }
    /////////////////////////////////
    DinamicPage.countFilms(freeFilms, paidFilms);


});