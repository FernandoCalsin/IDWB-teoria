//Crea una función que reciba un arreglo y devuelva un nuevo arreglo con el menor y el mayor número, en ese orden
const encontrarMinYMax = (arr) => {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return [min, max];
};
const encontrarMinYMaxLoop = (arr) => {
  let min = arr[0];
  let max = arr[0];
  for (const num of arr) {
    if (num < min) {
      min = num;
    }
    if (num > max) {
      max = num;
    }
  }
  return [min, max];
};
const numeros = [50, 10, 100, 5, 80, -2];
console.log(encontrarMinYMax(numeros));
console.log(encontrarMinYMaxLoop(numeros));