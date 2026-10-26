const boxType =
    document.getElementById("box-type");

const giftItem =
    document.getElementById("gift-item");

const giftMessage =
    document.getElementById("gift-message");

const giftPreviewTitle =
    document.getElementById("gift-preview-title");

const giftPreviewImage =
    document.getElementById("gift-preview-image");


function updateGiftPreview() {

    const box =
        boxType.value;

    const item =
        giftItem.value;

    const message =
        giftMessage.value.trim();


    // Change title

    giftPreviewTitle.textContent =
        box;


    // Change image

    if (box === "Birthday Gift Box") {

        giftPreviewImage.src =
            "../images/birthday-giftbox.png";

        giftPreviewImage.alt =
            "Birthday Gift Box";

    } else {

        giftPreviewImage.src =
            "../images/giftbox.png";

        giftPreviewImage.alt =
            "Gift Box";

    }


    // Change preview text

    const previewText =
        document.querySelector(".gift-preview p");


    if (message === "") {

        previewText.textContent =
            "Includes " + item;

    } else {

        previewText.textContent =
            item + " • " + message;

    }

}


boxType.addEventListener(
    "change",
    updateGiftPreview
);


giftItem.addEventListener(
    "change",
    updateGiftPreview
);


giftMessage.addEventListener(
    "input",
    updateGiftPreview
);


updateGiftPreview();


// Add Gift Box to Cart

const giftCartBtn =
    document.getElementById("gift-cart-btn");


giftCartBtn.addEventListener(
    "click",
    function() {

        const box =
            boxType.value;

        const item =
            giftItem.value;

        const message =
            giftMessage.value.trim();


        let cart =
            JSON.parse(
                localStorage.getItem(
                    "customCraftCart"
                )
            ) || [];


        cart.push({

            name: box,

            price: 899,

            quantity: 1,

            giftItem: item,

            giftMessage:
                message || "No Message"

        });


        localStorage.setItem(
            "customCraftCart",
            JSON.stringify(cart)
        );


        giftCartBtn.textContent =
            "✓ Added to Cart";


        setTimeout(function() {

            giftCartBtn.textContent =
                "🛒 Add Gift Box to Cart";

        }, 1500);

    }
);