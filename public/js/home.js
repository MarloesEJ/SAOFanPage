let element = document.getElementById('header')
    let randomImg = Math.floor(Math.random()* 6)
    let imgIndex = randomImg
    const listOfImg = [
        "img/AsunaKiritoBackground.jpg",
        "img/KiritoAsuna.jpg",
        "img/grouppic.jpg",
        "img/KiritoBackground.jpg",
        "img/Sundown.jpg",
        "img/Sunset.jpg",
    ]

    
function changeImage(){
    let newImgIndex = (imgIndex + 1)%listOfImg.length
    element.style.backgroundImage = "url('" + listOfImg[newImgIndex] + "')"
    imgIndex = newImgIndex
}

changeImage()

setInterval(changeImage, 7000)