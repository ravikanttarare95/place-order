const productMainImage = document.getElementById("product-main-img");

function changeProductImage1(imageSrc) {
  productMainImage.src = "./image/shoe-1.jpg";
}
function changeProductImage2(imageSrc) {
  productMainImage.src = "./image/shoe-2.jpg";
}
function changeProductImage3(imageSrc) {
  productMainImage.src = "./image/shoe-3.jpg";
}
function changeProductImage4(imageSrc) {
  productMainImage.src = "./image/shoe-4.jpg";
}

const starImages1 = document.getElementById("star-1-img");
const starImages2 = document.getElementById("star-2-img");
const starImages3 = document.getElementById("star-3-img");
const starImages4 = document.getElementById("star-4-img");
const starImages5 = document.getElementById("star-5-img");
const ratingNumber = document.getElementById("rating-number");
const ratingValue = ratingNumber.innerText;

function glowstar1() {
  starImages1.src = "./image/star(5).png";
  starImages2.src = "./image/star.png";
  starImages3.src = "./image/star.png";
  starImages4.src = "./image/star.png";
  starImages5.src = "./image/star.png";
  ratingNumber.innerText = "1.0";
  ratingNumber.style.color = "#FF0000";
}

function glowstar2() {
  starImages1.src = "./image/star(5).png";
  starImages2.src = "./image/star(5).png";
  starImages3.src = "./image/star.png";
  starImages4.src = "./image/star.png";
  starImages5.src = "./image/star.png";
  ratingNumber.innerText = "2.0";
  ratingNumber.style.color = "#FF0000";
}

function glowstar3() {
  starImages1.src = "./image/star(5).png";
  starImages2.src = "./image/star(5).png";
  starImages3.src = "./image/star(5).png";
  starImages4.src = "./image/star.png";
  starImages5.src = "./image/star.png";
  ratingNumber.innerText = "3.0";
  ratingNumber.style.color = "#ff5c33";
}
function glowstar4() {
  starImages1.src = "./image/star(5).png";
  starImages2.src = "./image/star(5).png";
  starImages3.src = "./image/star(5).png";
  starImages4.src = "./image/star(5).png";
  starImages5.src = "./image/star.png";
  ratingNumber.innerText = "4.0";
  ratingNumber.style.color = "#009933";
}

function glowstar5() {
  starImages1.src = "./image/star(5).png";
  starImages2.src = "./image/star(5).png";
  starImages3.src = "./image/star(5).png";
  starImages4.src = "./image/star(5).png";
  starImages5.src = "./image/star(5).png";
  ratingNumber.innerText = "5.0";
  ratingNumber.style.color = "#009933";
}

function submitRating() {
  const ratingValue = ratingNumber.innerText; // Get the current rating value
  if (ratingValue === "0.0") {
    alert("Please select a rating before submitting.");
  } else {
    alert("Thank you for your feedback! Your rating is: " + ratingValue);
    // Reset the stars and rating number after submission
    starImages1.src = "./image/star.png";
    starImages2.src = "./image/star.png";
    starImages3.src = "./image/star.png";
    starImages4.src = "./image/star.png";
    starImages5.src = "./image/star.png";
    ratingNumber.innerText = "0.0";
    ratingNumber.style.color = "#737171";
  }
}

function placeorder() {
  // const ratingValue = parseFloat(ratingNumber.innerText);
  // if (ratingValue === "1.0" || ratingValue === "2.0" || ratingValue === "3.0 || ratingValue === "4.0" || ratingValue === "5.0")
  // {
  //     alert("Please submit the rating before you place order.");
  // }
  // else
  {
    const quantity = document.getElementById("quantity-text").innerText;
    const price = document.getElementById("price").innerText;
    alert(
      "Your order has been placed successfully!\nQuantity: " +
        quantity +
        "\nTotal Price: ₹" +
        price
    );
  }
}
const QuantityText = document.getElementById("quantity-text");
const productPrice = document.getElementById("price");
function inc() {
  if (parseInt(QuantityText.innerText) == 10) {
    alert("Quantity can not be greater than 10");
    return;
  }
  QuantityText.innerText = parseInt(QuantityText.innerText) + 1;
  pricemultiply();
}
function dec() {
  if (parseInt(QuantityText.innerText) == 1) {
    alert("Quantity can not be less than 1");
    return;
  }
  QuantityText.innerText = parseInt(QuantityText.innerText) - 1;
  pricedevide();
}

function pricemultiply() {
  productPrice.innerText = parseInt(productPrice.innerText) * 2;
}

function pricedevide() {
  productPrice.innerText = parseInt(productPrice.innerText) / 2;
}
