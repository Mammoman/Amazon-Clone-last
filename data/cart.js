export const cart = [{
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
     quantity:  2,
},{
    productId: 'bc2847e9-5323-403f-b7cf-57fde044a955',
    quantity:  1,
}];

export function addToCart (productId) {
    let matchingITEM;

    cart.forEach((cartItem) =>  {
     if (productId === cartItem.productId) {
         matchingITEM = cartItem;
       }
    });

     if (matchingITEM) {
         matchingITEM.quantity += 1;
     } else {
         cart.push({
             productId: productId,
             quantity:1,
            
          });
     }
  };