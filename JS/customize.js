const tshirtColor =
    document.getElementById("tshirt-color");

const tshirtText =
    document.getElementById("tshirt-text");

const tshirtImage =
    document.getElementById("tshirt-preview-image");

const tshirtTextPreview =
    document.getElementById("tshirt-text-preview");

const customizeCartBtn =
    document.getElementById("customize-cart-btn");


// T-Shirt Color

tshirtColor.addEventListener("change", function() {

    const color = tshirtColor.value;

    if (color === "White") {

        tshirtImage.style.filter = "none";

    }

    else if (color === "Black") {

        tshirtImage.style.filter =
            "brightness(0)";

    }

    else if (color === "Blue") {

        tshirtImage.style.filter =
            "sepia(1) saturate(8) hue-rotate(180deg)";

    }

    else if (color === "Red") {

        tshirtImage.style.filter =
            "sepia(1) saturate(8) hue-rotate(315deg)";

    }

});


// T-Shirt Text

tshirtText.addEventListener("input", function() {

    const text =
        tshirtText.value.trim();

    tshirtTextPreview.textContent =
        text;

});


// Add Customized T-Shirt to Cart

customizeCartBtn.addEventListener("click", function() {

    const color =
        tshirtColor.value;

    const size =
        document.getElementById("tshirt-size").value;

    const text =
        tshirtText.value.trim();


    let cart =
        JSON.parse(
            localStorage.getItem("customCraftCart")
        ) || [];


    cart.push({

        name: "Customized T-Shirt",

        price: 599,

        quantity: 1,

        color: color,

        size: size,

        text: text || "No Text"

    });


    localStorage.setItem(
        "customCraftCart",
        JSON.stringify(cart)
    );


    customizeCartBtn.textContent =
        "✓ Added to Cart";


    setTimeout(function() {

        customizeCartBtn.textContent =
            "🛒 Add Customized T-Shirt";

    }, 1500);

});