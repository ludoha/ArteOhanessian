/*Hola, Ludmila! Esta muy bien el desafio; se ejecuta bien el registro de los datos ingresados en el formulario. Igualmente, como vimos ayer en la clase, es buena idea colocar un id a cada input, y tomar de esa forma los datos en lugar de hacerlo como formulario.children[n].value, en caso de que cambie de alguna manera el html y la estructura del formulario, especificamente. Pero esta correcto asi tambien.

Respecto al valor para el calculo de cuotas, la funcion captura podria retornar el valor que obtiene del input:*/

/*function captura() {
    let montoIng = document.getElementById("calculo").value;
    return montoIng;
}

//y en la funcion ingreseElMonto()
/*podriamos asignar la ejecucion de captura() a monto (por ende asignamos el valor retornado), 
para ahi si, calcular el valor en cuotas:*/

/*function ingreseElMonto(cuotas) {

    let monto = captura();
    let precioEnCuotas = monto / cuotas;
    console.log("El precio en " + cuotas + " cuotas es de $" + precioEnCuotas.toFixed(2));
}*/

/*//Luego queda ejecutar 
ingreseElMonto() 
//con el numero de cuotas (podemos hacer console.log para ver el resultado):
    console.log(ingreseElMonto(3));
	console.log(ingreseElMonto(6));
	console.log(ingreseElMonto(8));
	console.log(ingreseElMonto(12));

//Otra opcion es evitar la funcion captura(), y asignar directamente a la variable monto el valor del input:

function ingreseElMonto(cuotas) {
    let monto = document.getElementById("calculo").value;
    let precioEnCuotas = monto / cuotas;
    console.log("El precio en " + cuotas + " cuotas es de $" + precioEnCuotas.toFixed(2));
}

/*on algun condicional podemos verificar que haya efectivamente un numero en el input, pero eso ya es en detalle. Espero te sea util.

Gracias por la entrega, buen trabajo. Cualquier duda o consulta, hablamos por el chat de la plataforma. Saludos, Ludmila!*/

//PRUEBAAAAAAAAAAAAAAAAA TUTOR ARRIBA DE ESTO

let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    e.preventDefault();
    let formulario = e.target;
    console.log(formulario.children[1].value);
    console.log(formulario.children[3].value);
    console.log(formulario.children[5].value);
    console.log(formulario.children[7].value);
    console.log(formulario.children[9].value);
    console.log(formulario.children[11].value);
    console.log(formulario.children[13].value);
    console.log("Datos para la obra a pedido");
}

/*


//Lista de Obras ya hechas disponibles, creando elementos desde objetos
const obrasDisponibles = [
    {id: 1, nombre: "Condor Andino", tecnica: "Microfibra sobre papel", precio: 7000, img: "../img3/condorandino.jpg"},
    {id: 2, nombre: "YUYA", tecnica: "Acuarela sobre papel", precio: 8000, img: "../img3/acuarelayuya.jpg"},
    {id: 3, nombre: "Torso", tecnica: "Yeso", precio: 50000, img: "../img3/torsoyeso.jpg"},
    {id: 4, nombre: "Mujer Felina", tecnica: "Microfibra sobre papel", precio: 7000, img: "../img3/mujerfelina.jpg"},
    {id: 5, nombre: "Dani", tecnica: "Oleo sobre tela", precio: 50000, img: "../img3/oleo.jpg"},
    {id: 6, nombre: "Terracota", tecnica: "Modelado a mano y horneado", precio: 50000, img: "../img3/terracota.jpg"},
    {id: 7, nombre: "Esteros del Iberá", tecnica: "Microfibra sobre papel", precio: 7000, img: "../img3/ibera.jpg"},
    {id: 8, nombre: "Campiña Francesa", tecnica: "Oleo sobre tela", precio: 60000, img: "../img3/campiña.jpg"},
    {id: 9, nombre: "Caos", tecnica: "Escultura de ensamblaje", precio: 40000, img: "../img3/ensamble.jpg"},
];
const guardarLocal = (clave, valor) => {localStorage.setItem(clave, valor)};
for (const articulo of obrasDisponibles) {
    guardarLocal(articulo.id, JSON.stringify(articulo));
}

for (const producto of obrasDisponibles) {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<h3> Pintura ${producto.id}</h3>
                            <img src=${producto.img} alt="">
                            <p> Técnica: ${producto.tecnica}</p>
                            <p> Nombre: ${producto.nombre}</p>
                            <b> $${producto.precio}</b>
                            <button id="comprar${producto.id}" class="boton-agregar">Comprar<i class fas-fa-shopping-cart"></button>`;
    document.body.appendChild(contenedor)
    const boton = document.getElementById(`agregar${producto.id}`)
    
    boton.addEventListener('click', () => {
        //esta funcion ejecuta el agregar el carrito con la id del producto
        agregarAlCarrito(producto.id)
        //
    })
}
const nombres = obrasDisponibles.map((listado) => listado.nombre);
console.log(nombres);*/





