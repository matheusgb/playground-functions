/* eslint-disable no-undef */
/* eslint-disable complexity */
// Desafio 1
function compareTrue(p1, p2) {
  if (p1 === true && p2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let split = string.split(' ');
  return split;
}

// Desafio 4
function concatName(array) {
  let ln = array[array.length - 1];
  let fn = array[0];
  return `${ln}, ${fn}`; // concatenação moderna (template literal)
}

// Desafio 5
function footballPoints(wins, ties) {
  let v = 0;
  let e = 0;

  for (let i = 0; i < wins; i += 1) {
    v += 1;
  }

  for (let i2 = 0; i2 < ties; i2 += 1) {
    e += 1;
  }

  return (v * 3) + e;
}

// Desafio 6
function highestCount(array2) {
  let c = 0;

  for (let i = 0; i < array2.length; i += 1) {
    if (array2[i] === Math.max(...array2)) { // spread para expandir conteúdo do array em locais onde múltiplos elementos são esperados
      c += 1;
    }
  }
  return c;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let c1 = Math.abs(cat1 - mouse); // cálculo entre distancia de dois números é sempre valor absoluto (função modular)
  let c2 = Math.abs(cat2 - mouse);

  if (c1 > c2) {
    return 'cat2';
  } if (c2 > c1) {
    return 'cat1';
  } if (c2 === c1) {
    return 'os gatos trombam e o rato foge';
  }
}
// Desafio 8
function fizzBuzz(arr) {
  let s = [];

  for (let i of arr) {
    if (i % 3 === 0 && i % 5 === 0) {
      s.push('fizzBuzz');
    } else if (i % 3 === 0) {
      s.push('fizz');
    } else if (i % 5 === 0) {
      s.push('buzz');
    } else if (i % 3 !== 0 && i % 5 !== 0) {
      s.push('bug!');
    }
  }
  return s;
}

// Desafio 9
function encode(str) {
  str = str.replace(/a/g, '1');
  str = str.replace(/e/g, '2');
  str = str.replace(/i/g, '3');
  str = str.replace(/o/g, '4');
  str = str.replace(/u/g, '5');
  return str;
}
function decode(str2) {
  str2 = str2.replace(/1/g, 'a');
  str2 = str2.replace(/2/g, 'e');
  str2 = str2.replace(/3/g, 'i');
  str2 = str2.replace(/4/g, 'o');
  str2 = str2.replace(/5/g, 'u');
  return str2;
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
