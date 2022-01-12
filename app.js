const productsCountEl = document.getElementById("products-count");
const addToCartsBtns = document.querySelectorAll(".btn-cart");

for (let i = 0; i < addToCartsBtns.length; i++) {
    addToCartsBtns[i].addEventListener("click", function () {
      let prevProductCount = productsCountEl.textContent ;
      productsCountEl.textContent = +productsCountEl.textContent +1
      
    });
  };

 