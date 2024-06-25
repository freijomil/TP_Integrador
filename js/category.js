let categories = document.querySelectorAll(".indice a");

for (let i = 0; i < categories.length; i++) {
    categories[i].addEventListener("click", function(e) {
        e.preventDefault();

        let categoryText = this.innerText.toLowerCase();
        let apiUrl = '';

        if (categoryText.includes('hombres')) {
            apiUrl = "https://fakestoreapi.com/products/category/men's clothing";
        } else if (categoryText.includes('mujeres')) {
            apiUrl = "https://fakestoreapi.com/products/category/women's clothing";
        } else if (categoryText.includes('accesorios')) {
            apiUrl = 'https://fakestoreapi.com/products/category/jewelery';
        } else if (categoryText.includes('electronica')) {
            apiUrl = 'https://fakestoreapi.com/products/category/electronics';
        } 

        if (apiUrl) {
            fetch(apiUrl)
                .then(function(response) {
                    return response.json();
                })
                .then(function(data) {
                    let categoriesHTML = '';

                    for (let j = 0; j < data.length; j++) {
                        categoriesHTML += `<section class="Categoria">
                        <a href="producto.html?id=${data[j].id}" class="detallehome logo">${data[j].title}</a>
                            <img src="${data[j].image}" class="cat" alt="${data[j].title}" />
                            <p>Precio: ${data[j].price}</p>
                            <p>Descripción: ${data[j].description}</p>
                        </section>`;
                    }

                    document.querySelector('.Categoria').innerHTML = categoriesHTML;

                })
                .catch(function(error) {
                    console.error('Error fetching products:', error);
                });
        }
    });
}
