let tempo = 5000,
    currentImageIndex = 0,
    images = document.querySelectorAll("#slider img")
    max = images.length;

function proxima_imagem() {

    images[currentImageIndex]
        .classList.remove("selected")

    currentImageIndex++

    if(currentImageIndex >= max)
        currentImageIndex = 0

    images[currentImageIndex]
        .classList.add("selected")
}

function start() {
    setInterval(() => {
        // troca de imagem
        proxima_imagem()
    }, tempo)
}
window.addEventListener("load", start)