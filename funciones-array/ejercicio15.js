//Crea una función booleana esSubconjunto(a, b) que 
// determine si todos los elementos de a están contenidos en b (detector de subconjunto)s
function esSubconjunto(a, b) {
  return a.every(elemento => b.includes(elemento));}
const conjuntoA = [1, 2];
const conjuntoB = [1, 2, 3, 4];
console.log(esSubconjunto(conjuntoA, conjuntoB));
console.log(esSubconjunto([2, 5], conjuntoB));
