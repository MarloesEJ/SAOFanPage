const popup = document.getElementById('js--popup')
const overlay = document.getElementById('overlay_popup')
const hamburger = document.getElementById('js--hamburger')
const navBar = document.getElementById('js--navbar')
const navBlocks = document.getElementById('js--navbar-links')
const overlayH3 = document.getElementById('js--H3')
let stateNav = 0

hamburger.addEventListener("click", nav)

function nav(){
  if (stateNav == 0){
    hamburger.classList.add("active")
    navBar.classList.add("active")
    navBlocks.classList.add("active")
    overlayH3.classList.add('active')
    stateNav = 1
  } 
  else{
    hamburger.classList.remove("active")
    navBar.classList.remove("active")
    navBlocks.classList.remove("active")
    stateNav = 0
  }

}

function openOrder(){
  window.location.href = "orderform.html"
}

function openPopUp(){
  popup.classList.add("active")
  overlay.classList.add("active")  
}

function closePopUp(){
  popup.classList.remove("active")
  overlay.classList.remove("active")
}