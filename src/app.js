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
