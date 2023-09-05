// Ejercicio 1
class Nodo {
    constructor(dato) {
      this.dato = dato;
      this.siguiente = null;
    }
  }
  
  class ListaEnlazada {
    constructor() {
      this.cabeza = null;
    }
  
    insertarAlFinal(dato) {
      const nuevoNodo = new Nodo(dato);
  
      if (!this.cabeza) {
        this.cabeza = nuevoNodo;
        return;
      }
  
      let actual = this.cabeza;
      while (actual.siguiente) {
        if (actual.dato === dato) {
          return; 
        }
        actual = actual.siguiente;
      }
  
      if (actual.dato !== dato) {
        actual.siguiente = nuevoNodo;
      }
    }
  
    mostrar() {
      let actual = this.cabeza;
      while (actual) {
        console.log(actual.dato);
        actual = actual.siguiente;
      }
    }
  }
  
  const lista = new ListaEnlazada();
  lista.insertarAlFinal(1);
  lista.insertarAlFinal(2);
  lista.insertarAlFinal(3);
  lista.insertarAlFinal(2); 
  lista.mostrar();

  
  // Ejercicio 2
  class Nodo {
    constructor(dato) {
      this.dato = dato;
      this.siguiente = null;
    }
  }
  
  class ListaEnlazada {
    constructor() {
      this.cabeza = null;
    }
  
    insertarAlFinal(dato) {
      const nuevoNodo = new Nodo(dato);
  
      if (!this.cabeza) {
        this.cabeza = nuevoNodo;
        return;
      }
  
      let actual = this.cabeza;
      while (actual.siguiente) {
        actual = actual.siguiente;
      }
  
      actual.siguiente = nuevoNodo;
    }
  
    mostrarSuperioresA(valor) {
      let actual = this.cabeza;
      while (actual) {
        if (actual.dato > valor) {
          console.log(actual.dato);
        }
        actual = actual.siguiente;
      }
    }
  }
  
  const lista1 = new ListaEnlazada();
  const lista2 = new ListaEnlazada();
  
  for (let i = 0; i < 10; i++) {
    lista1.insertarAlFinal(Math.floor(Math.random() * 100)); 
    lista2.insertarAlFinal(Math.floor(Math.random() * 100));
  }
  
  console.log("Lista 1:");
  lista1.mostrarSuperioresA(50);
  console.log("Lista 2:");
  lista2.mostrarSuperioresA(70); 
  