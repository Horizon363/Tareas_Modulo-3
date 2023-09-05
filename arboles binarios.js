// Ej 1
class Nodo {
    constructor(valor) {
      this.valor = valor;
      this.izquierda = null;
      this.derecha = null;
    }
  }
  
  function sonArbolesIdenticos(arbolA, arbolB) {
    if (!arbolA && !arbolB) {
      return true; 
    }
  
    if (!arbolA || !arbolB) {
      return false; 
    }
  
    return (
      arbolA.valor === arbolB.valor &&
      sonArbolesIdenticos(arbolA.izquierda, arbolB.izquierda) &&
      sonArbolesIdenticos(arbolA.derecha, arbolB.derecha)
    );
  }
  
  
  const arbolA = new Nodo(1);
  arbolA.izquierda = new Nodo(2);
  arbolA.derecha = new Nodo(3);
  
  const arbolB = new Nodo(1);
  arbolB.izquierda = new Nodo(2);
  arbolB.derecha = new Nodo(3);
  
  console.log(sonArbolesIdenticos(arbolA, arbolB)); 

  
// Ej 2
function copiarArbol(arbol) {
    if (!arbol) {
      return null; 
    }
  
    const copia = new Nodo(arbol.valor);
    copia.izquierda = copiarArbol(arbol.izquierda);
    copia.derecha = copiarArbol(arbol.derecha);
  
    return copia;
  }
  
  
  const arbolOriginal = new Nodo(1);
  arbolOriginal.izquierda = new Nodo(2);
  arbolOriginal.derecha = new Nodo(3);
  
  const arbolCopia = copiarArbol(arbolOriginal);
  console.log(arbolCopia);

  
//Ej 3
function nodosEnNivel(arbol, nivel) {
    if (!arbol || nivel < 0) {
      return [];
    }
  
    if (nivel === 0) {
      return [arbol.valor];
    }
  
    const izquierda = nodosEnNivel(arbol.izquierda, nivel - 1);
    const derecha = nodosEnNivel(arbol.derecha, nivel - 1);
  
    return izquierda.concat(derecha);
  }
  
  
  const arbol = new Nodo(1);
  arbol.izquierda = new Nodo(2);
  arbol.derecha = new Nodo(3);
  arbol.izquierda.izquierda = new Nodo(4);
  arbol.izquierda.derecha = new Nodo(5);
  
  console.log(nodosEnNivel(arbol, 2)); 

  
// Ej 4
function contarHojas(arbol) {
    if (!arbol) {
      return 0;
    }
  
    if (!arbol.izquierda && !arbol.derecha) {
      return 1; 
    }
  
    return contarHojas(arbol.izquierda) + contarHojas(arbol.derecha);
  }
  
  
  const arbol = new Nodo(1);
  arbol.izquierda = new Nodo(2);
  arbol.derecha = new Nodo(3);
  arbol.izquierda.izquierda = new Nodo(4);
  arbol.izquierda.derecha = new Nodo(5);
  
  console.log(contarHojas(arbol)); 
  