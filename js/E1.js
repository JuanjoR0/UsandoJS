
const body = document.body;
const boton = document.getElementById("botonColor");

function colorAleatorio() {
  const letras = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letras[Math.floor(Math.random() * 16)];
  }
  return color;
}

boton.addEventListener("click", () => {
  body.style.backgroundColor = colorAleatorio();
});
