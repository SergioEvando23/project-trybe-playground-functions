// Desafio 1
function compareTrue(a, b) {
  let boolean = a && b;
  return boolean;
}
compareTrue(false, true);
compareTrue(false, false);
compareTrue(true, true);

// Desafio 2
// Formula de cauclo de area consultada no site do educa mais brasil. (https://www.educamaisbrasil.com.br/enem/matematica/area-do-quadrado)
function calcArea(a, b) {
  let area = a * b;
  return area;
}
calcArea(3, 5);

// Desafio 3
function splitSentence(string, separetor) {
  let arrayString = string.split(separetor);
  return arrayString;
}
splitSentence("vamo que vamo", " ");

// Desafio 4
function concatName() {
 
}

// Desafio 5
function footballPoints() {
 
}

// Desafio 6
function highestCount() {
 
}

// Desafio 7
function catAndMouse() {
 
}

// Desafio 8
function fizzBuzz() {
 
}

// Desafio 9
function encode() {
 
}
function decode() {
 
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
