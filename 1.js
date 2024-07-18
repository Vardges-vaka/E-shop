let cartIcon = document.getElementById("cart_id");
let overlay = document.querySelector(".overlay");
let card_container = document.getElementById("items");
let modal_content = document.querySelector(".modal-content");
let shoppingCart = []; 


cartIcon.addEventListener("click", () => { 
  overlay.style.display = "block";
});

modal_content.addEventListener("click", (e)=>{
  e.stopPropagation();

})



overlay.addEventListener("click", () => { 
  overlay.style.display = "none";
});


let apiCall=()=>{
  let promise = new Promise ((resolve, reject) =>{
    let data = fetch("https://fakestoreapi.com/products").then((res)=>res.json());
        if (data){
      resolve(data);
    } else{
      reject();
    }
  });
return promise;
};

window.onload=() =>  {
  apiCall()
  .then((data)=> {
    data.forEach((product) => {   
    console.log(product);

      // creating a container for a single product
    let card = document.createElement("div");
    card.classList = "card";
    // creaating the image container for the caed-container 
    let imgeContainer = document.createElement("div");
    // imgeContainer.style.width="";
    // imgeContainer.style.height="";
    card.appendChild(imgeContainer);
    // creaating the product's image for its container 
    let productImage = document.createElement("img")
    productImage.id = "img";
    productImage.src = product.image;
    imgeContainer.appendChild(productImage);
    // creaating the product's name container
    let productNameContainer = document.createElement("div");
    productNameContainer.classList = "card-name";
    card.appendChild(productNameContainer);
    // creaating the product's name element
    let productName = document.createElement("p");
    productName.classList = "heado";
    productName.textContent= product.title;
    productNameContainer.appendChild(productName);
    // creaating the product's name price
    let productPrice = document.createElement("p");
    productPrice.classList = "heado";
    productPrice.textContent= product.price +"aed";
    productNameContainer.appendChild(productPrice);
    // creating a container for Raiting Icons
    let raitingContainer = document.createElement("div");
    raitingContainer.classList = "stars-icon";
    card.appendChild(raitingContainer);
    // creating an icons for Raitings
    // ????????????????????????????????????????????????????
    let raitingIcon1 = document.createElement("img");
    raitingIcon1.src = "./images/star.png"; 
    raitingContainer.appendChild(raitingIcon1);
    
    let raitingIcon2 = document.createElement("img");
    raitingIcon2.src = "./images/star.png"; 
    raitingContainer.appendChild(raitingIcon2);

    let raitingIcon3 = document.createElement("img");
    raitingIcon3.src = "./images/star.png"; 
    raitingContainer.appendChild(raitingIcon3);

    let raitingIcon4 = document.createElement("img");
    raitingIcon4.src = "./images/star.png"; 
    raitingContainer.appendChild(raitingIcon4);

    let raitingIcon5 = document.createElement("img");
    raitingIcon5.src = "./images/star.png"; 
    raitingContainer.appendChild(raitingIcon5);
    // ????????????????????????????????????????????????????
    // creating a text for raiting count
    let raitingQNT = document.createElement("p");
    // raitingQNT.classList = "";
    raitingQNT.textContent = product.rating.count; 
    raitingContainer.appendChild(raitingQNT);
    // creating a text for raiting count
    let addToTheCardBtn = document.createElement("button");
    addToTheCardBtn.textContent="Add to Your Card";
    card.appendChild(addToTheCardBtn);
    addToTheCardBtn.addEventListener("click", () => {
      shoppingCart.push(product);
      let clonedCard = card.cloneNode(true);
      let removeBtn = document.createElement("button");
      removeBtn.classList = "remove-btn";
      removeBtn.textContent = "remove";
      clonedCard.appendChild(removeBtn);
      removeBtn.addEventListener ("click", () => {
        modal_content.removeChild(clonedCard);
// How to remove the item from the? shoppingCart array????


      });
      modal_content.appendChild(clonedCard);
  });



    
    card_container.appendChild(card);

    // console.log(data, "product");
  })
  
  })
   .catch(()=> alert ("everything is sold out, new items comming soon!"));
};

