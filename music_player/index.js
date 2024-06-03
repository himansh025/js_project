let pre= document.querySelector(".backword");
let controls= document.querySelectorAll(".controls");
let play= document.querySelector(".play");
let forword= document.querySelector(".forword");
let song= document.getElementsByClassName("song")

// function playsong()
// {

play.addEventListener("click",function(){
    if(song[0].paused)
    {
        song[0].play();
        play.classList.remove("play");
        play.classList.add("pause");

    }
else{
    song[0].paused();
    play.classList.remove("pause");
    play.classList.add("play");
}
});