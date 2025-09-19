const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const resultado = document.getElementById("resultado");

function calcular(operacion) {
  const a = parseFloat(num1.value);
  const b = parseFloat(num2.value);

  if (isNaN(a) || isNaN(b)) {
    resultado.textContent = "Introduce los numeros";
    return;
  }

  let res;
  switch (operacion) {
    case "sumar":
      res = a + b;
      break;
    case "restar":
      res = a - b;
      break;
    case "multiplicar":
      res = a * b;
      break;
    case "dividir":
      if (b === 0) {
        resultado.textContent = "No se puede dividir entre 0";
        resultado.classList.add("error");
        return;
      }
      res = a / b;
      break;
  }

  resultado.textContent = "Resultado: " + res;
}

document.getElementById("sumar").addEventListener("click", () => 
    calcular("sumar")
);
document.getElementById("restar").addEventListener("click", () => 
    calcular("restar")
);
document.getElementById("multiplicar").addEventListener("click", () => 
    calcular("multiplicar")
);
document.getElementById("dividir").addEventListener("click", () => 
    calcular("dividir")
);

