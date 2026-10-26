const orderId = localStorage.getItem("customCraftOrderId");

const orderIdElement = document.getElementById("order-id");

if (orderId) {
    orderIdElement.textContent = orderId;
}