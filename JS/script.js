const cartButtons = document.querySelectorAll(".cart-btn");

const cartCount = document.getElementById("cart-count");

let cart = JSON.parse(localStorage.getItem("customCraftCart")) || [];


function updateCartCount() {

    let totalItems = 0;

    cart.forEach(function(item) {
        totalItems += item.quantity;
    });

    cartCount.textContent = totalItems;
}


cartButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const productName = button.dataset.name;
        const productPrice = Number(button.dataset.price);

        const existingProduct = cart.find(function(item) {
            return item.name === productName;
        });

        if (existingProduct) {

            existingProduct.quantity++;

        } else {

            cart.push({
                name: productName,
                price: productPrice,
                quantity: 1
            });

        }

        localStorage.setItem(
            "customCraftCart",
            JSON.stringify(cart)
        );

        updateCartCount();

        button.textContent = "✓ Added";

        setTimeout(function() {
            button.textContent = "🛒 Add";
        }, 1000);

    });

});


updateCartCount();


const wishlistButtons =
    document.querySelectorAll(".wishlist-btn");

let wishlist =
    JSON.parse(localStorage.getItem("customCraftWishlist")) || [];


wishlistButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const productName = button.dataset.name;
        const productPrice = Number(button.dataset.price);


        const alreadyExists = wishlist.some(function(item) {

            return item.name === productName;

        });


        if (alreadyExists) {

            button.textContent = "♥";

            return;
        }


        wishlist.push({

            name: productName,

            price: productPrice

        });


        localStorage.setItem(
            "customCraftWishlist",
            JSON.stringify(wishlist)
        );


        button.textContent = "♥";

    });

});

const wishlistCount =
    document.getElementById("wishlist-count");


function updateWishlistCount() {

    wishlistCount.textContent = wishlist.length;

}


updateWishlistCount();


const searchButton = document.getElementById("search-btn");
const searchBox = document.getElementById("search-box");
const searchClose = document.getElementById("search-close");
const searchInput = document.getElementById("search-input");


searchButton.addEventListener("click", function() {

    searchBox.style.display = "flex";

    searchInput.focus();

});


searchClose.addEventListener("click", function() {

    searchBox.style.display = "none";

    searchInput.value = "";

});



searchInput.addEventListener("input", function() {

    const searchText = searchInput.value.toLowerCase().trim();

    const products =
        document.querySelectorAll(".product-item");


    products.forEach(function(product) {

        const productName =
            product.dataset.product.toLowerCase();


        if (productName.includes(searchText)) {

            product.style.display = "";

        } else {

            product.style.display = "none";

        }

    });

});


const accountLink =
    document.getElementById("account-link");

const loggedIn =
    localStorage.getItem("customCraftLoggedIn");

const savedUser =
    JSON.parse(localStorage.getItem("customCraftUser"));

if (
    loggedIn === "true" &&
    savedUser
) {

    accountLink.textContent =
        "Hi, " + savedUser.name;

    accountLink.href =
        "pages/account.html";

}