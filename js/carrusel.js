function crearCarrusel(id, items) {

    const contenedor = document.querySelector(id);

    let index = 0;

    let slides = "";
    for (let i = 0; i < items.length; i++) {
        slides = slides + '<div class="slide">' + items[i] + '</div>';
    }

    contenedor.innerHTML =
        '<div class="carousel">' +
            '<div class="track">' + slides + '</div>' +
            '<button class="btn prev">&#10094;</button>' +
            '<button class="btn next">&#10095;</button>' +
        '</div>';

    const track = contenedor.querySelector(".track");
    const nextBtn = contenedor.querySelector(".next");
    const prevBtn = contenedor.querySelector(".prev");

    function actualizar() {
        track.style.transform = "translateX(-" + index * 100 + "%)";
    }

    nextBtn.addEventListener("click", function () {
        index++;
        if (index > items.length - 1) index = 0;
        actualizar();
    });

    prevBtn.addEventListener("click", function () {
        index--;
        if (index < 0) index = items.length - 1;
        actualizar();
    });
}