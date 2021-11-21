(function () {

    const product = JSON.parse(localStorage.product);
    const productsContainer = document.querySelector(".product__content__container");

    productsContainer.innerHTML = `
    <div class="product__content__carousel">
        <div class="content__photo__max">
            <img id="carousel__images__main" src="${product.imagesB}" alt="${product.brand}">
        </div>
        <div class="content__photo__min">
            <img class="carousel__images__min" id="carousel__images__min__first" src="${product.imagesS}" alt="${product.brand}">
            <img class="carousel__images__min" src="${product.imagesS}" alt="${product.brand}">
            <img class="carousel__images__min" src="${product.imagesS}" alt="${product.brand}">
        </div>
    </div>
    <div class="product__content__information">
        <div class="content__information__container">
            <div class="information__title__container">
                <p class="information__title">${product.accessorize}  ${product.brand}</p>
            </div>
            <div class="information__subtitle__container">
                <p class="information__subtitle__first">${product.type}</p>
            </div>
            <div class="information__content__container">
                <p>${product.description}</p>
            </div>
            <div class="information__price__container">
                <p class="information__price">${product.price}</p>
            </div>
            <div class="information__button__container">
                <button class="button__card">купить</button>
                <button class="info__button information__button__white">добавить в корзину</button>
            </div>
        </div>
    </div>
`

})()