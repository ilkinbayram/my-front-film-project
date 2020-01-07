function StorageFilmAdd(){

}
StorageFilmAdd.prototype.getLocalFilm = function(){
    let films;
    if(localStorage.getItem("films")===null){
        films = [];
    }
    else{
        films = JSON.parse(localStorage.getItem("films"));
    }
    return films;
}
StorageFilmAdd.prototype.setLocalFilm = function(anyNewFilm){
    let films = this.getLocalFilm();
    films.push(anyNewFilm);
    localStorage.setItem("films",JSON.stringify(films));
}
/////////
StorageFilmAdd.prototype.getLocalType = function(){
    let types;
    if(localStorage.getItem("types")===null){
        types = [];
    }
    else{
        types = JSON.parse(localStorage.getItem("types"));
    }
    return types;
}
StorageFilmAdd.prototype.setLocalType = function(anyNewType){
    let types = this.getLocalType();
    types.push(anyNewType);
    localStorage.setItem("types",JSON.stringify(types));
}

StorageFilmAdd.prototype.deleteAllFilms = function(){
    let films = this.getLocalFilm();
    // localStorage.removeItem("films"); // Sadece secilen keyi silmek ucun istifade olunur.
    // localStorage.clear(); // Butun locali temizlemek ucun istifade olunur
    localStorage.removeItem("films");
    localStorage.removeItem("types")
}