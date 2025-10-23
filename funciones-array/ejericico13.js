//Crea una función soloUnaVez(arr) que reciba un arreglo de números y 
// retorne un nuevo arreglo con los elementos que aparecen exactamente una vez en el original
function soloUnaVez(arr) {
  return arr.filter(num => arr.indexOf(num) === arr.lastIndexOf(num));
}
const numeros = [1, 2, 2, 3, 4, 4, 5];
const resultado = soloUnaVez(numeros);

console.log(resultado); // [1, 3, 5]
