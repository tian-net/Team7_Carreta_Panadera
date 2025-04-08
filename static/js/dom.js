// cambiar texto
document.getElementById("cambiar").addEventListener("click", () => {
  const p = document.getElementById("texto");
  p.innerHTML = "Texto cambiado";
});
// botones
document.addEventListener("DOMContentLoaded", () => {
  const botones = document.getElementsByClassName("btn");

  for (let boton of botones) {
    boton.addEventListener("click", () => {
      boton.innerText = "¡Texto cambiado!";
    });
  }
  //Script para el menú desplegable
});
document.addEventListener("DOMContentLoaded", function () {
  const productosItem = document.querySelector("li.relative.group");
  const submenu = productosItem.querySelector("ul");
  // Asegurar que el submenú permanezca abierto mientras el cursor está en él
  submenu.addEventListener("mouseenter", function () {
    this.classList.remove("hidden");
  });
  submenu.addEventListener("mouseleave", function () {
    this.classList.add("hidden");
  });
});

// Alternar la visibilidad del menú en pantallas pequeñas

// Obtener el botón y el menú
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

// Añadir un evento de clic al botón de hamburguesa
menuToggle.addEventListener("click", () => {
  // Alternar la visibilidad del menú
  menu.classList.toggle("hidden");
});
// Carrusel
const carousel = document.getElementById("carousel");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let index = 0;
const totalSlides = 3; // Número total de banners

function showSlide(i) {
  index = (i + totalSlides) % totalSlides; // Asegura el bucle infinito
  carousel.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  showSlide(index + 1);
}

function prevSlide() {
  showSlide(index - 1);
}

// Botones de navegación
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// Cambio automático cada 3 segundos
setInterval(nextSlide, 3000);
