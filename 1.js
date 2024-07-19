// import
import { apiCall } from "./ApiCall.js";
import { showCartItems } from "./displayFunction.js";
import { createItem } from "./displayFunction.js";
import { SaveCartInLocalStorage } from "./utilizeFunction.js";

// export
export let card_container = document.getElementById("items");
export let modal_content = document.querySelector(".modal-content");
let cart = JSON.parse(localStorage.getItem("shoppingCart")) || [];
let cartIcon = document.getElementById("cart_id");
let overlay = document.querySelector(".overlay");
cartIcon.addEventListener("click", () => {
  overlay.style.display = "block";
  showCartItems();
});
modal_content.addEventListener("click", (e) => {
  e.stopPropagation();
});
overlay.addEventListener("click", () => {
  overlay.style.display = "none";
});

export let item_adding_to_the_cart = (product) => {
  let cart = localStorage.getItem("shoppingCart")
    ? JSON.parse(localStorage.getItem("shoppingCart"))
    : [];
  let isItemInCart = cart?.find((item) => {
    return product.id == item.id;
  });
  if (!isItemInCart) {
    cart.push({ ...product, item_QNT: 1 });
    console.log(cart, "cart in item_adding-to-the-cart");
    // console.log(shoppingCart, "cart");
  } else {
    cart = cart.map((item) => {
      if (item.id === product.id) {
        return { ...item, item_QNT: item.item_QNT++ };
      } else {
        return item;
      }
    });
  }
  console.log(cart, "cart");

  SaveCartInLocalStorage(cart);
  showCartItems();
  // console.log(shoppingCart, "adding an item");
};

window.onload = () => {
  apiCall()
    .then((data) => {
      data.forEach((product) => {
        createItem(product);
      });
    })
    .catch(() => alert("everything is sold out, new items comming soon!"));
};
