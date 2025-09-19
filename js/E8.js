const textarea = document.getElementById("texto");
const palabras = document.getElementById("palabras");
const caracteres = document.getElementById("caracteres");

textarea.addEventListener("input", function () {
  const texto = textarea.value;

  // Contar palabras (filtrando espacios vacíos)
  const listaPalabras = texto.trim().split(/\s+/).filter(p => p.length > 0);
  const numPalabras = texto.trim() === "" ? 0 : listaPalabras.length;

  // Contar caracteres (sin espacios ni saltos de línea)
  const numCaracteres = texto.replace(/\s/g, "").length;

  palabras.textContent = "Palabras: " + numPalabras;
  caracteres.textContent = "Caracteres: " + numCaracteres;
});
