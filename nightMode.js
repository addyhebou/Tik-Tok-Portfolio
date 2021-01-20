
var night = false;
var day = true;

function turnOnNight(){
    document.getElementById("bckgrnd").style.backgroundColor = "#121212";
    document.querySelectorAll('li').forEach(e => e.style.color = "white");
    document.querySelectorAll('h1').forEach(e => e.style.color = "white");
    document.querySelectorAll('h2').forEach(e => e.style.color = "white");
    document.querySelectorAll('i').forEach(e => e.style.color = "white");
    document.querySelectorAll('p').forEach(e => e.style.color = "white");
    document.getElementById('grayBox').style.backgroundColor = "#262626";
    console.log(`hello`);
    document.querySelectorAll('header').forEach(e => e.style.borderTop = "6px solid rgb(224, 127, 224)");
    document.querySelectorAll('header').forEach(e => e.style.backgroundColor = "#262626");
    console.log(`bye`);
}

function turnOffNight(){
    document.getElementById("bckgrnd").style.backgroundColor = "white";
    document.querySelectorAll('li').forEach(e => e.style.color = "black");
    document.querySelectorAll('h1').forEach(e => e.style.color = "black");
    document.querySelectorAll('h2').forEach(e => e.style.color = "black");
    document.querySelectorAll('i').forEach(e => e.style.color = "black");
    document.querySelectorAll('p').forEach(e => e.style.color = "black");
    document.getElementById('grayBox').style.backgroundColor = "white";
    document.querySelectorAll('header').forEach(e => e.style.borderTop = "6px solid rgb(255,255,255)");
    document.querySelectorAll('header').forEach(e => e.style.backgroundColor = "white");


}

function shiftColors(){
    if(day == false){
        day = true;
        night = false;
        turnOffNight();
    }
    else{
        day = false;
        night = true;
        turnOnNight();
    }
}
