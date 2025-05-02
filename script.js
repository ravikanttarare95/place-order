function toggleLightMode() {
  const lightModeIcon = document.getElementById("light-mode-icon");
  if (lightModeIcon.src.includes("light-mode.png")) {
    lightModeIcon.src = "./image/dark-mode.png";
  } else if (lightModeIcon.src.includes("dark-mode.png")) {
    lightModeIcon.src = "./image/light-mode.png";
  }
}
const productImage1 = document.getElementById("shoe-1");
const productImage2 = document.getElementById("shoe-2");
const productImage3 = document.getElementById("shoe-3");
const productImage4 = document.getElementById("shoe-4");

function showProductImage1(imageSrc) {
  const productMainImage = document.getElementById("product-main-img");

  if (productImage1.src.includes("shoe-1.jpg")) {
    productMainImage.src = "./image/shoe-1.jpg";
  } else if (productImage1.src.includes("mobile-1.jpg")) {
    productMainImage.src = "./image/mobile-1.jpg";
  } else if (productImage1.src.includes("camera-1.png")) {
    productMainImage.src = "./image/camera-1.png";
  }

  //   productMainImage.src = "./image/shoe-1.jpg";
}
function showProductImage2(imageSrc) {
  const productMainImage = document.getElementById("product-main-img");
  if (productImage2.src.includes("shoe-2.jpg")) {
    productMainImage.src = "./image/shoe-2.jpg";
  } else if (productImage2.src.includes("mobile-2.png")) {
    productMainImage.src = "./image/mobile-2.png";
  } else if (productImage2.src.includes("camera-2.png")) {
    productMainImage.src = "./image/camera-2.png";
  }
}
function showProductImage3(imageSrc) {
  const productMainImage = document.getElementById("product-main-img");
  if (productImage3.src.includes("shoe-3.jpg")) {
    productMainImage.src = "./image/shoe-3.jpg";
  } else if (productImage3.src.includes("mobile-3.jpeg")) {
    productMainImage.src = "./image/mobile-3.jpeg";
  } else if (productImage3.src.includes("camera-3.png")) {
    productMainImage.src = "./image/camera-3.png";
  }
}
function showProductImage4(imageSrc) {
  const productMainImage = document.getElementById("product-main-img");
  if (productImage4.src.includes("shoe-4.jpg")) {
    productMainImage.src = "./image/shoe-4.jpg";
  } else if (productImage4.src.includes("mobile-4.png")) {
    productMainImage.src = "./image/mobile-4.png";
  } else if (productImage4.src.includes("camera-4.png")) {
    productMainImage.src = "./image/camera-4.png";
  }
}

function nextProductImage() {
  const productMainImage = document.getElementById("product-main-img");
  const productImage1 = document.getElementById("shoe-1");
  const productImage2 = document.getElementById("shoe-2");
  const productImage3 = document.getElementById("shoe-3");
  const productImage4 = document.getElementById("shoe-4");
  if (
    productMainImage.src.includes("shoe-1.jpg") ||
    productMainImage.src.includes("shoe-2.jpg") ||
    productMainImage.src.includes("shoe-3.jpg") ||
    productMainImage.src.includes("shoe-4.jpg")
  ) {
    productMainImage.src = "./image/mobile-1.jpg";
    productImage1.src = "./image/mobile-1.jpg";
    productImage2.src = "./image/mobile-2.png";
    productImage3.src = "./image/mobile-3.jpeg";
    productImage4.src = "./image/mobile-4.png";
  } else if (
    productMainImage.src.includes("mobile-1.jpg") ||
    productMainImage.src.includes("mobile-2.png") ||
    productMainImage.src.includes("mobile-3.jpeg") ||
    productMainImage.src.includes("mobile-4.png")
  ) {
    productMainImage.src = "./image/camera-1.png";
    productImage1.src = "./image/camera-1.png";
    productImage2.src = "./image/camera-2.png";
    productImage3.src = "./image/camera-3.png";
    productImage4.src = "./image/camera-4.png";
  }
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

// function submitRating() {
//   const ratingValue = ratingNumber.innerText; // Get the current rating value
//   if (ratingValue === "0.0") {
//     alert("Please select a rating before submitting.");
//   } else {
//     alert("Thank you for your feedback! Your rating is: " + ratingValue);
//     // Reset the stars and rating number after submission
//     starImages1.src = "./image/star.png";
//     starImages2.src = "./image/star.png";
//     starImages3.src = "./image/star.png";
//     starImages4.src = "./image/star.png";
//     starImages5.src = "./image/star.png";
//     ratingNumber.innerText = "0.0";
//     ratingNumber.style.color = "#737171";
//   }
// }

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
