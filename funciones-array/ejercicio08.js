//Crea una función que devuelva un nuevo arreglo con los elementos en orden inverso

const invertirConToReversed = (arr) => {
  return arr.toReversed();
};
const invertirConCopia = (arr) => {  
  return [...arr].reverse();
};
const invertirManual = (arr) => {
  let nuevoArreglo = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    nuevoArreglo.push(arr[i]);
  }
  return nuevoArreglo;
};
const original = [10, 20, 30, 40];
console.log(invertirConToReversed(original));
console.log(invertirConCopia(original));
console.log(invertirManual(original));
console.log("---");
console.log("Original no ha cambiado:", original);
