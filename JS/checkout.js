let cart = JSON.parse(localStorage.getItem("customCraftCart")) || [];

const checkoutItems = document.getElementById("checkout-items");
const checkoutTotal = document.getElementById("checkout-total");
const placeOrderBtn = document.getElementById("place-order-btn");

const checkoutForm =
    document.getElementById("checkout-form");


function displayCheckout() {

    checkoutItems.innerHTML = "";

    let total = 0;

    if (cart.length === 0) {

        checkoutItems.innerHTML = `
            <p>Your cart is empty.</p>
        `;

        checkoutTotal.textContent = "₹0";

        return;
    }


    cart.forEach(function(item) {

        let itemTotal = item.price * item.quantity;

        total += itemTotal;

        checkoutItems.innerHTML += `

            <div class="checkout-item">

                <div>

                    <strong>
                        ${item.name} × ${item.quantity}
                    </strong>

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

                <strong>
                    ₹${itemTotal}
                </strong>

            </div>

        `;
    });


    checkoutTotal.textContent = "₹" + total;
}



placeOrderBtn.addEventListener("click", function() {

    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;
    }


    const name =
    document.getElementById("customer-name").value.trim();

    const mobile =
        document.getElementById("customer-mobile").value.trim();

    const address =
        document.getElementById("customer-address").value.trim();

    const city =
        document.getElementById("customer-city").value.trim();

    const pincode =
        document.getElementById("customer-pincode").value.trim();

    const saveDeliveryDetails =
        document.getElementById("save-delivery-details").checked;


    if (
        name === "" ||
        mobile === "" ||
        address === "" ||
        city === "" ||
        pincode === ""
    ) {

        alert("Please fill all delivery details.");

        return;
    }


    if (!/^[0-9]{10}$/.test(mobile)) {

        alert("Please enter a valid 10-digit mobile number.");

        return;
    }


    if (!/^[0-9]{6}$/.test(pincode)) {

        alert("Please enter a valid 6-digit PIN Code.");

        return;
    }

    if (saveDeliveryDetails) {

        const deliveryDetails = {

            name: name,
            mobile: mobile,
            address: address,
            city: city,
            pincode: pincode

        };

        localStorage.setItem(
            "customCraftDeliveryDetails",
            JSON.stringify(deliveryDetails)
        );

    }


    localStorage.removeItem("customCraftCart");


    const orderId =
        "CC-" + Date.now();


    localStorage.setItem(
        "customCraftOrderId",
        orderId
    );

    const orderTotal =
        cart.reduce(function(total, item) {

            return total + (item.price * item.quantity);

        }, 0);

    let orders =
        JSON.parse(
            localStorage.getItem("customCraftOrders")
        ) || [];

    orders.push({

        orderId: orderId,

        items: cart,

        total: orderTotal,

        status: "Confirmed",

        date: new Date().toLocaleDateString("en-IN")

    });

    localStorage.setItem(
        "customCraftOrders",
        JSON.stringify(orders)
    );


    window.location.href =
        "order-success.html";

});


displayCheckout();

const savedDeliveryDetails =
    JSON.parse(
        localStorage.getItem("customCraftDeliveryDetails")
    );

if (savedDeliveryDetails) {

    document.getElementById("customer-name").value =
        savedDeliveryDetails.name;

    document.getElementById("customer-mobile").value =
        savedDeliveryDetails.mobile;

    document.getElementById("customer-address").value =
        savedDeliveryDetails.address;

    document.getElementById("customer-city").value =
        savedDeliveryDetails.city;

    document.getElementById("customer-pincode").value =
        savedDeliveryDetails.pincode;

}