const producto = {
    nombreProducto: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
};

//seleccionar una propiedad y crear una variable
const precioProducto = producto.precio;
console.log(precioProducto);

//Destructuring (quitar algo de una estructura, por ejemplo sacar el precio de la estructura producto)
const {precio} = producto;//creo la variable y extraigo el valor en un solo paso
//puedo poner varios en una sola linea, separando por ","

console.log(precio);
