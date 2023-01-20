//Creacion de Strings
const producto = "Monitor de 20 pulgadas"; //String (mas utilizada)
const producto2 = String("30 pulgadas"); //Creamos la variable producto2 de tipo String a travez de un constructor
const producto3 = new String("50 pulgadas"); //Creamos un objeto de tipo String

//Metodos de Strings
const prod = "Monitor de 20";
const prod2 = "Monitor Hd";

console.log(prod.length);//el .lenght me dice cuantos caracteres tiene el String

//IndexOf sirve para decirnos en que posicion se encuentra un texto que estoy buscando (0 a ...)
console.log(prod.indexOf('de'));//si es -1 es que no lo encontro

//Includes (retorna true o false)
console.log(prod.includes('de'));

