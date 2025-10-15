// Klickreaction event listener zeugs
/*let theLink = document.getElementById("link1");

let theDiv = document.getElementById("div1");
let theDiv2 = document.getElementById("div2");

function klickReactiongruen() {

theDiv.style.color = "blue";
theDiv.style.backgroundColor = "#cec";

}

function klickReactionpink() {

theDiv2.style.color = "white";
theDiv2.style.backgroundColor = "pink";

}

// Eventlistener für 1 Link
document.getElementById("link1").addEventListener("click", klickReactiongruen);
document.getElementById("link2").addEventListener("click", klickReactionpink);
// Klickreaction event listenerzeugs
*/
// SWITCH ANIMATION
const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
});