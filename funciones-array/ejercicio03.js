//Crea una función operar que reciba dos números y una función como parámetro 
// (la operación que se aplicará, crear para las 6 operaciones aritméticas conocidas)

const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;
const modulo = (a, b) => a % b;
const potencia = (a, b) => a ** b;

const operar = (num1, num2, operacion) => {
  return operacion(num1, num2);
};

let numA = 10;
let numB = 2;

console.log(`Suma (10 + 2): ${operar(numA, numB, sumar)}`);
console.log(`Resta (10 - 2): ${operar(numA, numB, restar)}`);
console.log(`Multiplicación (10 * 2): ${operar(numA, numB, multiplicar)}`);
console.log(`División (10 / 2): ${operar(numA, numB, dividir)}`);
console.log(`Potencia (10 ** 2): ${operar(numA, numB, potencia)}`);
let numC = 10;
let numD = 3;
console.log(`Módulo (10 % 3): ${operar(numC, numD, modulo)}`);


