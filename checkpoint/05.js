/* 5️⃣ ***** EJERCICIO 5 ***** - ordenarInstrumentos 5️⃣

Antes de cada cirujía el médico necesita tener una lista con todos los instrumentos quirúrjicos. Te pedimos que
crees una función que nos ayude a ordenar estos instrumentos. La función recibirá un arreglo de instrumentos.
Tendrás que crear un algoritmo de ordenamiento que permita ordenar todos los instrumentos de forma alfabética
y ascendente. Es decir, de la A a la Z.

📝 EJEMPLO 📝
(INPUT) ➡ ['bisturí', 'espéculos', 'abrebocas', 'diapasones']
(OUTPUT) ➡ ['abrebocas', 'bisturí', 'diapasones', 'espéculos']

REQUISITOS
🟢 Si lo que se recibe por parámetro no es un arreglo la función debe devolver un string que diga: "Debe recibir un array de strings".
🟢 En caso de recibir un array vacío, la función debe retornar "El array no debe estar vacio".
⛔️ No puedes utilizar el método SORT.
*/

function ordenarInstrumentos(instrumentos) {
  // Tu código aquí:
  if(!Array.isArray(instrumentos)) return "Debe recibir un array de strings";
  if(instrumentos.length === 0) return "El array no debe estar vacio"; 
    for (let i = 0; i < instrumentos.length; i++) {
      if(!Array.isArray(instrumentos)) return "Debe recibir un array de strings";
      let x=i
      for (let j = i+1; j < instrumentos.length; j++) {
        if (instrumentos[j].charCodeAt(0) < instrumentos[x].charCodeAt(0)) x = j;
      }
      if(i !== x){
        let aux=instrumentos[i];
        instrumentos[i] = instrumentos[x];
        instrumentos[x] = aux;
      }
    }
    return instrumentos;
}


// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
  ordenarInstrumentos,
};
