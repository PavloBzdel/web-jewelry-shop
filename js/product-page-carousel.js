( function(){

    const product = JSON.parse(localStorage.product);
    const slides = [
        `<div><img src="${product.imagesB}" alt="${product.brand}"></div>`,
        `<div><img src="${product.imagesB}" alt="${product.brand}"></div>`,
        `<div><img src="${product.imagesB}" alt="${product.brand}"></div>`
    ]; 

    let currentSlide = 0;

    let smallImg = document.querySelectorAll(".carousel__images__min");
    Array.prototype.slice.call(smallImg);

    function showCurrentSlide (){
        const slideContainer = document.querySelector("#carousel__images__main")
        slideContainer.innerHTML = slides[currentSlide];
    }
    function nextSlide(){
        currentSlide++;
        if (currentSlide >= slides.length){
            currentSlide = 0;
        }
        showCurrentSlide();
        for (let i = 0; i < smallImg.length; i++){
            smallImg[i].classList.remove("active-arrow");
            smallImg[currentSlide].classList.add("active-arrow");
        }
    }
    console.log(smallImg);
    function prevSlide(){
        currentSlide--;
        if( currentSlide < 0) {
            currentSlide = slides.length - 1;
        }
        showCurrentSlide();
        for(let k = 0; k < smallImg.length; k++){
            smallImg[k].classList.remove("active-arrow");
            smallImg[currentSlide].classList.add("active-arrow");
        }
    }
    document.querySelector(".next__arrow").addEventListener('click', nextSlide);
    document.querySelector(".prev__arrow").addEventListener('click', prevSlide);
    showCurrentSlide();
})()