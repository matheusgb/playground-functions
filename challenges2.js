// Desafio 10
function techList(nums, name) {
  nums.sort();
  let lt = [];
  let em = 'Vazio!';

  for (let i of nums) {
    lt.push({ tech: i, name });
  }

  if (nums.length < 1) {
    return em;
  }
  return lt;
}

// Desafio 11
function generatePhoneNumber(nums) {
  if (nums.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  let r = 0;
  for (let i of nums) {
    if (i < 0 || i > 9 || r > 2) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    r = 0; // zera repetições do numero anterior
    for (let i2 of nums) {
      if (i === i2) {
        r += 1;
      }
    }
  }

  let p = `(${nums[0]}${nums[1]})` + ` ${nums[2]}${nums[3]}${nums[4]}${nums[5]}${nums[6]}-${nums[7]}${nums[8]}${nums[9]}${nums[10]}`;
  return p;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let s = lineA + lineB;
  let d = Math.abs(lineA - lineB);

  if (s < lineC && s > d) {
    return true;
  } if (lineC < s && lineC > d) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(stg) {
  let s = 0;
  let n = stg.match(/\d/g).map(Number); // match procura uma string baseada num regexp, o /\d/ acha um digito, e o g procura além de achar o primeiro digito, map cria um array e o Number especifica pra criar a array com números.

  if (n.length > 1) {
    for (let i of n) {
      s += i;
    }
  } if (s > 0) {
    return `${s} ` + 'copos de água';
  }
  return `${n} ` + 'copo de água';
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
