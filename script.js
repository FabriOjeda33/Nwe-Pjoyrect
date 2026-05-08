const BotonInicioCalculadora = document.getElementById("StartButton");
const Calculator = document.getElementById("Calculator");
BotonInicioCalculadora.addEventListener("click", () => {
  Calculator.style.display = "block";

});
const EnPantalla = document.getElementById("PantallaCalculadora");
const BotonesNumeros = document.querySelectorAll(".numero");
const Operadores = document.querySelectorAll(".operador");
  BotonesNumeros.forEach((boton) => {
    boton.addEventListener("click", () =>{
      EnPantalla.value += boton.textContent;
    });
   });
  Operadores.forEach((operador) => {
  operador.addEventListener("click", () => {
  EnPantalla.value += operador.textContent;
  })
 })