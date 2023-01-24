//Objetos

//objeto que contiene lo que seria un producto en si
const producto = {
    nombreProducto: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
};

//acceder a las propiedades
//Esta es mas practica
console.log(producto.precio);//accedemos al precio

console.log(producto["precio"]);//otra forma de acceder

//Modificar objetos
//agregar nuevas propiedades
producto.imagen = 'imagen.jpg';

//Eliminar propiedades
delete producto.disponible;

console.log(producto);










