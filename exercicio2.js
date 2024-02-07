const sequenciaFibonacci = (numero) => {
  let anterior = 0
  let atual = 1
  let proximo = 1
  for (let i = 0; i < numero; i++) {
    console.log(proximo)
    anterior = atual + proximo
    atual = proximo
    proximo = anterior
  }
}
console.log(sequenciaFibonacci(15))
