
const productsCountEl = document.getElementById("products-count");


const addToCartBtns = document.querySelectorAll(".btn-cart");



for (let i = 0; i < addToCartBtns.length; i++) {
    addToCartBtns[i].addEventListener("click", function () {
      productsCountEl.textContent = +productsCountEl.textContent + 1;
    });
  };


// change like state
const likeBtns = document.querySelectorAll(".like");
likeBtns.forEach((item) => {
  item.addEventListener("click", function () {
    item.classList.toggle("liked");
  });
});


//modal 
const modal = document.querySelector(".modal");
const moreDetailsBtns = document.querySelectorAll(".btn-details");
const btnClose = document.querySelector(".btn-close");

function openModal() {
  modal.classList.add("show");
  modal.classList.remove("hide");
}
function closeModal() {
  modal.classList.add("hide");
  modal.classList.remove("show");
}

moreDetailsBtns.forEach((item) => {
  item.addEventListener("click", openModal);
});

btnClose.addEventListener("click", closeModal);


let a = true;
window.onscroll = function(){

const scrolling = window.scrollY; 
if(scrolling > 1350 && a == true ){
  openModal()
  a = false;
}else{
  
}

}






  $(".slider").slick({
    dots: true,
  })
    
    










