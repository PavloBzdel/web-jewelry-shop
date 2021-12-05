(async function(){

    let modal = document.getElementById("myModal__cart");
    let btn = document.getElementById("myBtnSecond");
    let span = document.getElementsByClassName("close__modal")[0];
    let form = document.getElementsByClassName("cancelBtn")[0];
  
    btn.onclick = function() {
    modal.style.display = "block";
    }
  
  
    span.onclick = function() {
    modal.style.display = "none";
    }
  
    window.onclick = function(event) {
      if (event.target == modal) {
      modal.style.display = "none";
      
      }
    }
    form.onclick = function() {
    modal.style.display = "none"; 
    } 

    const response = await fetch('products-list.json');
    const products = await response.json();

    function renderProduct(products){
        const productsContainer = document.querySelector(".modal__cart__container")
            for ( const product of products){
                productsContainer.innerHTML += `
                <div class="modal__cart__container">
                    <div class="modal__cart__border content__cart">
                        <div class="cart__img"><a href="/product-page.html" class="product__list__button"><img class="images__product__list" data-id="${product.id}" src="${product.imagesS}" alt="${product.brand}"></a></div>
                        <div class="cart__title">${product.accessorize}</div>
                        <div class="cart__text">${product.brand}</div>
                        <div class="cart__button"><div class="button__cart">${product.price}</div></div>
                    </div>
                </div>
                `
            }
        document.querySelectorAll('.button__card')
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