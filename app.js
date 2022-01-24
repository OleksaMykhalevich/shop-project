
const productsCountEl = document.getElementById("products-count");


const addToCartBtns = document.querySelectorAll(".btn-cart");



for (let i = 0; i < addToCartBtns.length; i++) {
    addToCartBtns[i].addEventListener("click", function () {
      productsCountEl.textContent = +productsCountEl.textContent + +quantityInput[i].value;
      quantityInput[1]=value = 1;
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
    


// for (let i = 0; i < quantityInput.length; i++) {
//     let currentValue = +quantityInput[i].value;
//     toggleButtonState(currentValue, incrementBtns[i], decrementBtns[i]);
// }

// function toggleButtonState(count, incrementBtns, decrementBtns) {
//   decrementBtns.disabled = count <= minCount;
//   incrementBtns.disabled = count >= maxCount;
// }

// for(let i = 0; i < incrementBtns.length; i++) {
//     incrementBtns[i].addEventListener("click", function () {
//         let currentValue = +quantityInput[i].value;
//         let nextValue = currentValue + 1;
//         quantityInput[i].value = nextValue;
        
//         toggleButtonState(nextValue, incrementBtns[i], decrementBtns[i]);
//         });
// }

// for(let i = 0; i < decrementBtns.length; i++) {
//     decrementBtns[i].addEventListener("click", function () {
//         let currentValue = +quantityInput[i].value;
//         let nextValue = currentValue - 1;
//         quantityInput[i].value = nextValue;
      
//         toggleButtonState(nextValue, incrementBtns[i], decrementBtns[i]);
//       });
// }
let decrementBtns = document.querySelectorAll(".decrement-button");
let incrementBtns = document.querySelectorAll(".increment-button");
let quantityInput = document.querySelectorAll(".product-quantity input");
// let minCount = 1;
// let maxCount = 5;
function Counter(incrementBtn, decrementBtn, inputField, minCount = 1, maxCount = 5) {
  this.domRefs = {
      incrementBtn,
      decrementBtn,
      inputField,
  };

  this.toggleButtonState = function() {
      let count = this.domRefs.inputField.value;
      this.domRefs.decrementBtn.disabled = count <= minCount;
      this.domRefs.incrementBtn.disabled = count >= maxCount;
  };

  this.toggleButtonState();

  this.increment = function () {
      this.domRefs.inputField.value = +this.domRefs.inputField.value + 1;
      this.toggleButtonState();
    };
    this.decrement = function () {
      this.domRefs.inputField.value = +this.domRefs.inputField.value - 1;
      this.toggleButtonState();
    };

  this.domRefs.incrementBtn.addEventListener("click", this.increment.bind(this));

  this.domRefs.decrementBtn.addEventListener("click", this.decrement.bind(this));
}

let counter1;
for(i = 0; i < quantityInput.length; i++) {
    counter1 = new Counter(incrementBtns[i],decrementBtns[i],quantityInput[i]);
}

