
const input = document.getElementById("campoTexto");
const boton = document.getElementById("botonAgregar");
const lista = document.getElementById("lista");

boton.addEventListener("click", () => {
  const texto = input.value.trim();

  if (texto !== "") {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = texto;
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";

    botonEliminar.addEventListener("click", () => {
      li.remove();
    });

    li.appendChild(span);
    li.appendChild(botonEliminar);
    lista.appendChild(li);
    input.value = "";
    input.focus();
  }
});
