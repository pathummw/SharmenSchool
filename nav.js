var header = document.querySelector("header");

window.addEventListener("scroll",function(){
    
    header.classList.toggle("sticky",window.scrollY > 0);
})

window.onload = (event) => {
    header.classList.toggle("sticky",window.scrollY > 0);
  };
