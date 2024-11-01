// ------------------------------------------------------- menu
let menuBar = document.getElementById("menu-bar")
let myMenu = document.querySelector(".menu")
let body = document.querySelector("body")
menuBar.onclick = function () {
    if (myMenu.style.left !== "0px") {
            myMenu.style.left = "0px"
    }else{
        myMenu.style.left = "1000px"
    }
}
// ------------------------------------------------------- header onscroll
const header = document.querySelector('header');
window.onscroll = function() {
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'black' 
        header.style.color = 'white'
        myMenu.style.backgroundColor = "black"
    } else {
        header.style.backgroundColor = 'transparent';
        header.style.color = 'white'
        myMenu.style.backgroundColor = "transparent"

    }
};
// ------------------------------------------------------- contact button
let contactUs = document.getElementById("contact-us")
let contactWindow = document.getElementById("contact-window")
let closeButton = document.querySelector(".close")
let flat = document.getElementById("flat")

contactUs.onclick = function () {
    contactUs.style.display = "none"
    contactWindow.style.display = "block"
    flat.style.zIndex = "10"
    flat.style.display = "block"
}
closeButton.onclick = function(){
    contactWindow.style.display = "none"
    contactUs.style.display = "block"
    flat.style.zIndex = "-1"
    flat.style.display = "none"
}


