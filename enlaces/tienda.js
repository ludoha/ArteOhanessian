//Ludmila Ohanessian 
//Entrega Proyecto Final
//Comisión: 30340
const contenedorProductos = document.getElementById('contenedor-productos');
const contenedorCarrito = document.getElementById('carrito-contenedor');
const botonVaciar = document.getElementById('vaciar-carrito');
const contadorCarrito = document.getElementById('contadorCarrito');
const cantidad = document.getElementById('cantidad');
const precioTotal = document.getElementById('precioTotal');
const cantidadTotal = document.getElementById('cantidadTotal');


let carrito = JSON.parse(localStorage.getItem('carrito')) || [];


//Boton VACIAR carrito
botonVaciar.addEventListener('click', () => {
    carrito.length = 0 
    //Libreria Toastify para anunciar que elimino todo del carrito!!
    Toastify({
        text:"Usted vacio todo el carrito!",
        duration: 3000,
    }).showToast()
    actualizarCarrito()
})

//boton Comprar
botonComprar.addEventListener('click', () => {
    console.log(precioTotal)
    //Seet Alert para anunciar/confirmar que quiere seguir los pasos de compra
    swal({
        title: "Compra en proceso",
        text: "Sigue los pasos de pago",
        icon: "success",
        button: "OK",
        background: 'width'
    })
})


//Agregar al DOM con json (stock.json) y fetch 
let stockProductos = []

fetch('./data.json')
    .then((res) => res.json())
    .then(stock => {
        stockProductos = stock;

    stockProductos.forEach((producto)=> {
    const div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML = `<h2>${producto.nombre}</h2>
                    <img src=${producto.img} alt= "">
                    <h3>${producto.tecnica}</h3>
                    <h4>${producto.tipo}</h4>
                    <p class="precioProducto">Precio: $ ${producto.precio}</p>
                    <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>`
    contenedorProductos.appendChild(div)

    const boton = document.getElementById(`agregar${producto.id}`)

    //Agregar al carrito
    boton.addEventListener('click', () => {
        //Agrega Al carrito con la id del producto
        agregarAlCarrito(producto.id)
    })
})
})


// FILTRO de productos con select
let miFiltro = document.getElementById("filtro");
miFiltro.addEventListener("change", filtrado);

function filtrado(){
    let productosFiltrados = stockProductos;
    if(miFiltro.value !== 'all')
    productosFiltrados = stockProductos.filter(
        (producto) => producto.tipo === miFiltro.value 
    );
    mostrar(productosFiltrados);
} 
function mostrar(listadoProductos) {
    console.log(listadoProductos);
    contenedorProductos.innerHTML = "";
    listadoProductos.forEach((producto) => {
        contenedorProductos.innerHTML += `
                        <div class='producto'>
                        <h2>${producto.nombre}</h2>
                        <img src=${producto.img} alt= "">
                        <h3>${producto.tecnica}</h3>
                        <h4>${producto.tipo}</h4>
                        <p class="precioProducto">Precio:$ ${producto.precio}</p>
                        <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
                        </div>`
         const boton = document.getElementById(`agregar${producto.id}`)

    //Agregar al carrito
    boton.addEventListener('click', () => {
        //Agrega Al carrito con la id del producto
        agregarAlCarrito(producto.id)
    })
   
    });
}


//Agregar al carrito aumentando la cantidad sin que se repita
const agregarAlCarrito = (prodId) => {
     //Aumentar cantidad sin repetir en la lista de productos
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
//Libreria Toastify para anunciar que se agrego al carrito!!
Toastify({
    text:"Se agrego al carrito!",
    duration: 3000,
}).showToast()
}

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
        <button onclick="eliminarDelCarrito(${prod.id})" class="botonEliminar"><i class="fas fa-trash-alt"></i></button>
        ` 
        contenedorCarrito.appendChild(div) 
        
        localStorage.setItem('carrito', JSON.stringify(carrito))
    })
    contadorCarrito.innerText = carrito.length // actualizamos con la longitud del carrito.
    console.log(carrito)
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
    //Por cada producto que recorro en mi carrito, al acumulador le suma la propiedad precio, con el acumulador
    //empezando en 0
}

//Formulario de Obra de arte por encargo/pedido 

let miFormulario = document.getElementById("contact_form");
miFormulario.addEventListener("submit", validarFormulario);
//Obtener datos 
function validarFormulario(e){
    e.preventDefault();
    let formulario = e.target;
    console.log("Datos para la obra a pedido:");
    console.log("Nombre y Apellido:");
    console.log(formulario.children[1].value);
    console.log("Teléfono:");
    console.log(formulario.children[3].value);
    console.log("Mail:");
    console.log(formulario.children[5].value);
    console.log("Tematica:");
    console.log(formulario.children[7].value);
    console.log("Medida de la obra:");
    console.log(formulario.children[9].value);
    console.log("Técnica:");
    console.log(formulario.children[11].value);

    //Sweet Alert para avisar que los datos fueron enviados correctamente!
    swal({
        title: "Sus datos fueron enviados!",
        text: "En breve nos contactaremos con usted.",
        icon: "success",
        button: "OK",
        background: 'width'
    })
}
//Envio de mail automático al enviar la información para encargar una obra
function SendMail() {
    var params = { 
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        message1 : document.getElementById("tipo").value,
        message2 : document.getElementById("medida").value,
        message3 : document.getElementById("tecnica").value
    }
    emailjs.send("service_kjyspr4","template_8gtnnz5", params).then(function (res) {
        console.log("Success! " + res.status);
    })
}

//Animación libreria ScrollReveal efectos en tienda
window.sr = ScrollReveal()
    sr.reveal('.srollEncabezado', {
        origin: 'left',
        duration: 2000,
        distance: '110%'
    });       
    sr.reveal('.encabezadoScroll', {
        origin: 'top',
        intervalo: 90,
        duration: 5000,
        distance: '20%'
    });
    sr.reveal('.scrollForm', {
        origin: 'top',
        intervalo: 200,
        duration: 2000,
        distance: '20%'
    });
    sr.reveal('.containerScroll', {
        origin: 'top',
        duration: 1000,
        distance: '20%'
    });
