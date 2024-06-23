let queryString = location.search

let queryStringObj = new URLSearchParams(queryString)

let id = queryStringObj.get("id")

let url = `https://fakestoreapi.com/products/${id}`

fetch(url)
.then(function(res){
    return res.json()
})
.then(function(data){
    console.log("data del fetch",JSON.stringify(data,null,4 ));

    let detallesProducto = data

    let productoTitulo = document.querySelector(".producto_titulo")
    let productoPrecioAgregar = document.querySelector(".producto_precio_agregar")
    let descripcion = document.querySelector(".descripcion")
    let productoImagen = document.querySelector(".producto_imagen")

    productoTitulo.innerText += detallesProducto.title
    productoPrecioAgregar.innerText += detallesProducto.price
    descripcion.innerText += detallesProducto.description
    productoImagen.src =  detallesProducto.image
})

let agregarAlCarrito = document.querySelector(".agregar_al_carrito");
        agregarAlCarrito.addEventListener("click", function() {
            addToCart(detallesProducto);
            alert("Producto agregado al carrito.");
        });

function addToCart(producto) {
    var cart = JSON.parse(localStorage.getItem('cart')) || [];

    var productoEnCarrito = cart.find(function(item) {
        return item.id === producto.id;
    });
    if (!productoEnCarrito) {
        cart.push(producto);
        localStorage.setItem('cart', JSON.stringify(cart));
    }
}