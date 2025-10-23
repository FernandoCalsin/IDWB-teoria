//Crea una función llamada mostrarResultado que use otra función interna para calcular el doble de un número

function mostrarResultado(numero) {
  function calcularDoble(num) {
    return num * 2;
  }
  const resultadoDoble = calcularDoble(numero);
  return resultadoDoble;
}
console.log(mostrarResultado(10));
console.log(mostrarResultado(50));
