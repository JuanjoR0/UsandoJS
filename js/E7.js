const input = document.getElementById("longitud");
const boton = document.getElementById("generar");
const resultado = document.getElementById("resultado");

const caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?";

boton.addEventListener("click", function () {
  const longitud = parseInt(input.value);

  if (isNaN(longitud) || longitud < 4) {
    resultado.textContent = "La longitud debe ser mayor o igual a 4";
    resultado.classList.add("error");
    return;
  }

  let password = "";
  for (let i = 0; i < longitud; i++) {
    const index = Math.floor(Math.random() * caracteres.length);
    password += caracteres[index];
  }

  resultado.textContent = "🔑 Contraseña: " + password;
  resultado.classList.remove("error");
});
