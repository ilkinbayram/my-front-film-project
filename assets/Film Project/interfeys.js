function Interfeys(){

}

Interfeys.prototype.addFilmToInterfeys = function (anyNewFilmVar){

    const TBody = document.querySelector("#forAddTBody");
    TBody.innerHTML += ` <tr class="filmRow">
      <td class="tdLer imgTd"><img src="${anyNewFilmVar.url}" class="img" alt="resim bulunamadi"></td>
      <td class="tdLer filmNameInner">${anyNewFilmVar.name}</td>
      <td class="tdLer filmDirectorInner">${anyNewFilmVar.director}</td>
      <td class="tdLer videoSrcInner"><a href="${anyNewFilmVar.src}" target="_blank" class="btnPlay btn btn-danger"><i class="iconPlay far fa-play-circle"></i></a></td>
     </tr>`
}

Interfeys.prototype.checkInterfeys = function(anyFilmVariable){
    if(anyFilmVariable.name === "" || anyFilmVariable.director ==="" || anyFilmVariable.url === "" || anyFilmVariable.src === ""){
        document.querySelector("#filmInputBtn").setAttribute("disabled","true");
    }
    let mass = [];
    for(let i = 0 ; i < anyFilmVariable.types.length ; i++){
        let x = anyFilmVariable.types[i].checked;
        mass.push(x);
    }
    if(mass.toString().includes("true") === false){
        document.querySelector("#filmInputBtn").setAttribute("disabled","true");
    }
}

Interfeys.prototype.startToInterfeys = function (anyFilmObject){
    const tBody = document.querySelector("#forAddTBody");

    anyFilmObject.forEach(function(film){
    tBody.innerHTML += ` <tr class="filmRow">
      <td class="tdLer imgTd"><img src="${film.url}" class="img" alt="resim bulunamadi"></td>
      <td class="tdLer filmNameInner">${film.name}</td>
      <td class="tdLer filmDirectorInner">${film.director}</td>
      <td class="tdLer videoSrcInner"><a href="${film.src}" target="_blank" class="btnPlay btn btn-danger"><i class="iconPlay far fa-play-circle"></i></a></td>
     </tr>`
    });
}

Interfeys.prototype.showAlert = function(type,message){
    const alertBox = document.createElement("div");
    alertBox.className = `alert alert-${type} mt-2`;
    alertBox.textContent = `${message}`;
    document.querySelector(".firstCardBody").appendChild(alertBox);
    if(document.querySelectorAll(".alert").length > 1){
        document.querySelector(".firstCardBody").lastElementChild.previousElementSibling.remove();
    }
    setTimeout(function(){
        alertBox.remove();
    },1300);
}

Interfeys.prototype.clearAllFilms = function(){
    let filmRowLar = document.querySelectorAll(".filmRow");
    filmRowLar.forEach(function(film){
        film.remove();
    })

    /////////////////////////////////////////////

    // childrenOfTBody.forEach(function(item){
    //     item.remove();
    // })
    // tBody.innerHTML = "";

    /////////////////////////////////////////////

    // const filmList = document.querySelector("#forAddTBody");
    // while(filmList.firstElementChild !== null){
    //     filmList.firstElementChild.remove();
    // }

}

Interfeys.prototype.searchFilm = function (){
    const searchValue = document.querySelector("#searchFilm").value.toLowerCase();
    const filmList = document.querySelector("#forAddTBody");
    
    Array.from(filmList.children).forEach(function(film){
        film.setAttribute("style","display: none;");

        if(film.children[1].innerHTML.toLowerCase().includes(searchValue)){
            film.removeAttribute("style");
        }
    })
}