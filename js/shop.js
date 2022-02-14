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

/* Exercise 1 -Nivell 2 anula
function buy(id) {  
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
        for (let i = 0 ; i < products.length; i++) {  
            if (products[i].id == id){
                cartList.push(products[id-1]);
                break;
            }
        }
  console.log("cartList:");
  console.log(cartList);
  generateCart()
}*/

// Exercise 2
function cleanCart() {
 //cartList.length = 0;   
 //cart.length = 0;
 total = 0;
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    cleanCart();
    var tot = 0;
    for (let i = 0; i < cart.length; i++){
        var tot = cart[i].subtotalWithDiscount;
        //console.log(tot);
        total += tot;
    }
    printCart();
    console.log("Cart:");
    console.log(cart);
    console.log("total cart with discount " + total);
}

/* Exercise 4 -Nivell 2 anula
function generateCart() {
    /*for (let i =0; i<cartList.length; i++){
        const existe = (name) => {
            return cart.some(values => values.name === name);
        }
        const result = existe(cartList[i].name);
        console.log(result);
        if(result === false){
            var cartItem = {name: cartList[i].name, price:cartList[i].price, type: cartList[i].type, quantity: 1, subtotal:cartList[i].price, subtotalWithDiscount:0};    
            cart.push(cartItem);  
        } else {
            cart[i].quantity++; 
        }
    }
    cleanCart()
    for (let i =0; i<cartList.length; i++){
        var findDuplicate = cart.findIndex(dupli => dupli.name == cartList[i].name);
        if (findDuplicate == -1){
            var cartItem = {name: cartList[i].name, price:cartList[i].price, type: cartList[i].type, quantity: 1, subtotal:cartList[i].price, subtotalWithDiscount:cartList[i].price};  
            cart.push(cartItem);      
        } else {
            cart[findDuplicate].quantity++;   
            cart[findDuplicate].subtotal = cart[findDuplicate].quantity*cart[findDuplicate].price;
            cart[findDuplicate].subtotalWithDiscount = cart[findDuplicate].quantity*cart[findDuplicate].price; 
        }  
    }  
    applyPromotionsCart()
}*/
// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    for (let i = 0; i<cart.length; i++){
        if (cart[i].name == 'cooking oil' && cart[i].quantity >= 3){
        cart[i].subtotalWithDiscount=10*cart[i].quantity;
        } else if (cart[i].name == 'Instant cupcake mixture' && cart[i].quantity >= 10){  
        cart[i].subtotalWithDiscount = (cart[i].price*cart[i].quantity)*0.6; 
        }
    }
    calculateTotal()
}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
    for (let i = 0 ; i<products.length; i++){
          if(products[i].id == id){
              var findDuplicate = cart.findIndex(dupli => dupli.name == products[i].name);
              if(findDuplicate > -1){
                    cart[findDuplicate].quantity++;
                    cart[findDuplicate].subtotal += cart[findDuplicate].price;
                    cart[findDuplicate].subtotalWithDiscount = cart[findDuplicate].quantity*cart[findDuplicate].price; 
              } else {
                var cartItem = {id: products[i].id ,name: products[i].name, price:products[i].price, type: products[i].type, quantity: 1, subtotal:products[i].price, subtotalWithDiscount:products[i].price};  
                cart.push(cartItem);     
              }
            }
    }
    applyPromotionsCart();  
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    for (let i =0; i<products.length; i++){
        var findDuplicate = cart.findIndex(dupli => dupli.name == products[i].name);
        if(products[i].id == id){
            if(findDuplicate>-1){
               cart[findDuplicate].quantity--;
               cart[findDuplicate].subtotal -= cart[findDuplicate].price;
               cart[findDuplicate].subtotalWithDiscount = cart[findDuplicate].quantity*cart[findDuplicate].price; 
            } else {
               return null;
            }
            if(cart[findDuplicate].quantity === 0){
                cart.splice(findDuplicate, 1);
            }
        }
    } 
    applyPromotionsCart();  
}


// Exercise 9
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    const ul = document.querySelector(".list");
    const bill = document.querySelector(".bill")
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
    while (bill.firstChild) {
        bill.removeChild(bill.firstChild);
    }
    cart.forEach(item => {
        ul.innerHTML += `
    <div class="d-flex justify-content-between">
    <li class="name_product">${item.name}</li>
    <li class="quantity">${item.quantity}</li>
    </div>
    <div class="d-flex justify-content-end mb-4">
    <button class="btn btn-primary m-1" onclick="addToCart(${item.id})">+</button>
    <button class="btn btn-info m-1" onclick="removeFromCart(${item.id})"><b>-</b></button>
    </div>
    `
    })
    bill.innerHTML += `
    Total: $${total} 
    `
}





