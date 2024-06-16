let categoria = queryStringObj.get("")
let category = document.querySelectorAll(".indice a");
console.log(category);

for (let i = 0; i < categories.length; i++) {
    categories[i].addEventListener("click", function(e)){
        
        
        
        fetch('https://fakestoreapi.com/products/category/${category}')
        
            for(let i=0; i<arrayDeJoyas.length; i++){
             categories += `<article class= "for">
                                <img src=${arrayDeJoyas[i].image} class="img_producto" alt='${arrayDeJoyas[i].title}' />
                                <a href="producto.html?id=${arrayDeJoyas[i].id}" class="detallehome"> ${arrayDeJoyas[i].title}</a>
                                <p>Precio: ${arrayDeJoyas[i].price}  </p>
                                <p>Descripcion: ${arrayDeJoyas[i].description}  </p> 
                            </article>`


    }

}