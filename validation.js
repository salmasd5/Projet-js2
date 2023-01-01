        const form = document.getElementById("signup-form");
        const usernameInput = document.getElementById("username");
        const emailInput = document.getElementById("email");
        const passwordInput = document.getElementById("password");
        const passwordConfirmInput = document.getElementById("password-confirm");

        form.addEventListener("submit", event => {
            event.preventDefault();
  
            let isValid = true;

            // Validate username
            if (usernameInput.value.trim() === "") {
                document.getElementById("username-error").innerHTML = "Username cannot be empty";
                isValid = false;
            } else if (usernameInput.value.length < 3 || usernameInput.value.length > 25) {
                document.getElementById("username-error").innerHTML = "Username must be between 3 and 25 characters long";
                isValid = false;
            } else {
                document.getElementById("username-error").innerHTML = "";
            }

            // Validate email
            if (emailInput.value.trim() === "") {
                document.getElementById("email-error").innerHTML = "Email is required";
                isValid = false;
            } else {
                document.getElementById("email-error").innerHTML = "";
            }

            // Validate password
            if (passwordInput.value.trim() === "") {
                document.getElementById("password-error").innerHTML = "Password is required";
                isValid = false;
            } else if (passwordInput.value !== passwordConfirmInput.value) {
                document.getElementById("password-confirm-error").innerHTML = "Passwords do not match";
                isValid = false;
            } else {
                document.getElementById("password-error").innerHTML = "";
            }
            if (isValid) {
                window.location.href = "index2.html";
              }
        }); 