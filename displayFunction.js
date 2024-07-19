import { item_adding_to_the_cart } from "./1.js";
import { modal_content } from "./1.js";
//import { shoppingCart } from "./1.js";
import { card_container } from "./1.js";
import { SaveCartInLocalStorage } from "./utilizeFunction.js";
export let createItem = (product) => {
  let { image, title, price } = product;
  // creating a container for a single product
  let card = document.createElement("div");
  card.classList = "card";
  // creaating the image container for the caed-container
  let imgeContainer = document.createElement("div");
  card.appendChild(imgeContainer);
  // creaating the product's image for its container
  let productImage = document.createElement("img");
  productImage.id = "img";
  productImage.src = image;
  imgeContainer.appendChild(productImage);
  // creaating the product's name container
  let productNameContainer = document.createElement("div");
  productNameContainer.classList = "card-name";
  card.appendChild(productNameContainer);
  // creaating the product's name element
  let productName = document.createElement("p");
  productName.classList = "heado";
  productName.textContent = title;
  productNameContainer.appendChild(productName);
  // creaating the product's name price
  let productPrice = document.createElement("p");
  productPrice.classList = "heado";
  productPrice.textContent = price + "aed";
  productNameContainer.appendChild(productPrice);
  // creating a container for Raiting Icons
  let raitingContainer = document.createElement("div");
  raitingContainer.classList = "stars-icon";
  card.appendChild(raitingContainer);
  // creating an icons for Raitings
  for (let i = 1; i < product.rating.rate; i++) {
    let raitingIcon1 = document.createElement("img");
    raitingIcon1.src = "./images/star.png";
    raitingContainer.appendChild(raitingIcon1);
  }
  // creating a text for raiting count
  let raitingQNT = document.createElement("p");
  // raitingQNT.classList = "";
  raitingQNT.textContent = product.rating.count;
  raitingContainer.appendChild(raitingQNT);
  // creating a text for raiting count
  let addToTheCardBtn = document.createElement("button");
  addToTheCardBtn.textContent = "Add to Your Card";
  card.appendChild(addToTheCardBtn);
  addToTheCardBtn.addEventListener("click", () => {
    item_adding_to_the_cart(product);
  });
  card_container.appendChild(card);
};
let cart = localStorage.getItem("shoppingCart")
  ? JSON.parse(localStorage.getItem("shoppingCart"))
  : [];

export let showCartItems = () => {
  let cart = JSON.parse(localStorage.getItem("shoppingCart")) || [];

  modal_content.innerHTML = "";
  console.log(cart, "in showCartItems");

  cart.forEach((item) => {
    let { image, title, price } = item;
    let cartItem = document.createElement("div");
    let cart_img_container = document.createElement("div");
    let cart_img = document.createElement("img");
    let title_price_container = document.createElement("div");
    let cartTitle = document.createElement("p");
    let cartPrice = document.createElement("p");
    let removeCartBTN_container = document.createElement("div");

    let removeCartBTN = document.createElement("button");
    // giving classesNames
    cartItem.classList = "cart-sng-item";
    cart_img_container.classList = "cart-img-container";
    title_price_container.classList = "title-price-container";
    cartTitle.classList = "cart-Title";
    cartPrice.classList = "cart-Price";
    removeCartBTN_container.classList = "remove-Cart-BTN-container";
    removeCartBTN.classList = "remove-Cart-BTN";
    // adding Content
    removeCartBTN.textContent = "Remove";
    cart_img.src = image;
    cartTitle.textContent = title;
    cartPrice.textContent = price + " aed";
    // new
    cart_img_container.appendChild(cart_img);
    cartItem.appendChild(cart_img_container);
    cartItem.appendChild(title_price_container);
    title_price_container.appendChild(cartTitle);
    title_price_container.appendChild(cartPrice);
    cartItem.appendChild(removeCartBTN_container);
    removeCartBTN_container.appendChild(removeCartBTN);

    removeCartBTN.addEventListener("click", () => {
      cart = cart.filter((cartItem) => cartItem.id !== item.id);
      SaveCartInLocalStorage(cart);
      showCartItems();
    });

    modal_content.appendChild(cartItem);
  });
};

// old
//     removeCartBTN.addEventListener("click", () => {
//       item = shoppingCart
//         .map((cartItem) => {
//           if (cartItem.id === item.id) {
//             return { ...cartItem, item_QNT: cartItem.item_QNT-- };
//           }
//           return cartItem;
//         })
//         .filter((cartItem) => cartItem.item_QNT > 0);

//       showCartItems();
//       console.log(shoppingCart, "Updated shopping cart after removal:");
//     });
//     modal_content.appendChild(cartItem);
//   });
// };

// let updatedCAart=shoppingCart.filter((cartItem)=>{return cartItem.id!=item.id})
// modal_content.removeChild(cartItem);

// removeCartBTN.addEventListener("click", () => {
//   shoppingCart = shoppingCart.map((cartItem) => {
//     if (cartItem.id === item.id) {
//       return { ...cartItem, item_QNT: cartItem.item_QNT - 1 };
//     }
//     return cartItem;
//   }).filter((cartItem) => cartItem.item_QNT > 0);
//   showCartItems();
//   console.log(shoppingCart, item, "after delete");
// });
