const loginForm =
    document.getElementById("login-form");

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const email =
        document.getElementById("login-email").value.trim();

    const password =
        document.getElementById("login-password").value;


    const savedUser =
        JSON.parse(localStorage.getItem("customCraftUser"));


    if (!savedUser) {

        alert("No account found. Please create an account first.");

        return;
    }


    if (
        email === savedUser.email &&
        password === savedUser.password
    ) {

        localStorage.setItem(
            "customCraftLoggedIn",
            "true"
        );

        alert("Login successful!");


        window.location.href =
            "../index.html";

    } else {

        alert("Invalid email or password.");

    }

});