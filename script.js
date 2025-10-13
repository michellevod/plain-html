console.log
let theLink = document.getElementById("link1");
let theDiv = document.getElementById("Div1");

function klickReaction() {

theLink.innerHTML = "Neuer Text Wow";
theLink.style.color = "red";
theLink.style.backgroundColor = "#cec";

}
// Eventlistener für 2 Links 
document.getElementById("link1)").addEventListener("click", klickReaction)

