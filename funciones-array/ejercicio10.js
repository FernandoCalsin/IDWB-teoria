//Dado un arreglo de números, crea una función que devuelva un nuevo arreglo con los números pares elevados al cuadrado
function cuadradosDePares(arreglo) {
  return arreglo
    .filter(num => num % 2 === 0)
    .map(num => num ** 2);
}

const numeros = [1, 2, 3, 4, 5, 6];
const resultado = cuadradosDePares(numeros);
console.log(resultado); // [4, 16, 36]
