// Ejercicio 1
function dividirCola(colores) {
    const cola1 = [];
    const cola2 = [];
  
    for (let i = 0; i < colores.length; i++) {
      if (i % 2 === 0) {
        cola1.push(colores[i]);
      } else {
        cola2.push(colores[i]);
      }
    }
  
    return { cola1, cola2 };
  }
  
  const colaOriginal = ["amarillo", "rosa", "rojo", "verde", "azul", "negro", "morado", "blanco"];
  const resultado = dividirCola(colaOriginal);
  console.log("Cola 1:", resultado.cola1);
  console.log("Cola 2:", resultado.cola2);
  

  // Ejercicio 2
  function retirarColados(cola) {
    const colaInicial = [...cola]; 
    const colaFinal = [];
    const coladosRetirados = [];
  
    while (cola.length > 0) {
      const usuario = cola.dequeue(); 
  
      if (usuario.ticket) {
        colaFinal.enqueue(usuario); 
      } else {
        coladosRetirados.push(usuario); 
      }
    }
  
    console.log("Cola Inicial:", colaInicial);
    console.log("Elementos Retirados:", coladosRetirados);
    console.log("Cola Final:", colaFinal.toArray()); 
  }
  
  const cola = [
    { user: 'User1', ticket: true },
    { user: 'User2', ticket: true },
    { user: 'User3', ticket: false },
    { user: 'User4', ticket: true },
    { user: 'User5', ticket: false },
    { user: 'User6', ticket: false },
    { user: 'User7', ticket: true },
    { user: 'User8', ticket: true },
    { user: 'User9', ticket: true },
    { user: 'User10', ticket: false },
    { user: 'User11', ticket: true }
  ];
  
  retirarColados(cola);
  