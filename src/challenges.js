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
let concatNameArray1 = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
let concatNameArray2 = ['foguete', 'não', 'tem', 'ré'];
let concatNameArray3 = ['captain', 'my', 'captain'];

function concatName(array) {
  let fristName = array[0];
  let lastName = array[array.length - 1];
  return lastName.concat(', ', fristName);
}
concatName(concatNameArray1);
concatName(concatNameArray2);
concatName(concatNameArray3);

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + (ties);
  return points;
}
footballPoints(14, 8);
footballPoints(1, 2);
footballPoints(0, 0);

// Desafio 6
let highestCountArray1 = [9, 1, 2, 3, 9, 5, 7];
let highestCountArray2 = [0, 4, 4, 4, 9, 2, 1];
let highestCountArray3 = [0, 0, 0];

function highestCount(array) {
  let bigger = Math.max(...array);
  let count = 0;
  for (let i = 0; i <= array.length; i += 1) {
    if (bigger === array[i]) {
      count += 1;
    }
  }
  return count;
}

highestCount(highestCountArray1);
highestCount(highestCountArray2);
highestCount(highestCountArray3);

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

// referencia de pesquisa, documentação MDN  (https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String)