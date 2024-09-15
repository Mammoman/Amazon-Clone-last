export const cart = [];
export function addToCart (productId) {
    let matchingITEM;

    cart.forEach((cartItem) =>  {
     if (productId === cartItem.productId) {
         matchingITEM = cartItem;
       }
    });

  
    const quantitySelector = document.querySelector
    (`.js-quantity-selector-${productId}`)

    const quantity = Number(quantitySelector.value);


     if (matchingITEM) {
         matchingITEM.quantity += 1;
         matchingITEM.quantity +=  quantity
     } else {
         cart.push({
             productId: productId,
             quantity:1,
             quantity:  quantity
          })
     }
  };