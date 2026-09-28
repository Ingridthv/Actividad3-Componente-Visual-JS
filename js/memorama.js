function crearMemorama(id, items) {

    const contenedor = document.querySelector(id);

    let index = 0;        
    let primera = null;   
    let bloqueo = false;  
    let intentos = 0;
    let pares = 0;

    
    const cartas = items.concat(items);
    cartas.sort(function () {
        return Math.random() - 0.5;
    });

    let html = "";
    for (let i = 0; i < cartas.length; i++) {
        html = html + '<div class="carta">' +
                          '<img src="' + cartas[i].imagen + '">' +
                          '<span>' + cartas[i].texto + '</span>' +
                      '</div>';
    }

    contenedor.innerHTML =
        '<div class="carousel">' +
            '<div class="track">' + html + '</div>' +
            '<button class="btn prev">&#10094;</button>' +
            '<button class="btn next">&#10095;</button>' +
        '</div>' +
        '<p class="info">Intentos: 0</p>';

    const track = contenedor.querySelector(".track");
    const nextBtn = contenedor.querySelector(".next");
    const prevBtn = contenedor.querySelector(".prev");
    const info = contenedor.querySelector(".info");
    const todas = contenedor.querySelectorAll(".carta");

    function actualizar() {
        track.style.transform = "translateX(-" + index * (100 / 3) + "%)";
    }

    nextBtn.addEventListener("click", function () {
        index++;
        if (index > cartas.length - 3) index = 0;
        actualizar();
    });

    prevBtn.addEventListener("click", function () {
        index--;
        if (index < 0) index = cartas.length - 3;
        actualizar();
    });

    for (let i = 0; i < todas.length; i++) {
        todas[i].addEventListener("click", function () {

            if (bloqueo) return;
            if (todas[i].classList.contains("volteada")) return;

            todas[i].classList.add("volteada");

            if (primera === null) {
                primera = i;
                return;
            }

            intentos++;
            info.textContent = "Intentos: " + intentos;

            if (cartas[primera].texto === cartas[i].texto) {
                pares++;
                primera = null;
                if (pares === items.length) {
                    info.textContent = "¡Ganaste en " + intentos + " intentos!";
                }
            } else {
                bloqueo = true;
                const anterior = primera;
                primera = null;
                setTimeout(function () {
                    todas[anterior].classList.remove("volteada");
                    todas[i].classList.remove("volteada");
                    bloqueo = false;
                }, 1000);
            }
        });
    }
}