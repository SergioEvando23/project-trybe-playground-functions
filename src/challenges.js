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
// Tive que pedir ajuda ao @AndreTorres - turma XP - tribo B

function splitSentence(string) {
  let arrayString = string.split(' ');
  return arrayString;
}
splitSentence('go Trybe');
splitSentence('vamo que vamo');
splitSentence('foguete');

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

// Desafio 6IOI
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
function catAndMouse(mouse, cat1, cat2) {
  let localCat1 = Math.abs(cat1 - mouse);
  let localCat2 = Math.abs(cat2 - mouse);
  let winner = null;
  if (localCat1 < localCat2) {
    winner = 'cat1';
  } else if (localCat2 < localCat1) {
    winner = 'cat2';
  } else {
    winner = 'os gatos trombam e o rato foge';
  }
  return winner;
}
catAndMouse(0, 3, 2);
catAndMouse(10, 4, 22);
catAndMouse(1, 0, 2);

// Desafio 8
function fizzBuzz(array) {
  let answer = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 3 == 0 && array[i] % 5 == 0) {
      answer.push('fizzBuzz');
    } else if (array[i] % 3 != 0 && array[i] % 5 != 0) {
      answer.push('bug!');
    } else if (array[i] % 3 == 0) {
      answer.push('fizz');
    } else if (array[i] % 5 == 0) {
      answer.push('buzz');
    }
  }
  return answer;
}

fizzBuzz([2, 15, 7, 9, 45]);

// Desafio 9
// Códigos Regexp Retirados do exercicio do @PaoloFullone - turma XP - tribo B;

function encode(text) {
  let encodedText = text
    .replace(/a/g, '1')
    .replace(/e/g, '2')
    .replace(/i/g, '3')
    .replace(/o/g, '4')
    .replace(/u/g, '5');
  return encodedText;
}
encode('hi there!');

function decode(text) {
  let decodedText = text
    .replace(/1/g, 'a')
    .replace(/2/g, 'e')
    .replace(/3/g, 'i')
    .replace(/4/g, 'o')
    .replace(/5/g, 'u');
  return decodedText;
}
decode('h3 th2r2!');

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

// referencia de pesquisa, documentação MDN  (https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String);
// referencia de pesquisa, documentação MDN  (https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math);
