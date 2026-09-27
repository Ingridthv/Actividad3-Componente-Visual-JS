<h1 align="center">🎠 Carrusel JS</h1>

<p align="center">
  Componente visual reutilizable hecho con JavaScript, HTML y CSS puros.<br>
  <b>Actividad 3. Componente Visual con JS</b>
</p>

<p align="center">
  <a href="https://ingridthv.github.io/Actividad3-Componente-Visual-JS/"><b>▶ Ver demo en vivo</b></a>
</p>

---

## ¿Qué problema resuelve?

Cuando una página necesita varios carruseles (por ejemplo, uno de frutas y otro de verduras), lo normal es **copiar y pegar** el mismo bloque de HTML una y otra vez y cambiar el texto y las imágenes a mano. Eso es lento, se llena de código repetido y es fácil equivocarse.

**Carrusel JS** lo resuelve con una sola función: le pasas *dónde* quieres el carrusel y *qué* quieres mostrar (texto e imagen), y él construye todo (HTML, botones y movimiento). Sin copiar y pegar, sin frameworks y sin instalar nada.

## Características

- Genera el HTML del carrusel dinámicamente con JavaScript.
- Cada tarjeta muestra una **imagen** y un **texto**.
- Botones ❮ ❯ con animación de deslizamiento.
- Es circular: después de la última tarjeta vuelve a la primera.
- Reutilizable: puedes tener varios carruseles en la misma página y cada uno funciona de forma independiente.
- Sin frameworks ni dependencias.

## Instalación

Copia a tu proyecto `css/styles.css`, `js/carrusel.js` y la carpeta `img/` con tus imágenes, e inclúyelos en tu HTML:

```html
<head>
    <link rel="stylesheet" href="css/styles.css" />
</head>
<body>
    <!-- tu contenido -->

    <script src="js/carrusel.js"></script>
    <script src="js/fruyver.js"></script>
</body>
```

> `carrusel.js` debe ir **antes** que el archivo donde lo usas (`fruyver.js`), porque este último llama a la función.

## Uso

**1. Crea un contenedor vacío en tu HTML:**

```html
<section>
    <h2>Frutas</h2>
    <div id="frutas"></div>
</section>
```

**2. En tu archivo JS, crea el carrusel indicando el contenedor y el contenido (texto e imagen):**

```js
crearCarrusel("#frutas", [
    { texto: "Uva", imagen: "img/uva.jpg" },
    { texto: "Manzana", imagen: "img/manzana.jpg" },
    { texto: "Plátano", imagen: "img/platano.jpg" }
]);
```

**3. ¿Otro carrusel con distinto contenido? Llama a la misma función de nuevo:**

```js
crearCarrusel("#frutas", [
    { texto: "Uva", imagen: "img/uva.jpg" },
    { texto: "Manzana", imagen: "img/manzana.jpg" },
    { texto: "Plátano", imagen: "img/platano.jpg" }
]);

crearCarrusel("#verduras", [
    { texto: "Brócoli", imagen: "img/brocoli.jpg" },
    { texto: "Tomate", imagen: "img/tomate.jpg" },
    { texto: "Pimiento", imagen: "img/pimiento.jpg" }
]);
```

### Parámetros

| Parámetro | Tipo   | Descripción                                                           |
|-----------|--------|-----------------------------------------------------------------------|
| `id`      | String | Selector del contenedor donde se dibuja el carrusel (ej. `"#frutas"`) |
| `items`   | Array  | Lista de objetos, una tarjeta por cada uno                            |

Cada objeto de `items` tiene:

| Propiedad | Tipo   | Descripción                              |
|-----------|--------|------------------------------------------|
| `texto`   | String | Nombre que aparece debajo de la imagen   |
| `imagen`  | String | Ruta de la imagen (ej. `"img/uva.jpg"`)  |

### Código de la librería (`js/carrusel.js`)

```js
function crearCarrusel(id, items) {

    // 1. Buscamos el contenedor donde va a ir el carrusel
    const contenedor = document.querySelector(id);

    // 2. Guarda en qué slide vamos (0 = la primera)
    let index = 0;

    // 3. Creamos una slide (imagen + texto) por cada elemento de la lista
    let slides = "";
    for (let i = 0; i < items.length; i++) {
        slides = slides + '<div class="slide">' +
                              '<img src="' + items[i].imagen + '">' +
                              '<span>' + items[i].texto + '</span>' +
                          '</div>';
    }

    // 4. Dibujamos el carrusel dentro del contenedor
    contenedor.innerHTML =
        '<div class="carousel">' +
            '<div class="track">' + slides + '</div>' +
            '<button class="btn prev">&#10094;</button>' +
            '<button class="btn next">&#10095;</button>' +
        '</div>';

    // 5. Buscamos las piezas que acabamos de crear
    const track = contenedor.querySelector(".track");
    const nextBtn = contenedor.querySelector(".next");
    const prevBtn = contenedor.querySelector(".prev");

    // 6. Mueve el carrusel a la slide actual
    function actualizar() {
        track.style.transform = "translateX(-" + index * 100 + "%)";
    }

    // 7. Botón siguiente
    nextBtn.addEventListener("click", function () {
        index++;
        if (index > items.length - 1) index = 0;
        actualizar();
    });

    // 8. Botón anterior
    prevBtn.addEventListener("click", function () {
        index--;
        if (index < 0) index = items.length - 1;
        actualizar();
    });
}
```

## Estructura del proyecto

```
Actividad3-Componente-Visual-JS/
├── css/
│   └── styles.css      # Estilos del carrusel
├── js/
│   ├── carrusel.js     # La librería (función crearCarrusel)
│   └── fruyver.js      # Uso del componente: frutas y verduras
├── img/                # Imágenes de las tarjetas y capturas
├── index.html          # Página de demostración
└── README.md
```

## Notas

- No requiere instalación ni compilación: basta con abrir `index.html` en el navegador.
- Se puede usar con tantas tarjetas como se quiera, sin límite.
- Para cambiar el tamaño de las imágenes, ajusta la propiedad `height` en la regla `.slide img` de `styles.css`.

## Autora

Ingrid — Actividad 3. Componente Visual con JS

---

## Capturas de pantalla

### Carrusel de frutas
![Carrusel de frutas](img/captura-frutas.png)

### Carrusel de verduras
![Carrusel de verduras](img/captura-verduras.png)

### HTML generado dinámicamente (herramientas de desarrollador)
![HTML generado por JS](img/captura-consola.png)

## Video demo

▶ **[Ver el video promocional (1 min)](PEGA-AQUI-EL-LINK-DEL-VIDEO)**