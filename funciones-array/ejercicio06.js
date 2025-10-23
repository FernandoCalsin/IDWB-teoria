//Crea una función que reciba un arreglo de números y devuelva la suma de los positivos

const sumarPositivosFor = (arr) => {
  let suma = 0;
  for (const num of arr) {    
    if (num > 0) {
      suma += num;
    }
  }
  return suma;
};
const sumarPositivosReduce = (arr) => {
  return arr.reduce((acumulador, num) => {    
    if (num > 0) {
      return acumulador + num;
    } else {      
      return acumulador;
    }
  }, 0);
};
const sumarPositivosSimple = (arr) => {
  return arr.reduce((acc, num) => (num > 0 ? acc + num : acc), 0);
};
const misNumeros = [10, -5, 2, -8, 0, 3];
console.log(sumarPositivosFor(misNumeros));
console.log(sumarPositivosReduce(misNumeros));
console.log(sumarPositivosSimple(misNumeros));