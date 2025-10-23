//Crea una función que reciba un arreglo y un número, y devuelva cuántos elementos son múltiplos de ese número
const contarMultiplos = (arr, num) => {
  const multiplos = arr.filter(elemento => {    
    return elemento % num === 0;
  });
  return multiplos.length;
};
const contarMultiplosSimple = (arr, num) => arr.filter(el => el % num === 0).length;
const contarMultiplosFor = (arr, num) => {
  let contador = 0;
  for (const elemento of arr) {
    if (elemento % num === 0) {
      contador++;
    }
  }
  return contador;
};
const misNumeros = [10, 5, 21, 8, 15, 30];
console.log(contarMultiplos(misNumeros, 5));
console.log(contarMultiplosFor(misNumeros, 2));