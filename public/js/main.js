const popup = document.getElementById('js--popup')
const overlay = document.getElementById('overlay_popup')

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