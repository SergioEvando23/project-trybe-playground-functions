// Desafio 1
function compareTrue(a, b) {
  let boolean = a && b;
  return boolean;
}
compareTrue(false, true);
compareTrue(false, false);
compareTrue(true, true);

// Desafio 2

function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}
calcArea(10, 50);
calcArea(5, 2);
calcArea(51, 1);

// Desafio 3
function splitSentence(string, separetor) {
  let arrayString = string.split(separetor);
  return arrayString;
}
splitSentence("go Trybe", " ");
splitSentence("vamo que vamo", " ");
splitSentence("foguete", " ");

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
