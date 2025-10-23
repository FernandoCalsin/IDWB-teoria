//Crea una función que reciba dos arreglos heterogéneos y que devuelva un arreglo con la unión, intersección y diferencia
function operarArreglos(arr1, arr2) {
  const union = [...new Set([...arr1, ...arr2])];
  const interseccion = arr1.filter(elemento => arr2.includes(elemento));
  const diferencia = arr1.filter(elemento => !arr2.includes(elemento));
  return {
    union,
    interseccion,
    diferencia
  };
}
const arreglo1 = [1, 'hola', true, 5];
const arreglo2 = [5, false, 'hola', 10];

const resultado = operarArreglos(arreglo1, arreglo2);

console.log("Unión:", resultado.union);
console.log("Intersección:", resultado.interseccion);
console.log("Diferencia:", resultado.diferencia);
