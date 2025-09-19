const input = document.getElementById("nuevaTarea");
const btnAgregar = document.getElementById("agregar");
const lista = document.getElementById("lista");
const btnLimpiar = document.getElementById("limpiar");

let tareas = JSON.parse(localStorage.getItem("tareas")) || [];

function mostrarTareas() {
  lista.innerHTML = "";

  tareas.forEach((tarea, index) => {
    const li = document.createElement("li");
    if (tarea.completada) li.classList.add("completed");

    const span = document.createElement("span");
    span.textContent = tarea.texto;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = tarea.completada;
    checkbox.addEventListener("change", () => {
      tareas[index].completada = checkbox.checked;
      guardar();
    });

    li.appendChild(span);
    li.appendChild(checkbox);
    lista.appendChild(li);
  });
}

function guardar() {
  localStorage.setItem("tareas", JSON.stringify(tareas));
  mostrarTareas();
}


btnAgregar.addEventListener("click", () => {
  const texto = input.value.trim();
  if (texto === "") return;

  tareas.push({ texto: texto, completada: false });
  input.value = "";
  guardar();
});

btnLimpiar.addEventListener("click", () => {
  tareas = tareas.filter(t => !t.completada);
  guardar();
});


mostrarTareas();
