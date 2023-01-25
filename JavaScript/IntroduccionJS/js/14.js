//Arrays (sirven para agrupar elementos del mismo tipo o relacionados, puede tener varios tipos igual)
//Los arrays van del 0 al tamanio maximo del array

//declaraciond e un array vacio
const numerosVacio = [];

const numeros = [2,4,5,6,5];

console.log(numeros);

// para imprimir un array en forma de tabla, con esto tenemos una mejor visualizacion
console.table(numeros);

//esta forma de crearla con constructor no es tan utilizada
const meses = new Array('Enero', 'Febrero', 'Abril');

console.table(meses);

//accedemos al valor en esa posicion
console.log(numeros[3]); 

//Conocer el tamanio de un arreglo
console.log(numeros.length);

// recorrer todo un array

console.log("recorriendo foreach")
numeros.forEach(numero => {
    console.log(numero);
});

console.log("recorriendo for comun")
for(let i = 0; i<numeros.length;i++){
    console.log(numeros[i]);
}

//agregar al final del array (desventaja: modificar el array original)
//no muy comun, ya que es necesario saber cuanto mide el array
numeros[5] = 60;

console.log(numeros);

//Se usa mas, pero no es muy recomendado modificar el array original
numeros.push(70);
console.log(numeros);

//agregar el -10 al array pero lo agrega al inicio
numeros.unshift(-10);
console.log(numeros);


//eliminar elementos de un array (desventaja: modificar el array original)

// console.log(meses);
// //elimina el ultimo elemento del array
// meses.pop();
// console.log(meses);
// //elimina el primer elemento del array
// meses.shift();
// console.log(meses);
//se coloca la posicion donde queremos q borre y cuantos a partir de ahi
meses.splice(1, 1);
console.log(meses);

//Rest Operator o Spread Operator

//lo mejor es crear un nuevo arreglo y copiarlo con Rest Operator, y tambien le agregamos mayo al final (simula el push)
const nuevoArregloPush = [...meses, 'Mayo'];
const nuevoArregloUnshift = ['Mayo',...meses]; //simula el Unsifht
console.log(nuevoArreglo);
