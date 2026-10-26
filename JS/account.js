const loggedIn =
    localStorage.getItem("customCraftLoggedIn");

const savedUser =
    JSON.parse(localStorage.getItem("customCraftUser"));


// Login check

if (
    loggedIn !== "true" ||
    !savedUser
) {

    window.location.href = "login.html";

}


// User details

document.getElementById("account-name").textContent =
    savedUser.name;

document.getElementById("account-email").textContent =
    savedUser.email;


// Latest order

const orderId =
    localStorage.getItem("customCraftOrderId");

const latestOrder =
    document.getElementById("latest-order");

if (orderId) {

    latestOrder.textContent =
        orderId;

}


// Logout

const logoutBtn =
    document.getElementById("logout-btn");

logoutBtn.addEventListener("click", function() {

    localStorage.removeItem(
        "customCraftLoggedIn"
    );

    alert("You have been logged out.");

    window.location.href =
        "login.html";

});


// Wishlist count

const wishlist =
    JSON.parse(
        localStorage.getItem("customCraftWishlist")
    ) || [];

document.getElementById("wishlist-count").textContent =
    wishlist.length;


// Cart count

const cart =
    JSON.parse(
        localStorage.getItem("customCraftCart")
    ) || [];

let totalItems = 0;

cart.forEach(function(item) {

    totalItems += item.quantity;

});

document.getElementById("cart-count").textContent =
    totalItems;


const orderHistory =
    document.getElementById("order-history");

const savedOrders =
    JSON.parse(
        localStorage.getItem("customCraftOrders")
    ) || [];

if (savedOrders.length === 0) {

    orderHistory.innerHTML = `
        <p class="no-orders">
            No orders found.
        </p>
    `;

} else {

    savedOrders.reverse().forEach(function(order) {

        let itemsText = "";

        order.items.forEach(function(item) {

            itemsText += `
                <span>
                    ${item.name} × ${item.quantity}
                </span>
            `;

        });

        orderHistory.innerHTML += `

            <div class="order-history-item">

                <div class="order-history-info">

                    <strong>
                        ${order.orderId}
                    </strong>

                    <p>
                        ${order.date}
                    </p>

                    <div class="order-products">
                        ${itemsText}
                    </div>

                </div>

                <div class="order-history-right">

                    <strong>
                        ₹${order.total}
                    </strong>

                    <span class="order-status">
                        ${order.status}
                    </span>

                </div>

            </div>

        `;

    });

}   