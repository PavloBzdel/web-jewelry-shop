(function(){
    
    const product = JSON.parse(localStorage.product);
    
    const slides = [
        `<div><img src="${product.imagesB}" alt="${product.brand}"></div>`,
        `<div><img src="${product.imagesBS}" alt="${product.brand}"></div>`,
        `<div><img src="${product.imagesBT}" alt="${product.brand}"></div>`
    ]; 
    
    let smallImg = document.querySelectorAll(".carousel__images__min");
    Array.prototype.slice.call(smallImg);

    let bigImg = document.querySelectorAll(".carouse__img__page");
    Array.prototype.slice.call(bigImg);
    
    let currentSlide = 0;
    
    function showCurrentSlide() {
        const slideContainer = document.querySelector('#carousel__images__main');
        slideContainer.innerHTML = slides[currentSlide];
    }
    function nextSlide(){
        currentSlide++;
        if(currentSlide >= slides.length) currentSlide = 0;
        showCurrentSlide();
        for(let i =0 ; i < bigImg.length; i++){
            bigImg[i].classList.remove("active__img")
            bigImg[currentSlide].classList.add("active__img")
        }
        for(let i = 0; i < smallImg.length; i++){
            smallImg[i].classList.remove("active-arrow");
            smallImg[currentSlide].classList.add("active-arrow");
        }
    }
    function prevSlide(){
        currentSlide--;
        if(currentSlide < 0) currentSlide = slides.length - 1;
        showCurrentSlide();
        for(let i =0 ; i < bigImg.length; i++){
            bigImg[i].classList.remove("active__img")
            bigImg[currentSlide].classList.add("active__img")
        }
        for(let i = 0; i < smallImg.length; i++){
            smallImg[i].classList.remove("active-arrow");
            smallImg[currentSlide].classList.add("active-arrow");
        }
    }
    
    document.querySelector('.content__photo__max .next__arrow').addEventListener('click', nextSlide);
    document.querySelector('.content__photo__max .prev__arrow').addEventListener('click', prevSlide);
    showCurrentSlide();
})()
