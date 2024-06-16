let url = 'https://fakestoreapi.com/products/category'
fetch(url)
    .then(function(respuesta)) {
        return respuesta.json()
    }
