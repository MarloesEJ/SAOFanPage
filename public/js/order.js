const closeModalButton = document.querySelectorAll('[data-close-button]')
const modal = document.getElementById("js--modal")
const form = document.getElementById("js--form")
const overlay = document.getElementById("overlay")

form.addEventListener('submit', order);

function order(){
    event.preventDefault()
    modal.classList.add("active")
    overlay.classList.add("active")
}

function closeModal(){
    modal.classList.remove("active")
    overlay.classList.remove("active")
}

function goHome(){
    window.location.href = "index.html"
}