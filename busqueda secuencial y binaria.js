// Ej 1
function numeroMasRepetido(arr) {
    const conteo = {};
    let numeroMasRepetido = arr[0];
    let maxRepeticiones = 1;
  
    for (let i = 0; i < arr.length; i++) {
      const numero = arr[i];
      if (conteo[numero] === undefined) {
        conteo[numero] = 1;
      } else {
        conteo[numero]++;
      }
  
      if (conteo[numero] > maxRepeticiones) {
        maxRepeticiones = conteo[numero];
        numeroMasRepetido = numero;
      }
    }
  
    return numeroMasRepetido;
  }
  
  const arr = [3, 6, 1, 8, 2, 3, 6, 3, 2, 5, 6];
  console.log(numeroMasRepetido(arr)); 

  
// EJ 2
function letrasEnArreglo(arr) {
    const letras = arr.filter((elemento) => typeof elemento === 'string');
    return letras;
  }
  
  const arr = [8, 'e', 7, 2, 'a', 'd', 'f', 2, 3, 1, 4, 3];
  console.log(letrasEnArreglo(arr));

  
// EJ 3
function numeroMasGrande(arr) {
    return Math.max(...arr);
  }
  
  const arr = [1, 4, 7, 2, 4, 1, 9, 4, 0, 2, 4, 5, 12];
  console.log(numeroMasGrande(arr)); 

  
// EJ 4
function numeroMasPequeno(arr) {
    return Math.min(...arr);
  }
  
  const arr = [1, 4, 5, -1, -7, 2, 3, 9];
  console.log(numeroMasPequeno(arr)); 

  
// EJ 5
class Contacto {
    constructor(nombre, apellidos, telefono) {
      this.nombre = nombre;
      this.apellidos = apellidos;
      this.telefono = telefono;
    }
  }
  
  class ListaContactos {
    constructor() {
      this.contactos = [];
    }
  
    agregarContacto(contacto) {
      this.contactos.push(contacto);
    }
  
    buscarContactoPorNombre(nombre) {
      return this.contactos.find((contacto) => contacto.nombre === nombre);
    }
  }
  
  const lista = new ListaContactos();
  const contacto1 = new Contacto('Juan', 'Perez', '123-456-7890');
  const contacto2 = new Contacto('Maria', 'Gomez', '987-654-3210');
  lista.agregarContacto(contacto1);
  lista.agregarContacto(contacto2);
  
  const resultado = lista.buscarContactoPorNombre('Maria');
  console.log(resultado); 
  