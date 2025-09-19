const boton = document.getElementById("botonClick");
const span = document.getElementById("numClicks");
let num= 0;

boton.addEventListener("click", () => {
  num += 1;
  span.textContent=num;
});