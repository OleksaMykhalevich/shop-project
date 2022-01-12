const productsCountEl = document.getElementById("products-count");
const addToCartsBtns = document.querySelectorAll(".btn-cart");

for (let i = 0; i < addToCartsBtns.length; i++) {
    addToCartsBtns[i].addEventListener("click", function () {
      let prevProductCount = productsCountEl.textContent ;
      productsCountEl.textContent = +prevProductCount +1
      
    });
  };

// let i = 0;
// function clicked(n) {
// console.log(i)
//     let productsCountEl = document.getElementById("products-count");
//     i = i + n;
//     productsCountEl.innerHTML = i;
// };
// window.onclick;


// const likeBTN = document.getElementsByClassName("small-btn");

// likeBTN.addEventListener("click" , function () {
//      likeBTN.style.backgroundColor = "red";
     


// document.querySelectorAll('.small-btn').forEach(function(e) {
//     e.addEventListener('click', function() {
     
//       this.style.backgroundColor = "#2c71b8";
//     })
//   });   