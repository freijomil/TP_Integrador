let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get("id");

let url = `https://fakestoreapi.com/products/${id}`;

fetch(url)
    .then(function(res) {
        if (!res.ok) {
            throw new Error('Network response was not ok ' + res.statusText);
        }
        return res.json();
    })
    .then(function(data) {
        console.log("data del fetch", JSON.stringify(data, null, 4));

        let detallesProducto = data;

        let productoTitulo = document.querySelector(".producto_titulo");
        let productoPrecioAgregar = document.querySelector(".producto_precio_agregar");
        let descripcion = document.querySelector(".descripcion");
        let productoImagen = document.querySelector(".producto_imagen");

        productoTitulo.innerText += detallesProducto.title;
        productoPrecioAgregar.innerText += detallesProducto.price;
        descripcion.innerText += detallesProducto.description;
        productoImagen.src = detallesProducto.image;

        let agregarAlCarrito = document.querySelector(".agregar_al_carrito");
        agregarAlCarrito.addEventListener("click", function() {
            addToCart(detallesProducto.id);
            alert("Producto agregado al carrito.");
        });
    })
    .catch(function(error) {
        console.error('Hubo un problema con la solicitud Fetch:', error);
    });

function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.indexOf(productId) === -1) { // Check if productId is not in cart
        cart.push(productId);
        localStorage.setItem('cart', JSON.stringify(cart));
    }
}