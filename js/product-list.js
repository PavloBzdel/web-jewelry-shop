(async function (){
    
    const response = await fetch('products-list.json');
    const products = await response.json();



    function renderProduct(products){
        const productsContainer = document.querySelector(".content__cards__container")
            for ( const product of products){
                
                if(product.quantity <= 0){
                    productsContainer.innerHTML += `
                <div class="content__cards__container">
                    <div class="content__card__border content__card">
                        <div class="card__img"><a href="/product-page.html" class="product__list__button"><img class="images__product__list" data-id="${product.id}" src="${product.imagesB}" alt="${product.brand}"></a></div>
                        <div class="card__title">${product.accessorize}</div>
                        <div class="card__text">${product.brand}</div>
                        <div class="card__button"><button class="button__card">${product.price}</button></div>
                    </div>
                </div>`
                }else{
                    productsContainer.innerHTML += `
                    <div class="content__cards__container">
                        <div class="content__card__border content__card">
                            <div class="card__img"><a href="/product-page.html"><img class="images__product__list" data-id="${product.id}" src="${product.imagesB}" alt="${product.brand}"></a></div>
                            <div class="card__title">${product.accessorize}</div>
                            <div class="card__text">${product.brand}</div>
                            <div class="card__button"><button class="button__card">${product.price}</button></div>
                        </div>
                    </div>`
                }
            }
        document.querySelectorAll('.product__list__button')
        .forEach( listButton => listButton.addEventListener('click', productListClick));
    }        
    function productListClick (ev) {
        const productListButton = ev.target;
        const productId = productListButton.dataset.id;
        const product = products.filter( product => product.id === productId)[0];
        localStorage.product = JSON.stringify(product);
      };

renderProduct(products);
})()
