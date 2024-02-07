// Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// IMPORTANTE:
// Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

const fibonacci = (numero) => {
  let anterior = 0
  let atual = 0
  let proximo = 1
  let sequencia = []
  let mensagem = ''
  for (let i = 0; i < numero; i++) {
    sequencia.push(proximo)
    anterior = atual + proximo
    atual = proximo
    proximo = anterior
  }
  sequencia.includes(numero)
  if (sequencia.includes(numero) === true) {
    mensagem = 'se encontra na sequência de Fibonacci'
  } else {
    mensagem = 'não encontra na sequência de Fibonacci'
  }
  console.log(
    `O número informado foi ${numero} e a sequência de Fibonacci para o valor informado é ${sequencia}. O número informado ${mensagem}`
  )
}
fibonacci(20)
