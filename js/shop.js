// If you have time, you can move this variable "products" to a json file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery'
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery'
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
/*function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
for (let i = 0 ; i < products.length; i++) {  
    if (products[i].id == id){
        cartList.push(products[id-1]);
        break;
    }
}
 // console.log(cartList);
}*/

// Exercise 2
function cleanCart() {
 cart.length = 0;
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    var tot = 0;
    for (let i = 0; i < cart.length; i++){
        var total = cart[i].subtotal;
        var tot = total + tot;
    }
   console.log(tot.toFixed(2));
}

// Exercise 4
/*function generateCart() {
// Using the "cartlist" array that contains all the items in the shopping cart, 
// generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product. 
    for (let i =0; i<cartList.length; i++){
        var findDuplicate = cart.findIndex(dupli => dupli.name == cartList[i].name);
        // findDuplicate retorna -1 sino existe duplicado
        // console.log(cartList[i].name);
        // console.log("findDuplicate: " + findDuplicate);
        if (findDuplicate == -1){
            // console.log("NO EXISTE");
            var cartItem = {name: cartList[i].name, price:cartList[i].price, type: cartList[i].type, quantity: 1, subtotal:0, subtotalWithDiscount:0};    
            cart.push(cartItem);      
        } else {
            // console.log("EXISTE");
            cart[findDuplicate].quantity++;     
        }  
    }    
}*/

// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    for (let i = 0; i<cart.length; i++){
        if (cart[i].name == 'cooking oil' && cart[i].quantity >= 3){
        cart[i].price=10;
         } else if (cart[i].name == 'Instant cupcake mixture' && cart[i].quantity >= 10){
        cart[i].price = cart[i].price*0.6; 
        }
    }
       console.log(cart)
}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
    for (let i = 0 ; i<products.length; i++){
          if(products[i].id == id){
              //console.log("buscamos duplicado");
              var findDuplicate = cart.findIndex(dupli => dupli.name == products[i].name);
              if(findDuplicate > -1){
                 // console.log("Existe, suma cantidad y precio");
                    cart[findDuplicate].quantity++;
                    cart[findDuplicate].subtotal += cart[findDuplicate].price;
              } else {
                //  console.log("no existe, crear producto");
                  var cartItem = {name: products[i].name, price:products[i].price, type: products[i].type, quantity: 1, subtotal:products[i].price, subtotalWithDiscount:0};  
                  cart.push(cartItem);  
              }
            }
    }  
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
        for (let i = 0 ; i<products.length; i++){
            if(products[i].id == id){
                var findDuplicate = cart.findIndex(dupli => dupli.name == products[i].name);
                //console.log(findDuplicate);
                if(findDuplicate==-1){
                    return  console.log("El producto no está en el carrito");
                }
                if(cart[findDuplicate].quantity > 1);
                //console.log("resto cantidad");
                cart[findDuplicate].quantity-- ;
                cart[findDuplicate].subtotal -= cart[findDuplicate].price;
                //console.log(cart);
            }     
        }  
        if (cart[findDuplicate].quantity == 0){
            cart.splice(findDuplicate, 1);   
        } 
    }




// Exercise 9
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}
