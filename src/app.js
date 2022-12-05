/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
let arrowFunction = () => {
  console.log("Hola desde arrow Function");
  return 5;
};
console.log(arrowFunction());

let arrowFunction1 = a => {
  console.log(a);
};
arrowFunction1(50);

let arrowFunction2 = numero => {
  return numero + 50;
};
console.log(arrowFunction2(25));

let arrowFunction3 = (numero, agregar) => {
  return numero + agregar;
};
console.log(arrowFunction3(20, 20));

let arrowFunction4 = (numero, agregar = 0) => {
  return numero + agregar;
};
console.log(arrowFunction4(20));

//Declaration function
function SumarNumeros() {
  return [1, 2, 3, 4];
}
console.log(SumarNumeros());

function PruebaVarLet() {
  var varafuera = "var afuera";
  let letafuera = "let afuera";

  {
    var varadentro = "var adentro";
    let letadentro = "let adentro";
  }

  console.log(varafuera);
  console.log(letafuera);
  console.log(varadentro);
}

PruebaVarLet();

//Expression function

let multiplicar = function(num1, num2) {
  return num1 * num2;
};
console.log(multiplicar(5, 5));