let stockProductos = [
    {id: 1, nombre: "Condor Andino", tecnica: "Microfibra sobre papel", cantidad: 1,  precio: 7000, img: "../img3/condorandino.jpg"},
    {id: 2, nombre: "YUYA", tecnica: "Acuarela sobre papel", cantidad: 1,  precio: 8000, img: "../img3/acuarelayuya.jpg"},
    {id: 3, nombre: "Torso", tecnica: "Yeso", cantidad: 1, precio: 50000, img: "../img3/torsoyeso.jpg"},
    {id: 4, nombre: "Mujer Felina", tecnica: "Microfibra sobre papel", cantidad: 1, precio: 7000, img: "../img3/mujerfelina.jpg"},
    {id: 5, nombre: "Dani", tecnica: "Oleo sobre tela", cantidad: 1, precio: 50000, img: "../img3/oleo.jpg"},
    {id: 6, nombre: "Terracota", tecnica: "Modelado a mano y horneado", cantidad: 1, precio: 50000, img: "../img3/terracota.jpg"},
    {id: 7, nombre: "Esteros del Iberá", tecnica: "Microfibra sobre papel", cantidad: 1, precio: 7000, img: "../img3/ibera.jpg"},
    {id: 8, nombre: "Campiña Francesa", tecnica: "Oleo sobre tela", cantidad: 1, precio: 60000, img: "../img3/campiña.jpg"},
    {id: 9, nombre: "Caos", tecnica: "Escultura de ensamblaje", cantidad: 1, precio: 40000, img: "../img3/ensamble.jpg"},
];

const contenedorProductos = document.getElementById('contenedor-productos')

const contenedorCarrito = document.getElementById('carrito-contenedor')

const botonVaciar = document.getElementById('vaciar-carrito')
//MODIFICAR LOS CONTADORES
const contadorCarrito = document.getElementById('contadorCarrito')


const cantidad = document.getElementById('cantidad')
const precioTotal = document.getElementById('precioTotal')
const cantidadTotal = document.getElementById('cantidadTotal')

let carrito = []

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})

botonVaciar.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarrito()
})

//AGREGAR AL HTML 

stockProductos.forEach ((producto) => {
    const div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML = `<h3>${producto.nombre}</h3>
                    <img src=${producto.img} alt= "">
                    <h3>${producto.tecnica}</h3>
                    <p class="precioProducto">Precio:$ ${producto.precio}</p>
                    <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>`
    contenedorProductos.appendChild(div)

    //INSERTAREL HTML EN EL DOM:
    const boton = document.getElementById(`agregar${producto.id}`)


    boton.addEventListener('click', () => {
        //Agrega Al carrito con la id del producto
        agregarAlCarrito(producto.id)
    })
})


//AGREGAR AL CARRITO
const agregarAlCarrito = (prodId) => {

    //Aumentar cantidad sinque se repita
    const existe = carrito.some (prod => prod.id === prodId)

    if (existe){ //ACTUALIZAMOS LA CANTIDAD
        const prod = carrito.map (prod => { 
            if (prod.id === prodId){
                prod.cantidad++
            }
        })
    } else { 
        const item = stockProductos.find((prod) => prod.id === prodId)
        //Una vez obtenida su ID, push para agregarlo al carrito
        carrito.push(item)
    }
    actualizarCarrito()
}

//Eliminar 
const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)

    const indice = carrito.indexOf(item) //Busca el elemento q yo le pase y nos devuelve su indice.

    carrito.splice(indice, 1) //Le pasamos el indice de mi elemento ITEM y borramos 
    // un elemento 
    actualizarCarrito() 
    console.log(carrito)
}

const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = "" //Cada vez que yo llame a actualizarCarrito, lo primero q hago
    //es borrar el nodo. Y despues recorro el array lo actualizo de nuevo y lo rellena con la info
    //actualizado
    // AGREGAR AL MODAL. Recorremos sobre el array de carrito.

    //Por cada producto creamos un div con esta estructura y un append al contenedorCarrito (el modal)
    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio:$${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `

        contenedorCarrito.appendChild(div)
        
        localStorage.setItem('carrito', JSON.stringify(carrito))
    })

    contadorCarrito.innerText = carrito.length // actualizamos con la longitud del carrito.
    console.log(carrito)
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0);
    //Por cada producto que recorro en mi carrito, al acumulador le suma la propiedad precio, con el acumulador
    //empezando en 0
}