let cart = JSON.parse(localStorage.getItem("customCraftCart")) || [];

const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const finalTotal = document.getElementById("final-total");

const checkoutBtn =
    document.getElementById("checkout-btn");


function displayCart() {

    cartItems.innerHTML = "";

    let total = 0;

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <div class="empty-cart">
                <h2>Your Cart is Empty</h2>
                <p>Add some products to your cart.</p>
            </div>
        `;

        cartTotal.textContent = "₹0";
        finalTotal.textContent = "₹0";

        checkoutBtn.style.display = "none";

        return;
    }

    checkoutBtn.style.display = "block";


    cart.forEach(function(item, index) {

        let itemTotal = item.price * item.quantity;

        total += itemTotal;

        cartItems.innerHTML += `

            <div class="cart-item">

                <div class="cart-product">

                    <div class="cart-product-icon">
                        ${
                            item.name === "Customized T-Shirt"
                            ? `<img src="../images/tshirt.png" alt="Customized T-Shirt">`
                            : item.name === "Birthday Gift Box"
                            ? `<img src="../images/birthday-giftbox.png" alt="Birthday Gift Box">`
                            : item.name === "Premium Gift Box" ||
                            item.name === "Classic Gift Box"
                            ? `<img src="../images/giftbox.png" alt="Gift Box">`
                            : item.name === "Personalized Mug"
                            ? `<img src="../images/mug.png" alt="Personalized Mug">`
                            : `<span>🛍️</span>`
                        }
                    </div>

                    <div>
                        <h3>${item.name}</h3>

                        <p>₹${item.price} each</p>

                        ${
                            item.color
                            ? `<p>Color: ${item.color}</p>`
                            : ""
                        }

                        ${
                            item.size
                            ? `<p>Size: ${item.size}</p>`
                            : ""
                        }

                        ${
                            item.text
                            ? `<p>Text: ${item.text}</p>`
                            : ""
                        }

                        ${
                            item.giftItem
                            ? `<p>Gift Item: ${item.giftItem}</p>`
                            : ""
                        }

                        ${
                            item.giftMessage
                            ? `<p>Message: ${item.giftMessage}</p>`
                            : ""
                        }

                    </div>

                </div>


                <div class="quantity">

                    <button onclick="decreaseQuantity(${index})">
                        −
                    </button>

                    <span>
                        ${item.quantity}
                    </span>

                    <button onclick="increaseQuantity(${index})">
                        +
                    </button>

                </div>


                <strong>
                    ₹${itemTotal}
                </strong>


                <button
                    class="remove-btn"
                    onclick="removeItem(${index})">
                    Remove
                </button>

            </div>

        `;
    });


    cartTotal.textContent = "₹" + total;
    finalTotal.textContent = "₹" + total;
}



function increaseQuantity(index) {

    cart[index].quantity++;

    saveCart();
}



function decreaseQuantity(index) {

    if (cart[index].quantity > 1) {

        cart[index].quantity--;

    } else {

        cart.splice(index, 1);

    }

    saveCart();
}



function removeItem(index) {

    cart.splice(index, 1);

    saveCart();
}



function saveCart() {

    localStorage.setItem(
        "customCraftCart",
        JSON.stringify(cart)
    );

    displayCart();
}


displayCart();

const cartCount =
    document.getElementById("cart-count");


function updateCartCount() {

    let totalItems = 0;

    cart.forEach(function(item) {

        totalItems += item.quantity;

    });

    cartCount.textContent = totalItems;

}


updateCartCount();