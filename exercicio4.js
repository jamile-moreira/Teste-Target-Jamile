// Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entradade sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;

let palavraInvertida = ''
const inverterPalavra = (palavra) => {
  for (let i = palavra.length - 1; i >= 0; i--) {
    palavraInvertida += palavra[i]
  }
  return palavraInvertida
}
console.log(inverterPalavra('teste'))
