// Desafio 10
function techList() {
  
}

// Desafio 11
function generatePhoneNumber() {
 
}

// Desafio 12
function triangleCheck(measureA, measureB, measureC) {
  if (measureA > measureB + measureC 
      || measureB > measureA + measureC 
      || measureC > measureA + measureB ) {
    return false;
  }
  return true;
}
triangleCheck(10, 14, 8);

// Desafio 13
function hydrate() {
 
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
