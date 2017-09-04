'use strict'
function getArray(){
    var getMovies = new XMLHttpRequest();
    getMovies.open("GET",'http://test.competa.com/js-movies-test/data/movies-json.php',false);
    getMovies.send(null);
    return getMovies.responseText;
}

var movielist = JSON.parse(getArray());
var movieAssets = movielist.data[0].assets;
var actionMovies = [];
var slideshowImg = document.getElementById("slideshow-image").src;
var movieInfoDisplay = document.getElementsByClassName("movie-info");
var currentIndex;

console.log(slideshowImg);
function getActionMovies(){
    for (var i = 0; i < movieAssets.length; i++){
       if(movieAssets[i].genre === "Action"){
           actionMovies.push(movieAssets[i]);
       }
   }
}

document.onkeydown = (function(ev){
    ev = ev || window.event;
    switch(ev.keyCode){
        case 37:
        getPrevImage(slideshowImg);
        printInfo(slideshowImg);
        break;
        case 39:
        getNextImage(slideshowImg);
        printInfo(slideshowImg);
        break;
    }
});

function getNextImage(currimgsrc){
    currentIndex = actionMovies.indexOf(currimgsrc).img;
    slideshowImg = actionMovies[currentIndex + 1].img;
    return slideshowImg;
}

function getPrevImage(currimgsrc){
    currentIndex = actionMovies.indexOf(currimgsrc);
    if(currentIndex == 0){
        slideshowImg = actionMovies[actionMovies.length].img;
    }
    else{
        slideshowImg = actionMovies[currentIndex - 1].img;
    }
    return slideshowImg;
}

function printInfo(img){
    switch(img){
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
getActionMovies();
printInfo(slideshowImg);
console.log(actionMovies);