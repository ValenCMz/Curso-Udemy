//array methods

const meses = new Array('Enero', 'Febrero','Marzo', 'Abril', 'Mayo');

//no existen los arrays asociativos, pero si de objetos

//arreglo con objetos
const carrito = [
    {nombre: 'Monitor 20 pulgadas', precio:500},
    {nombre: 'Mouse', precio:20},
    {nombre: 'Parlante', precio:700},
    {nombre: 'Tablet', precio:300},
    {nombre: 'TV', precio:500},
    {nombre: 'Audifonos', precio:1000},
    {nombre: 'Teclado', precio:50}, 
];

//forEach
meses.forEach(mes => {
    if(mes == 'Marzo'){
        console.log(mes);
    }
});

//includes (equivalente al codigo de arriba), funciona bien en arreglos planos
let resultado = meses.includes('Marzo'); //true o false
console.log(resultado);

//Some para arreglo de objetos
resultado = carrito.some(producto => producto.nombre === 'Tablet');//true o false

console.log(resultado);

//Reduce para sumar por ejemplo todo el precio del carrito
resultado = carrito.reduce((total, producto)=> total + producto.precio, 0);//aca al final va desde que valor inicia la suma  
console.log(resultado);

//filter (filtro con una condicion el carrito )
resultado = carrito.filter(producto=>producto.precio>500);
console.log(resultado);
