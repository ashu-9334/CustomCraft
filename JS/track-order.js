const trackButton = document.getElementById("track-btn");

const orderInput = document.getElementById("order-id-input");

const trackingResult = document.getElementById("tracking-result");


trackButton.addEventListener("click", function() {

    const enteredOrderId = orderInput.value.trim();

    const savedOrderId =
        localStorage.getItem("customCraftOrderId");


    if (enteredOrderId === "") {

        trackingResult.innerHTML = `
            <div class="tracking-status">
                <h2>Please Enter Order ID</h2>
                <p>Enter your Order ID to track your order.</p>
            </div>
        `;

        return;
    }


    if (enteredOrderId !== savedOrderId) {

        trackingResult.innerHTML = `
            <div class="tracking-status">
                <h2>Order Not Found</h2>
                <p>Please check your Order ID and try again.</p>
            </div>
        `;

        return;
    }


    trackingResult.innerHTML = `

        <div class="tracking-status">

            <h2>Order Confirmed ✓</h2>

            <p>
                Order ID: ${savedOrderId}
            </p>


            <div class="tracking-steps">

                <div class="tracking-step">

                    <div class="tracking-step-icon">
                        ✓
                    </div>

                    <span>
                        Confirmed
                    </span>

                </div>


                <div class="tracking-step">

                    <div class="tracking-step-icon">
                        2
                    </div>

                    <span>
                        Preparing
                    </span>

                </div>


                <div class="tracking-step">

                    <div class="tracking-step-icon">
                        3
                    </div>

                    <span>
                        Shipped
                    </span>

                </div>


                <div class="tracking-step">

                    <div class="tracking-step-icon">
                        4
                    </div>

                    <span>
                        Delivered
                    </span>

                </div>

            </div>

        </div>

    `;

});