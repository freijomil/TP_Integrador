let urlJoyas ='https://fakestoreapi.com/products/category/jewelery'

fetch(urlJoyas)
    .then(function(res){
        return res.json()})
    .then(function(data){
        console.log("data del fetch",JSON.stringify(data,null,4 ))
       
        let arrayDeJoyas = data


        let producto = document.querySelector(".for")

        let todosJoyas = ""

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

     let urlElectronics ='https://fakestoreapi.com/products/category/electronics'

    fetch(urlElectronics)
        .then(function(res){
         return res.json()})
        .then(function(data){
        console.log("data del fetch",JSON.stringify(data,null,4 ))
       
        let arrayDeTech = data

        //let arrayDeCategorias = data.category

        let producto = document.querySelector(".if")

        let todosTech = ""

       // let todasCategorias = []

     //  for( let i= 0; i<arrayDeCategorias.length; i++){
          //todasCategorias += `<article class = "accesorios
           //                   </article>`
           for(let i=0; i<arrayDeTech.length; i++){
            todosTech += `<article class= "if">
                                <img src=${arrayDeTech[i].image} class="img_producto" alt='${arrayDeTech[i].title}' />
                                <a href="producto.html?id=${arrayDeTech[i].id}" class="detallehome"> ${arrayDeTech[i].title}</a>
                                <p>Precio: ${arrayDeTech[i].price}</p>
                                <p>Descripcion: ${arrayDeTech[i].description}</p> 
                                <button id="ver_mas">Ver mas</button>
                            </article>`
                            
        }

        producto.innerHTML = todosTech
        
    })

    .catch( function(e){
        console.log(e)
     })