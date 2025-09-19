const input = document.getElementById("buscador");
const lista = document.getElementById("lista");
const vacio = document.getElementById("vacio");
const items = lista.querySelectorAll("li");

function aplicarFiltro(valor) {
  let visibles = 0;

  items.forEach((li) => {
    if (li.textContent.toLowerCase().includes(valor.toLowerCase())) {
      li.style.display = "";
      visibles++;
    } else {
      li.style.display = "none";
    }
  });

  if (visibles === 0) {
    vacio.style.display = "block";
  } else {
    vacio.style.display = "none";
  }
}

input.addEventListener("input", function () {
  aplicarFiltro(input.value);
});
