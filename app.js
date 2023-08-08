const menu = document.getElementById("menu")
const nav = document.getElementById("nav")
console.log(nav , menu);

function onCLickMenu(){
 menu.classList.toggle("icon")
 nav.classList.toggle("change")

}
menu.addEventListener("click" , onCLickMenu)