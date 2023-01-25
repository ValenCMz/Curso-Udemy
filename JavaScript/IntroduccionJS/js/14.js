//Arrays (sirven para agrupar elementos del mismo tipo o relacionados, puede tener varios tipos igual)
//Los arrays van del 0 al tamanio maximo del array

//declaraciond e un array vacio
const numerosVacio = [];

const numeros = [2,4,5,6];

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