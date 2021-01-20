// Globals
var titles = ["Addy", "Hebou", "Saint", "Steph", "Producer", "Musician", "Artist", "Assistant", "Student", "Mentee"];
var i = 0;
var opacity = 0;
var intervalID = 0;

// function fadeOut(word){
//     intervalID = setInterval(hide(word), 2);
// }


function changeTitle(){
    var word = document.getElementById("title");
    if (i == titles.length){
        i = 0;
    }
    word.innerHTML = titles[i];
    // fadeOut(word);
    i += 1;
}

// function hide(word){
//     opacity = Number(window.getComputedStyle(word).getPropertyValue("opacity"));
//     if (opacity > 0){
//         opacity -= 0.1;
//         word.style.opacity = opacity;
//     }
//     else{
//         clearInterval(intervalID);
//     }
// }


