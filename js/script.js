// DATOS PARA FILTRAR //

// Primer filtro: mascotas //

const dwjuan = [

//mascotas //

{id: 1, name:"Thor", image: "img/img5.jpg", genero: "mascotas" ,description: "Perro dulce y jugueton con una personalidad encantadora. Está buscando una familia amorosa que le ofrezca un hogar cálido y lleno de diversión."},
{id: 2, name:"Jack", image: "img/img2.jpg", genero: "mascotas" ,description: "Es un gatito cariñoso y juguetón que busca una familia que le dé mucho amor y un hogar lleno de felicidad."},
{id: 3, name:"Max", image: "img/img6.jpg", genero: "mascotas" ,description: "Es un perrito alegre y amigable que sueña con encontrar una familia que juegue con él y le dé todo el amor que merece."},
{id: 4, name:"Luna", image: "img/img3.jpg", genero: "mascotas" ,description: "Es una gatita tierna y tranquila que busca un hogar donde pueda recibir mucho cariño y compartir momentos especiales."},

//conocelos //

{id: 5, name:"Milo", image: "img/img4.jpg", genero: "conocelos" ,description: "Es un gatito cariñoso, juguetón y curioso que busca una familia que le dé mucho amor y un hogar donde pueda ser feliz."},
{id: 6, name:"Toby", image: "img/img8.jpg", genero: "conocelos" ,description: "Es un perrito alegre, cariñoso y juguetón que busca una familia que lo llene de amor y le brinde un hogar donde pueda ser feliz."},
{id: 7, name:"Rocky", image: "img/img7.jpg", genero: "conocelos" ,description: "Es un perrito tierno, leal y amigable que busca una familia que lo cuide, juegue con él y le dé todo el amor que merece."},
{id: 8, name:"Nala", image: "img/img1.jpg", genero: "conocelos" ,description: "Es una gatita dulce, curiosa y cariñosa que busca una familia que la llene de amor y le dé un hogar seguro donde pueda ser feliz."},

];

// Obtener el contenedor y los botones del DOM
const dwjuanContainer = document.getElementById("adopcion-container");

function renderDw(genero = "all") {
    if (!dwjuanContainer) return;

    const categoria = genero || "all";

    let dwjuanToRender = dwjuan.filter(item => categoria === "all" || item.genero === categoria);

    if (categoria === "all") {
        dwjuanToRender = [...dwjuanToRender].sort(() => Math.random() - 0.5);
    }

    dwjuanContainer.innerHTML = "";

    if (!dwjuanToRender.length) {
        dwjuanContainer.innerHTML = '<p class="text-center w-100">No hay disponibles para esta categoría.</p>';
        return;
    }

    dwjuanToRender.forEach(dw => {
        const cardHtml = `
            <figure class="mascota-card" data-gender="${dw.genero}">
                <img src="${dw.image}" alt="la fundación tienen los programas, nombre: ${dw.name}">
                <figcaption>${dw.name}</figcaption>
                <div class="card-description">
                    <p>${dw.description}</p>
                </div>
            </figure>
        `;

        dwjuanContainer.insertAdjacentHTML("beforeend", cardHtml);
    });
}

function setupFilterButtons() {
    const filterButtons = document.querySelectorAll(".filter-btn");

    if (!filterButtons.length) return;

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const genero = button.dataset.category || "all";

            filterButtons.forEach(btn => btn.classList.toggle("active", btn === button));
            renderDw(genero);
        });
    });

    const activeButton = document.querySelector('.filter-btn.active') || filterButtons[0];
    if (activeButton) {
        renderDw(activeButton.dataset.category || "all");
    }
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setupFilterButtons);
} else {
    setupFilterButtons();
}


// Función para el botón de volver al inicio
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}




