const signupForm =
    document.getElementById("signup-form");

signupForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("signup-name").value.trim();

    const email =
        document.getElementById("signup-email").value.trim();

    const password =
        document.getElementById("signup-password").value;

    const confirmPassword =
        document.getElementById("signup-confirm-password").value;


    if (
        name === "" ||
        email === "" ||
        password === "" ||
        confirmPassword === ""
    ) {

        alert("Please fill all fields.");

        return;
    }


    if (password.length < 6) {

        alert("Password must be at least 6 characters.");

        return;
    }


    if (password !== confirmPassword) {

        alert("Passwords do not match.");

        return;
    }


    const user = {

        name: name,
        email: email,
        password: password

    };


    localStorage.setItem(
        "customCraftUser",
        JSON.stringify(user)
    );


    alert("Account created successfully!");


    window.location.href = "login.html";

});