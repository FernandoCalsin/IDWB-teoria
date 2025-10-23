//Crea una función calcularTotal que reciba dos precios y una función callback para mostrar el resultado

const calcularTotal = (precio1, precio2, callback) => {
  const total = precio1 + precio2;
  callback(total);
};
function mostrarResultado(resultado) {
  console.log(`El total es: ${resultado}`);
}
calcularTotal(100, 50, mostrarResultado); 
calcularTotal(80, 20, (resultado) => {
  console.log(`El pago final es: $${resultado}`);
});
