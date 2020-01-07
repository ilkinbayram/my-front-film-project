const filmName = document.querySelector("#filmName");
const filmDirector = document.querySelector("#filmDirector");
const filmUrl = document.querySelector("#filmUrl");
const filmSrc = document.querySelector("#videoUrl");

const radioAllName = document.getElementsByName('typeOfFilm');

const radioAction = document.querySelector("#typeAction");
const radioDram = document.querySelector("#typeDram");
const radioOther = document.querySelector("#typeOther");
const addButton = document.querySelector("#filmInputBtn");
const addForm = document.querySelector("#filmForm");
const valueControl1 = document.querySelector(".valueControl1");
const valueControl2 = document.querySelector(".valueControl2");

const serachFilm = document.querySelector("#searchFilm");
const filmMenu = document.querySelector("#filmMenu");
const filmTypeFilterDiv = document.querySelector("#filmTypeFilter");

const filmPlay = document.querySelector(".btnPlay");
const clearAllBtn = document.querySelector(".bckColAllDelete");

allEventListeners();

const filmStorage = new StorageFilmAdd()
const filmInterfeys = new Interfeys();

function allEventListeners(){
    document.addEventListener("DOMContentLoaded",function(e){
        let films = filmStorage.getLocalFilm();
        filmInterfeys.startToInterfeys(films);
    });
    serachFilm.addEventListener("keyup",function(e){
        filmInterfeys.searchFilm();
    })
    clearAllBtn.addEventListener("click",function(e){
        if(document.querySelector("#forAddTBody").firstElementChild !== null){
            if(confirm("Butun filmleri silmek uzresiniz. Eminsiniz ??? ")){
                filmStorage.deleteAllFilms();
                filmInterfeys.clearAllFilms();
                filmInterfeys.showAlert("primary","Butun Filmler Bazadan Silindi");
            }
            else{
                setTimeout(function(){
                    alert("Senin sagolun harda qaldi Be ? :) \n Adam bir sagol diyer \n yadiva salmasam Silecekdin her seyi Mal Kimi :D");
                },3000);
            }
        }
        
    })
    document.querySelector("tbody").addEventListener("dblclick",function(e){
        let films = filmStorage.getLocalFilm();
        let types = filmStorage.getLocalType();

        if(e.target.className === "img"){
            let choosenName = e.target.parentElement.nextElementSibling.innerHTML;
            
            if(confirm("Bu filmi silmek istediginizden emin misiniz")){
                e.target.parentElement.parentElement.remove();
                films.forEach(function(film,index){
                    if(choosenName===film.name){
                        films.splice(index,1);
                        types.splice(index,1);
                        localStorage.setItem("films",JSON.stringify(films));
                        localStorage.setItem("types",JSON.stringify(types));
                    }
                })
                filmInterfeys.showAlert("danger","Film Basariyla silindi...")
            }
            else{
                filmInterfeys.showAlert("warning","Filmi Silmekten vazgectiniz...")
            };
            
        }
        else if(e.target.className==="tdLer imgTd"){
            let choosenName = e.target.nextElementSibling.innerHTML;
            
            if(confirm("Bu filmi silmek istediginizden emin misiniz")){
                e.target.parentElement.remove();
                films.forEach(function(film,index){
                    if(choosenName===film.name){
                        films.splice(index,1);
                        types.splice(index,1);
                        localStorage.setItem("films",JSON.stringify(films));
                        localStorage.setItem("types",JSON.stringify(types));
                    }
                })
                filmInterfeys.showAlert("danger","Film Basariyla silindi...");
            }
            else{
                filmInterfeys.showAlert("warning","Filmi Silmekten vazgectiniz...");        
            }
            
        }
        else if(e.target.className==="tdLer filmNameInner"){
            let choosenName = e.target.innerHTML;

            if(confirm("Bu filmi silmek istediginizden emin misiniz")){
                e.target.parentElement.remove();
                films.forEach(function(film,index){
                    if(choosenName===film.name){
                        films.splice(index,1);
                        types.splice(index,1);
                        localStorage.setItem("types",JSON.stringify(types));
                        localStorage.setItem("films",JSON.stringify(films));
                    }
                })
                filmInterfeys.showAlert("danger","Film Basariyla Silindi...");
            }
            else{
                filmInterfeys.showAlert("warning","Filmi Silmekten vazgectiniz...");
            }
        }
        else if(e.target.className==="tdLer filmDirectorInner"){
            let choosenName = e.target.previousElementSibling.innerHTML;
            if(confirm("Bu filmi silmek istediginizden emin misiniz")){
                e.target.parentElement.remove();
                films.forEach(function(film,index){
                    if(choosenName === film.name){
                        films.splice(index,1);
                        types.splice(index,1);
                        localStorage.setItem("films",JSON.stringify(films));
                        localStorage.setItem("types",JSON.stringify(types));
                    }
                })
                filmInterfeys.showAlert("danger","Film Basariyla Silindi...");
            }
            else{
                filmInterfeys.showAlert("warning","Filmi Silmekten vazgectiniz...");
            }
        }
        else if(e.target.className==="tdLer videoSrcInner"){
            let choosenName = e.target.previousElementSibling.previousElementSibling.innerHTML;
            if(confirm("Bu filmi silmek istediginizden emin misiniz")){
                e.target.parentElement.remove();
                films.forEach(function(film,index){
                    if(choosenName === film.name){
                        films.splice(index,1);
                        types.splice(index,1);
                        localStorage.setItem("films",JSON.stringify(films));
                        localStorage.setItem("types",JSON.stringify(types));
                    }
                })
                filmInterfeys.showAlert("danger","Film Basariyla Silindi...");
            }
            else{
                filmInterfeys.showAlert("warning","Filmi Silmekten Vazgectiniz...");
            }
        }   
    })
    addForm.addEventListener("submit",submitFilmPage);
    valueControl1.addEventListener("mousemove",function(e){
        document.querySelector("#filmInputBtn").removeAttribute("disabled");
    });
    valueControl2.addEventListener("mousemove",function(e){
        document.querySelector("#filmInputBtn").removeAttribute("disabled");
    });

    addButton.addEventListener("mouseover",function(e){
    const name = filmName.value.trim();
    const director = filmDirector.value.trim();
    const url = filmUrl.value.trim();
    const src = filmSrc.value.trim();
    const types = radioAllName;

    const newFilm = new Film(name,director,url,src,types);
    filmInterfeys.checkInterfeys(newFilm);
    });
}

function submitFilmPage(e){
    let name = filmName.value;
    let director = filmDirector.value;
    let url = filmUrl.value;
    let src = filmSrc.value;
    let types = radioAllName;
    

    const newFilm = new Film(name,director,url,src);
    const newFilmType = new FilmType(types);
    filmInterfeys.addFilmToInterfeys(newFilm);
    
    filmStorage.setLocalFilm(newFilm)

    for(let i = 0 ; i<newFilmType.type.length ; i++){
        if(newFilmType.type[i].checked){
            filmStorage.setLocalType(newFilmType.type[i].value);
        }
    }

    

    filmInterfeys.showAlert("success", "Film Basariyla Yuklendi");
    

    e.preventDefault();

    filmInterfeys.searchFilm();

    filmName.value = "";
    filmDirector.value = "";
    filmUrl.value = "";
    filmSrc.value = "";
}
