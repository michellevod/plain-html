const songs = [" Dynamite - Taio Cruz " , " Atemlos - Helene Fischer" , " Birds of a feather - Billie Eilish " , " Hallo - Susi " , " Tschuess - Daniel" , " Ciao - Michelle "]; 

document.getElementById("playList").innerHTML = songs;


let text ="";
let ranking;

for (let i = 0; i<songs.length; i++){
    ranking= i;
    text += "<span class`songRanked`>"+ ranking+1 +".) Song Name: " + songs[i] + "<br>";
}

document.getElementById("playList2").innerHTML = text;
// -----------
var button = document.querySelector('button');
var box = document.getElementById('changeMe');

button.onlick = function changeColor() {
    box.style.background = 'red';
}