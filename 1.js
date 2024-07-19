// import
import { apiCall } from "./ApiCall.js";
import { showCartItems } from "./displayFunction.js";
import { createItem } from "./displayFunction.js";

// export
export let card_container = document.getElementById("items");
export let modal_content = document.querySelector(".modal-content");
export let shoppingCart = [];

let cartIcon = document.getElementById("cart_id");
let overlay = document.querySelector(".overlay");

cartIcon.addEventListener("click", () => {
  overlay.style.display = "block";
});

modal_content.addEventListener("click", (e) => {
  e.stopPropagation();
});

overlay.addEventListener("click", () => {
  overlay.style.display = "none";
});

export let item_adding_to_the_cart = (product) => {
  let isItemInCart = shoppingCart.find((item) => {
    return product.id == item.id;
  });
  if (!isItemInCart) {
    shoppingCart.push({ ...product, item_QNT: 1 });
    showCartItems();
    // alert("You have already added this item in the cartIcon")
  } else {
    shoppingCart.map((item) => {
      if ((item.id = product.id)) {
        return { ...item, item_QNT: item.item_QNT++ };
      } else {
        return item;
      }
    });
  }
  console.log(shoppingCart, "adding an item");
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
