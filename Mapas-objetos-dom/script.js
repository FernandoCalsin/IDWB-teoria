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
function stringAEnteros(stringNumeros){
    return stringNumeros.split(',')
                        .map(n => parseInt(n.trim(), 10))
                        .filter(n => !isNaN(n));
}
function contarRepeticiones(arreglo) {
    const mapa = new Map();
    for (let num of arreglo) {
        mapa.set(num, (mapa.get(num) || 0) + 1);
    }
    return mapa;
}
function boton02(){
    let entrada = prompt("Ingrese arreglo de numeros separados por coma (1,2,3,4)");
    if (!entrada) return;
    let arreglo = stringAEnteros(entrada);
    const mapa = contarRepeticiones(arreglo);

    let texto = "";
    for (let [clave, valor] of mapa) {
        texto += `Número ${clave}: ${valor} repeticiones<br>`;
    }
    document.getElementById("resultadoMapa").innerHTML = texto;
}
document.getElementById("btnMapa").addEventListener("click", boton02);


//Ejercicicio03
function crearMapa(claves, valores) {
      const mapa = new Map();
      for (let i = 0; i < claves.length; i++) {
          mapa.set(claves[i], valores[i]);
      }
      return mapa;
}
  function intercambiarMapa(mapaOriginal) {
      const mapaInvertido = new Map();
      for (let [clave, valor] of mapaOriginal) {
          mapaInvertido.set(valor, clave);
      }
      return mapaInvertido;
}
function boton03(){ 
      let claves = prompt("Ingrese las claves separadas por coma (ej: a,b,c):");
      let valores = prompt("Ingrese los valores separados por coma (ej: 1,2,3):");

      if (!claves || !valores) return;

      const arregloClaves = claves.split(',').map(e => e.trim());
      const arregloValores = valores.split(',').map(e => e.trim());

      const mapaOriginal = crearMapa(arregloClaves, arregloValores);
      const mapaInvertido = intercambiarMapa(mapaOriginal);
      let texto = "<h3>Mapa original:</h3>";
      for (let [clave, valor] of mapaOriginal) {
          texto += `Clave: ${clave} → Valor: ${valor}<br>`;
      }

      texto += "<h3>Mapa invertido:</h3>";
      for (let [clave, valor] of mapaInvertido) {
          texto += `Clave: ${clave} → Valor: ${valor}<br>`;
      }

      document.getElementById("resultadoInvertir").innerHTML = texto;
}
document.getElementById("btnInvertir").addEventListener("click", boton03);
//Ejercicio04
function crearPersona(nombre, edad, ciudad) {
  return {
    nombre: nombre,
    edad: edad,
    ciudadResidencia: ciudad
  };
}
function cambiarCiudad(persona, nuevaCiudad) {
  persona.ciudadResidencia = nuevaCiudad;
  return persona;
}
function boton04() {
  const persona = crearPersona("Luis", 25, "Arequipa");
  let texto = `<h3>Datos originales:</h3>
  Nombre: ${persona.nombre}<br>
  Edad: ${persona.edad}<br>
  Ciudad de residencia: ${persona.ciudadResidencia}<br><br>`;
  const nuevaCiudad = prompt("Ingrese la nueva ciudad de residencia:");
  if (!nuevaCiudad) return;
  const personaActualizada = cambiarCiudad(persona, nuevaCiudad);
  texto += `<h3>Datos actualizados:</h3>
  Nombre: ${personaActualizada.nombre}<br>
  Edad: ${personaActualizada.edad}<br>
  Ciudad de residencia: ${personaActualizada.ciudadResidencia}`;
  document.getElementById("resultadoPersona").innerHTML = texto;
}
document.getElementById("btnPersona").addEventListener("click", boton04);
//ejercicio05
function recorrerYContarPropiedades(objeto) {
  console.log("Propiedades del objeto:");
  for (let propiedad in objeto) {
    console.log(`${propiedad}: ${objeto[propiedad]}`);
  }
  const cantidad = Object.keys(objeto).length;
  return cantidad;
}
function boton05() {
  const persona = {
    nombre: "Luis",
    edad: 25,
    ciudad: "Arequipa",
    profesion: "Ingeniero"
  };
  const total = recorrerYContarPropiedades(persona);
  let texto = `<h3>Objeto:</h3>`;
  for (let propiedad in persona) {
    texto += `${propiedad}: ${persona[propiedad]}<br>`;
  }

  texto += `<br><strong>Total de propiedades:</strong> ${total}`;

  document.getElementById("resultadoObjeto").innerHTML = texto;
}
document.getElementById("btnObjeto").addEventListener("click", boton05);

//Ejercicio06
class EquipoFutbol {
  constructor(nombre, ciudad) {
    this.nombre = nombre;
    this.ciudad = ciudad;
  }
  saludar() {
    return `¡Hola! Somos el equipo ${this.nombre} de la ciudad de ${this.ciudad}.`;
  }
}
function boton06() {
  let nombreEquipo = prompt("Ingrese el nombre del equipo:");
  let ciudadEquipo = prompt("Ingrese la ciudad del equipo:");
  const equipo = new EquipoFutbol(nombreEquipo, ciudadEquipo);
  const mensaje = equipo.saludar();
  let texto = `<strong>Equipo creado:</strong><br>`;
  texto += `Nombre: ${equipo.nombre}<br>`;
  texto += `Ciudad: ${equipo.ciudad}<br><br>`;
  texto += `<em>${mensaje}</em>`;

  document.getElementById("resultadoEquipo").innerHTML = texto;
}
document.getElementById("btnEquipo").addEventListener("click", boton06);

