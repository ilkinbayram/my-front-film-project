// Interfeys Islemleri

class UI{
    static delReklam(anyDelReklam){
        anyDelReklam.click(function(){
            $("#headerReklam").remove();
        })
    }
    static playVideo(main){
        $(".iFrameAvengers").removeClass("d-none");
        $(".coverOfMovie").removeClass("d-none");
        document.querySelector("body").style = "overflow: hidden;";
        $(".fixedStore").hide();
        $(".changePageToRegist").hide();
    }
    static exitVideo(){
        $(".iFrameAvengers").addClass("d-none");
        $(".coverOfMovie").addClass("d-none");
        $("body").css("overflow","initial");
        document.querySelector("body").style = "overflow: initial;";
        $(".fixedStore").show();
        $(".changePageToRegist").show();
        let sameIframeChange = `
        <iframe class="dinamicIframe" width="560" height="315" src="https://www.youtube.com/embed/O8jFBEGeaRw"
                    frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
                <a href="#" class="closeIframe">
                    <i class="fas fa-times-circle"></i>
                </a>
        `;
        $(".iFrameAvengers").text("");
        document.querySelector(".iFrameAvengers").innerHTML = sameIframeChange;
    }
    static openMainPage(){
        $("body").fadeIn(3000);
    }
    static clearAlert(){
        setTimeout(function(){
            $(".alertDivChecking").text("");
        },3500)
    }
}