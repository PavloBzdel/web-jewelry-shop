(function () {

    const product = JSON.parse(localStorage.product);
    const productsContainer = document.querySelector(".product__content__container");

    productsContainer.innerHTML = `
    <div class="product__content__carousel">
        <div class="content__photo__max">
            
            <div class="content__big__arrow prev__arrow">
                <svg width="14" height="26" viewBox="0 0 14 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 2L1.5 13L12.5 24" stroke="#464C5C" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"></path></svg>
                <path d="M12.5 2L1.5 13L12.5 24" stroke="#464C5C" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"></path></svg>
            </div>   
            <div>
                <img class="carouse__img__page active__img" id="carousel__images__main" src="${product.imagesB}" alt="${product.brand}">
                <img class="carouse__img__page" src="${product.imagesBS}" alt="${product.brand}">
                <img class="carouse__img__page" src="${product.imagesBT}" alt="${product.brand}">
            </div>
            <div class="content__big__arrow next__arrow">
                <svg width="14" height="26" viewBox="0 0 14 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 24L12.5 13L1.5 2" stroke="#464C5C" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"></path></svg>
                <path d="M1.5 24L12.5 13L1.5 2" stroke="#464C5C" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"></path></svg>
            </div>
        
        </div>
        <div class="content__photo__min">
            <img class="carousel__images__min active-arrow" id="carousel__images__min__first" src="${product.imagesS}" alt="${product.brand}">
            <img class="carousel__images__min" src="${product.imagesSS}" alt="${product.brand}">
            <img class="carousel__images__min" src="${product.imagesST}" alt="${product.brand}">
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