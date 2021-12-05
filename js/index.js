(function(){
    const menu = document.querySelector(".nav__burger__menu");
    const menuItems = document.querySelectorAll(".menuItem");
    const hamburger= document.querySelector(".hamburger");
    const closeIcon= document.querySelector(".closeIcon");
    const menuIcon = document.querySelector(".menuIcon");
    
    function toggleMenu() {
      if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
      } else {
        menu.classList.add("showMenu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
      }
    }
    
    hamburger.addEventListener("click", toggleMenu);
    
    menuItems.forEach( 
      function(menuItem) { 
        menuItem.addEventListener("click", toggleMenu);
      }
    )

  let modal = document.getElementById("myModal");
  let btn = document.getElementById("myBtn");
  let span = document.getElementsByClassName("close__modal__form")[0];


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

  let form = document.getElementById("cancel__button");

  form.onclick = function() {
    modal.style.display = "none"; 
    } 
})()
