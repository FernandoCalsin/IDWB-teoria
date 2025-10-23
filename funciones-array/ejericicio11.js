//Crea una función que reciba un array y devuelva cuántos valores únicos contiene
function contarValoresUnicos(arreglo) {
  const valoresUnicos = new Set(arreglo);
  return valoresUnicos.size;
}
const numeros = [1, 2, 2, 3, 4, 4, 5];
const resultado = contarValoresUnicos(numeros);

console.log(resultado); // 5
