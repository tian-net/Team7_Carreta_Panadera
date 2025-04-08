document.getElementById("cambiar").addEventListener("click", () => {
  const p = document.getElementById("texto");
  p.innerHTML = "Texto cambiado";
});
document.addEventListener("DOMContentLoaded", () => {
  const botones = document.getElementsByClassName("btn");

  for (let boton of botones) {
    boton.addEventListener("click", () => {
      boton.innerText = "¡Texto cambiado!";
    });
  }
});
