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