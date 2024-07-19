export let SaveCartInLocalStorage = (shoppingCart) => {
  let cartString = JSON.stringify(shoppingCart);
  localStorage.setItem("shoppingCart", cartString);
};