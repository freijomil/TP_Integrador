document.addEventListener("DOMContentLoaded", function () {
    let email = localStorage.getItem('email');
    console.log(email);

    if (email !== 'undefined' && email !== null) {
        let loginLink = document.querySelector('.login-link');
    }

    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    let contenedor = document.querySelector('.carrito-container');

    if (cartItems.length === 0) {
        document.querySelector('.productos_carrito').innerHTML += "Su carrito está vacío";
    } else {
        mostrarCarrito(cartItems, contenedor);
    }
});

function mostrarCarrito(cartItems, contenedor) {
    let contenidoHTML = '';
    let productosCargados = 0;

    for (let i = 0; i < cartItems.length; i++) {
        let id = cartItems[i];
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(function(res) {
                if (!res.ok) {
                    throw new Error('Network response was not ok ' + res.statusText);
                }
                return res.text();  
            })
            .then(function(text) {
                console.log(`Response for product ${id}:`, text);
                if (text) {
                    return JSON.parse(text); 
                } else {
                    throw new Error('Response was empty');
                }
            })
            .then(function(product) {
                contenidoHTML += `
                    <div class="productoa">
                        <div class="foto-producto">
                            <img src="${product.image}" class="imgcarrito" alt="${product.title}">
                        </div>
                        <div class="detalle">
                            <p>Nombre: ${product.title}</p>
                            <p>Precio: $${product.price}</p>
                        </div>
                    </div>
                `;
                productosCargados++;

                if (productosCargados === cartItems.length) {
                    contenidoHTML += `
                        <button class="finalizar-compra" onclick="finalizarCompra()">Finalizar Compra</button>
                    `;
                    contenedor.innerHTML = contenidoHTML;
                }
            })
            .catch(function(e) {
                console.error('Error al seleccionar el producto:', e);
                productosCargados++;
                if (productosCargados === cartItems.length) {
                    contenidoHTML += `
                        <button class="finalizar-compra" onclick="finalizarCompra()">Finalizar Compra</button>
                    `;
                    contenedor.innerHTML = contenidoHTML;
                }
            });
    }
}

function finalizarCompra() {
    localStorage.removeItem('cart');
    alert('Gracias por su compra');
    location.href = 'index.html';
}