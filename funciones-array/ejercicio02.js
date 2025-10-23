//Crea una función flecha llamada evaluarNumero 
// que reciba un número y devuelva un mensaje
//  indicando si es positivo, negativo o cero
const evaluarNumeroSimple = (numero) => 
  (numero > 0) ? "Es positivo" : (numero < 0) ? "Es negativo" : "Es cero";
console.log(evaluarNumero(10));
console.log(evaluarNumero(-5));
console.log(evaluarNumero(0));

