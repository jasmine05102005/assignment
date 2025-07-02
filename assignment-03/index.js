function checkCredentials(phone, password) {
    return new Promise((resolve, reject) => {
        if (phone === "7989644974" && password === "1234") {
            resolve("✅ Login successful!");
        } else {
            reject("❌ Invalid phone number or password.");
        }
    });
}

function login() {
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value.trim();
    const messageBox = document.getElementById("message");

    // Clear previous message
    messageBox.textContent = "";

    // Basic empty check
    if (!phone || !password) {
        messageBox.style.color = "orange";
        messageBox.textContent = "⚠️ Please enter both phone number and password.";
        return;
    }

    checkCredentials(phone, password)
        .then(success => {
            messageBox.style.color = "green";
            messageBox.textContent = success;
        })
        .catch(error => {
            messageBox.style.color = "red";
            messageBox.textContent = error;
        });
}