let url = 'https://fakestoreapi.com/products'

fetch(url)
    .then(function(res){
        return res.json()})
    .then(function(data){
        console.log("data del fetch",JSON.stringify(data,null,4 ))
       
        let arrayDeProductos = data

        let arrayDeCategorias = data.category

        let producto = document.querySelector(".productos")

        let todosProductos = []

        let todasCategorias = []

     //  for( let i= 0; i<arrayDeCategorias.length; i++){
          //todasCategorias += `<article class = "accesorios
           //                   </article>`
           for(let i=0; i<arrayDeProductos.length; i++){
            todosProductos += `<div class= "productos">
                                <img src=${arrayDeProductos[i].image} class="img_producto" alt='${arrayDeProductos[i].title}' />
                                <a href="detalle.html?id=${arrayDeProductos[i].id}" class="detallehome"> ${arrayDeProductos[i].title}</a>
                                <p>Precio: ${arrayDeProductos[i].price}  </p>
                                <p>Descripcion: ${arrayDeProductos[i].description}  </p> 
                            </div>`
                            
        }

        producto.innerHTML = todosProductos
        
    })

    .catch( function(e){
        console.log(e)
    })