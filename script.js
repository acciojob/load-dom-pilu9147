//your JS code here. If required.
let div = document.getElementsByTagName("div")[0];
function onLo(){
	div.innerHTML = "DOM load success";
}
window.addEventListener('load',onLo);
