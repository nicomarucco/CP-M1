// 2️⃣ ***** EJERCICIO 2 ***** - BuscandoError() 2️⃣
// En el hospital unas de las maquinas empezó a fallar y lanzan un error por pantalla, debemos identificar cuáles tienen un patron de inicio y cierre:
// Necesitamos que determines si el error esta balanceado en cuanto a paréntesis, corchetes y llaves.
// La función debe devolver true si los paréntesis, corchetes y llaves están balanceados y false en caso contrario.
// Se considera que los paréntesis, corchetes y llaves están balanceados si para cada uno de estos símbolos de apertura hay un símbolo de cierre correspondiente y los símbolos están correctamente anidados.

// Ejemplo:

// Input: "{[()()]}"
// Output: true

// Input: "([)]"
// Output: false
//
//
// REQUISITOS:
//  🟢 Respetar el principio de LIFO que tienen los stacks
//  🟢 Retornar true o false, dependiendo de lo que corresponda.
//  🟢 Investigar que hace el metodo charAt, les puede servir

function BuscandoError(expresion) {
  // Tu código aquí
  let pila = [];
  const x = {
    ')' : '(',
    ']' : '[',
    '}' : '{'
  };

  for (let i = 0; i < expresion.length; i++) {
    let caracter = expresion[i];

    if (caracter === '(' || caracter === '[' || caracter === '{') pila.push(caracter)    //si me encuentro un caracter de apertura lo pusheo a mi pila
    else if (caracter === ')' || caracter === ']' || caracter === '}') {                 //si me encuentro un caracter de cierre
      if (pila.length === 0) return false;                                               //y este nunca fue abierto es false

      let apertura = pila.pop();                                                         //"agarro el ultimo elemento de la pula"
      if (x[caracter] !== apertura) return false;                                        // lo comparo, is no coincide con su par es falso      
    }
  }

  return pila.length === 0;                                                              //si hice pop de toda la pila y no me retorno false esta balanceado

}

// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
  BuscandoError,
};