//Ejericicio07
class CuentaBancaria {
  constructor(titular, saldo) {
    this.titular = titular;
    this.saldo = saldo;
  }
  depositar(monto) {
    if (monto > 0) {
      this.saldo += monto;
      return `Depósito exitoso. Nuevo saldo: S/ ${this.saldo}`;
    } else {
      return "El monto a depositar debe ser mayor que 0.";
    }
  }
  retirar(monto) {
    if (monto <= 0) {
      return "El monto a retirar debe ser mayor que 0.";
    } else if (monto > this.saldo) {
      return "Fondos insuficientes para realizar el retiro.";
    } else {
      this.saldo -= monto;
      return `Retiro exitoso. Nuevo saldo: S/ ${this.saldo}`;
    }
  }
}
function boton07() {
  let titular = prompt("Ingrese el nombre del titular de la cuenta:");
  let saldoInicial = parseFloat(prompt("Ingrese el saldo inicial (en soles):"));
  const cuenta = new CuentaBancaria(titular, saldoInicial);
  let texto = `<strong>Cuenta creada:</strong><br>`;
  texto += `Titular: ${cuenta.titular}<br>`;
  texto += `Saldo inicial: S/ ${cuenta.saldo}<br><br>`;
  let accion = prompt("¿Qué desea hacer? (depositar / retirar)").toLowerCase();
  let monto = parseFloat(prompt("Ingrese el monto:"));
  let resultadoAccion = "";
  if (accion === "depositar") {
    resultadoAccion = cuenta.depositar(monto);
  } else if (accion === "retirar") {
    resultadoAccion = cuenta.retirar(monto);
  } else {
    resultadoAccion = "Acción no válida.";
  }
  texto += `<em>${resultadoAccion}</em>`;
  document.getElementById("resultadoCuenta").innerHTML = texto;
  console.log(cuenta);
}
document.getElementById("btnCuenta").addEventListener("click", boton07);

//Ejercicio08
class Persona {
  constructor(nombre, edad, ciudad) {
    this.nombre = nombre;
    this.edad = edad;
    this.ciudad = ciudad;
  }

  toString() {
    return `Persona: ${this.nombre}, ${this.edad} años, vive en ${this.ciudad}.`;
  }
}
class Estudiante extends Persona {
  constructor(nombre, edad, ciudad, carrera, promedio) {
    super(nombre, edad, ciudad);
    this.carrera = carrera;
    this.promedio = promedio;
  }

  estudiar() {
    return `${this.nombre} está estudiando la carrera de ${this.carrera}.`;
  }

  aprobarCurso() {
    return `${this.nombre} ha aprobado un curso. Su nuevo promedio es ${(this.promedio + 0.1).toFixed(2)}.`;
  }

  toString() {
    return `Estudiante: ${this.nombre}, ${this.edad} años, ${this.carrera}, promedio: ${this.promedio}.`;
  }
}
class Profesor extends Persona {
  constructor(nombre, edad, ciudad, materia, añosExperiencia) {
    super(nombre, edad, ciudad);
    this.materia = materia;
    this.añosExperiencia = añosExperiencia;
  }
  enseñar() {
    return `${this.nombre} está enseñando ${this.materia}.`;
  }
  evaluar() {
    return `${this.nombre} ha evaluado a sus estudiantes con ${this.añosExperiencia} años de experiencia.`;
  }
  toString() {
    return `Profesor: ${this.nombre}, ${this.edad} años, enseña ${this.materia}, experiencia: ${this.añosExperiencia} años.`;
  }
}

function boton08() {

  const persona = new Persona("Luis", 30, "Arequipa");
  const estudiante = new Estudiante("Carla", 21, "Cusco", "Ingeniería", 15.5);
  const profesor = new Profesor("Marcos", 45, "Lima", "Matemáticas", 20);

  const personas = [persona, estudiante, profesor];

  function mostrarElementos(array) {
    let texto = "";
    for (let elemento of array) {
      texto += `${elemento.toString()}<br>`;
    }
    return texto;
  }
  let resultado = `<strong>Objetos creados:</strong><br>${mostrarElementos(personas)}<br>`;

  resultado += `<strong>Acciones:</strong><br>`;
  resultado += `${estudiante.estudiar()}<br>`;
  resultado += `${estudiante.aprobarCurso()}<br>`;
  resultado += `${profesor.enseñar()}<br>`;
  resultado += `${profesor.evaluar()}<br>`;

  document.getElementById("resultadoHerencia").innerHTML = resultado;

  console.log(persona);
  console.log(estudiante);
  console.log(profesor);
}

document.getElementById("btnHerencia").addEventListener("click", boton08);

//Ejercicio09
function boton09() {
  const parrafoPorId = document.getElementById("parrafo1");
  console.log("Párrafo por ID:");
  console.log(parrafoPorId);
  const parrafosPorEtiqueta = document.getElementsByTagName("p");
  console.log("Párrafos por etiqueta <p>:");
  console.log(parrafosPorEtiqueta);
  const elementosPorClase = document.getElementsByClassName("comun");
  console.log("Elementos por clase 'comun':");
  console.log(elementosPorClase);
  let texto = "<strong>Selección de elementos realizada (ver consola):</strong><br><br>";

  texto += `1 Párrafo por ID: ${parrafoPorId.textContent}<br><br>`;

  texto += "2Párrafos por etiqueta:<br>";
  for (let p of parrafosPorEtiqueta) {
    texto += `- ${p.textContent}<br>`;
  }

  texto += "<br>3 Elementos con clase 'comun':<br>";
  for (let e of elementosPorClase) {
    texto += `- ${e.textContent}<br>`;
  }

  document.getElementById("resultadoDOM").innerHTML = texto;
}
document.getElementById("btnDOM").addEventListener("click", boton09);

//Ejercicio10

