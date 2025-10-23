//Crea una función llamada promedio que reciba tres números y devuelva su promedio.
// 4 versiones: declarada, expresada, flecha con bloque y flecha simplificada

//1.Funcion Declarada
function promedio(num1,num2,num3){
    return (num1+num2+num3)/3;
}
//2.Función Expresada
const promedioExpresada = function(num1, num2, num3) {
  return (num1+num2+num3)/3;
};
//3.Función Flecha (con bloque)
const promedioFlechaBloque=(num1,num2,num3)=>{
  return (num1 + num2 + num3) / 3;
};
// 4. Función Flecha (simplificada)
const promedioFlechaSimple = (num1,num2,num3)=>(num1+num2+num3)/3;

console.log(promedioDeclarada(10, 5, 3));
console.log(promedioExpresada(10, 5, 3));
console.log(promedioFlechaBloque(10, 5, 3));
console.log(promedioFlechaSimple(10, 5, 3));