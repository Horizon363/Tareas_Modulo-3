// EJ 1
function ordenarDescendente(arr) {
    return arr.sort((a, b) => b - a);
  }
  
  const entrada1 = [9, 3, 1, 6, 5, 88, -1, 2, 7];
  console.log(ordenarDescendente(entrada1)); 

  
// EJ 2
function ordenarPorASCII(arr) {
    return arr.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
  }
  
  const entrada2 = ['b', 'h', 'w', 'e', 'a'];
  console.log(ordenarPorASCII(entrada2)); 

  
// EJ 3
class Alumno {
    constructor(nombre, calificaciones) {
      this.nombre = nombre;
      this.calificaciones = calificaciones;
    }
  
    obtenerPromedio() {
      const suma = this.calificaciones.reduce((total, calificacion) => total + calificacion, 0);
      return suma / this.calificaciones.length;
    }
  }
  
  class Salon {
    constructor() {
      this.alumnos = [];
    }
  
    agregarAlumno(alumno) {
      this.alumnos.push(alumno);
    }
  
    ordenarPorPromedio() {
      return this.alumnos.sort((a, b) => b.obtenerPromedio() - a.obtenerPromedio());
    }
  }
  
  const alumno1 = new Alumno('Juan', [90, 85, 92, 88, 95]);
  const alumno2 = new Alumno('Maria', [88, 92, 86, 91, 89]);
  
  const salon = new Salon();
  salon.agregarAlumno(alumno1);
  salon.agregarAlumno(alumno2);
  
  const alumnosOrdenados = salon.ordenarPorPromedio();
  console.log(alumnosOrdenados);

  
// EJ 4
function ordenarPorLongitud(arr) {
    return arr.sort((a, b) => a.length - b.length);
  }
  
  const entrada4 = ["adios", "hola", "maximo", "uno", "despedida"];
  console.log(ordenarPorLongitud(entrada4)); 

  
// EJ 5
function distanciaAlOrigen(coordenada) {
    return Math.sqrt(coordenada[0] ** 2 + coordenada[1] ** 2);
  }
  
  function ordenarPorDistanciaAlOrigen(arr) {
    return arr.sort((a, b) => distanciaAlOrigen(a) - distanciaAlOrigen(b));
  }
  
  const entrada5 = [[7, 3], [2, 2], [1, 0], [4, 3]];
  console.log(ordenarPorDistanciaAlOrigen(entrada5)); 
  