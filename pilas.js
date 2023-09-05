// Ejercicio 1
function obtenerElementos(pila, cantidad) {
  const elementosObtenidos = [];
  while (cantidad > 0 && pila.length > 0) {
    elementosObtenidos.push(pila.pop());
    cantidad--;
  }
  return elementosObtenidos.reverse(); 
}

const pilaEjemplo = ['Manzana', 'Cebolla', 'Apio', 'Naranja', 'Papaya', 'Sandía', 'Melón'];
const elementosObtenidos = obtenerElementos(pilaEjemplo, 4);
console.log(elementosObtenidos);


// Ejercicio 2
function reemplazar(pila, nuevo, viejo) {
  let encontrado = false;
  const pilaTemporal = [];

  while (pila.length > 0) {
    const elemento = pila.pop();
    if (elemento === viejo && !encontrado) {
      pilaTemporal.push(nuevo);
      encontrado = true;
    } else {
      pilaTemporal.push(elemento);
    }
  }

  while (pilaTemporal.length > 0) {
    pila.push(pilaTemporal.pop());
  }

  return pila;
}

const pilaEjemplo = [3, 2, 3, 4, 6, 8, 1, 2, 5, 5];
const resultado = reemplazar(pilaEjemplo, 7, 2);
console.log(resultado);


// Ejercicio 3
function recorridoIdaYVuelta(pueblos) {
  const recorridoIda = pueblos.join(" → ");
  const recorridoVuelta = pueblos.reverse().join(" → ");
  return `Recorrido de Ida: ${recorridoIda}\nRecorrido de Vuelta: ${recorridoVuelta}`;
}

const pueblos = ["Pueblo Origen", "Pueblo 1", "Pueblo 2", "Destino"];
const recorrido = recorridoIdaYVuelta(pueblos);
console.log(recorrido);


// Ejercicio 4
function retirarContenedorEspecifico(pila, idContenedor) {
  const pilaTemporal = [];
  let contenedorEncontrado = false;

  while (pila.length > 0) {
    const contenedor = pila.pop();
    if (contenedor === idContenedor && !contenedorEncontrado) {
      contenedorEncontrado = true;
      continue;
    }
    pilaTemporal.push(contenedor);
  }

  while (pilaTemporal.length > 0) {
    pila.push(pilaTemporal.pop());
  }

  return pila;
}

const pilaContenedores = [1, 2, 3, 4, 5, 6, 7];
const idContenedorARetirar = 4;
const resultado = retirarContenedorEspecifico(pilaContenedores, idContenedorARetirar);
console.log(resultado);
