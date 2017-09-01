function getArray(){
    getMovies = new XMLHttpRequest();
    getMovies.open("GET",'http://test.competa.com/js-movies-test/data/movies-json.php',false);
    getMovies.send(null);
    return getMovies.responseText;
}

var movielist = JSON.parse(getArray());
var movieAssets = movielist.data[0].assets;
var actionMovies = [];
var slideshowSection = document.getElementsByClassName("slideshow");
var slideshowImg = document.getElementById("slideshow-image").src;
var movieInfoDisplay = document.getElementById("movie-info");

function getActionMovies(){
     for (var i = 0; i < movieAssets.length; i++){
        if(movieAssets[i].genre === "Action"){
            actionMovies.push(movieAssets[i]);
        }
    }
}

document.onkeydown = (function(e){
    e = e || window.event;
    switch(e.keycode){
        case 37:
        getPrevImage(slideshowImg);
        printInfo();
        break;
        case 39:
        getNextImage(slideshowImg);
        printInfo();
        break;
    }
});

function checkIndex(src){
     return src = slideshowImg;
}

function getNextImage(src){
    
}

function getPrevImage(src){

}

function printInfo(){
    switch(slideshowImg){
        case "http://test.competa.com/js-movies-test/data/images/box_avatar.png":
        movieInfoDisplay = "Title: Avatar Genre: Action imdb rating: 5,7";
        break;
        case "http://test.competa.com/js-movies-test/data/images/box_quantum_of_solace.png":
        movieInfoDisplay = "Title: Quantum of Solace Genre: Action imdb rating: 5,4";
        break;
        case "http://test.competa.com/js-movies-test/data/images/box_brick_mansions.png":
        movieInfoDisplay = "Title: Brick Manzions Genre: Action imdb rating: 7,4";
        break;
    }
}

printInfo();
