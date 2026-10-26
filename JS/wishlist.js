let wishlist =
    JSON.parse(localStorage.getItem("customCraftWishlist")) || [];

let cart =
    JSON.parse(localStorage.getItem("customCraftCart")) || [];

const wishlistItems =
    document.getElementById("wishlist-items");


function displayWishlist() {

    wishlistItems.innerHTML = "";


    if (wishlist.length === 0) {

        wishlistItems.innerHTML = `
            <div class="empty-wishlist">

                <h2>Your Wishlist is Empty</h2>

                <p>
                    Add your favorite products to your wishlist.
                </p>

            </div>
        `;

        return;
    }


    wishlist.forEach(function(item, index) {

        wishlistItems.innerHTML += `

            <div class="wishlist-item">

                <div class="wishlist-product">

                    <div class="wishlist-icon">
                        ❤️
                    </div>

                    <div>

                        <h3>
                            ${item.name}
                        </h3>

                        <p>
                            ₹${item.price}
                        </p>

                    </div>

                </div>


                <div class="wishlist-actions">

                    <button
                        class="wishlist-cart-btn"
                        onclick="addToCart(${index})">
                        🛒 Add
                    </button>

                    <button
                        class="wishlist-remove-btn"
                        onclick="removeFromWishlist(${index})">
                        Remove
                    </button>

                </div>

            </div>

        `;

    });

}


function addToCart(index) {

    const product = wishlist[index];


    const existingProduct = cart.find(function(item) {

        return item.name === product.name;

    });


    if (existingProduct) {

        existingProduct.quantity++;

    } else {

        cart.push({

            name: product.name,

            price: product.price,

            quantity: 1

        });

    }


    localStorage.setItem(
        "customCraftCart",
        JSON.stringify(cart)
    );


    const addButton = document.querySelectorAll(".wishlist-cart-btn")[index];

    addButton.textContent = "✓ Added";

    setTimeout(function() {
        addButton.textContent = "🛒 Add";
    }, 1000);

}


function removeFromWishlist(index) {

    wishlist.splice(index, 1);

    localStorage.setItem(
        "customCraftWishlist",
        JSON.stringify(wishlist)
    );

    displayWishlist();
    window.location.reload();

}


displayWishlist();

const wishlistCount =
    document.getElementById("wishlist-count");

const cartCount =
    document.getElementById("cart-count");


function updateCounts() {

    wishlistCount.textContent = wishlist.length;


    let totalItems = 0;

    cart.forEach(function(item) {

        totalItems += item.quantity;

    });

    cartCount.textContent = totalItems;

}


updateCounts();