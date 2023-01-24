const producto = {
    nombreProducto: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
};

const medidas = {
    peso: "12kg",
    medida: "1 pulgada"
};

// Spread operator para unir 2 objetos o mas
const nuevoProducto = {...producto, ...medidas};

console.log(nuevoProducto);