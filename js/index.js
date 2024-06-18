let urlJoyas ='https://fakestoreapi.com/products/category/jewelery'

fetch(urlJoyas)
    .then(function(res){
        return res.json()})
    .then(function(data){
        console.log("data del fetch",JSON.stringify(data,null,4 ))
       
        let arrayDeJoyas = data

        //let arrayDeCategorias = data.category

        let producto = document.querySelector(".for")

        let todosJoyas = ""

       // let todasCategorias = []

     //  for( let i= 0; i<arrayDeCategorias.length; i++){
          //todasCategorias += `<article class = "accesorios
           //                   </article>`
           for(let i=0; i<arrayDeJoyas.length; i++){
            todosJoyas += `<article class= "for">
                                <img src=${arrayDeJoyas[i].image} class="img_producto" alt='${arrayDeJoyas[i].title}' />
                                <a href="producto.html?id=${arrayDeJoyas[i].id}" class="detallehome"> ${arrayDeJoyas[i].title}</a>
                                <p>Precio: ${arrayDeJoyas[i].price}</p>
                                <p>Descripcion: ${arrayDeJoyas[i].description}</p> 
                            </article>`
                            
        }

        producto.innerHTML = todosJoyas
        
    })

    .catch( function(e){
        console.log(e)
    })