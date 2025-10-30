function crearMapa(claves,valores) {
  const mapa = new Map();
  for (let i = 0; i < claves.length; i++) {
    mapa.set(claves[i], valores[i]);
  }
  return mapa;
}
const boton1 = document.getElementById("crearMapa");
const resultado1 = document.getElementById("resultado1");
boton1.addEventListener("click", function() {
  const clavesEntrada = prompt("Ingresa las claves separadas por comas:");
  const valoresEntrada = prompt("Ingresa los valores separados por comas:");
  const claves = clavesEntrada.split(",").map(c => c.trim());
  const valores = valoresEntrada.split(",").map(v => v.trim());
  if (claves.length !== valores.length) {
    alert("Debe haber la misma cantidad de claves y valores.");
    return;
  }
  const mapa = crearMapa(claves, valores);
  let texto = "";
  for (let [clave, valor] of mapa) {
    texto += `${clave}: ${valor}\n`;
  }
  resultado1.textContent = texto;
});
//Ejercici02
function boton02(){
    let arregloUsuario = prompt("Ingrese arreglo de numeros separados por una coma(1,2,3,4)");
    let arregloEnterosRepetidos=stringAEnteros(arregloUsuario);
    let arregloEnteroSinRepetidos=[...new Set(arregloEnterosRepetidos)];
    let arregloRepetidos=repetidos(arregloEnterosRepetidos,arregloEnteroSinRepetidos);
    const mapa=crearMapa(arregloEnteroSinRepetidos,arregloRepetidos);
    const resultado = document.getElementById("resultadoMapa");
    let texto = "";
    for (let [clave, valor] of mapa) {
        texto += `Número ${clave}: ${valor} repeticiones<br>`;
    }
    resultado.innerHTML = texto;
}
function stringAEnteros(stringNumeros){
    const arregloDeStrings=stringNumeros.split(`,`);
    const arregloEnteros = arregloDeStrings.map(elemento=>{
        const numeroLimpio = elemento.trim();
        return parseInt(numeroLimpio,10);
    })
    return arregloEnteros;
}
function repetidos(arreglo1,arreglo2){
    let arregloRetornar=new Array(arreglo2.length);    
    for(let i=0;i<arreglo2.length;i++){
        arregloRetornar[i]=0;
        for(let j=0;j<arreglo1.length;j++){
            if(arreglo2[i]===arreglo1[j]){
                arregloRetornar[i]++;
            }
        }
    }
    return arregloRetornar;
}
const boton = document.getElementById("btnMapa");
boton.addEventListener("click", boton02);