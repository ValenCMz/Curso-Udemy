//El use strict es para que ejecutar el codigo de js de forma estricta para q se sigan las buenas practicas
"use strict";

let producto = {
    nombreProducto: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
};

//sirve para no poder agregarle y eliminar mas valores y no sea modificado
Object.freeze(producto);
//para saber si el objeto esta frezeado o no
console.log(Object.isFrozen(producto));

//sirve para no poder agregarle y eliminar mas valores, pero si modificar los existentes
Object.seal(producto);

