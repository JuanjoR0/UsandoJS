let horas = 0;
let minutos = 0;
let segundos = 0;
let intervalo = null;
let corriendo = false;

const tiempo = document.getElementById("tiempo");
const btnIniciar = document.getElementById("iniciar");
const btnPausar = document.getElementById("pausar");
const btnReiniciar = document.getElementById("reiniciar");

function actualizarTiempo() {
  tiempo.textContent = horas + ":" + minutos + ":" + segundos;
}

function convertir() {
  segundos++;
  if (segundos === 60) {
    segundos = 0;
    minutos++;
  }
  if (minutos === 60) {
    minutos = 0;
    horas++;
  }
  actualizarTiempo();
}

btnIniciar.addEventListener("click", function () {
  if (!corriendo) {
    intervalo = setInterval(convertir, 1000);
    corriendo = true;
  }
});

btnPausar.addEventListener("click", function () {
  clearInterval(intervalo);
  corriendo = false;
});

btnReiniciar.addEventListener("click", function () {
  clearInterval(intervalo);
  corriendo = false;
  horas = 0;
  minutos = 0;
  segundos = 0;
  actualizarTiempo();
});

actualizarTiempo();
