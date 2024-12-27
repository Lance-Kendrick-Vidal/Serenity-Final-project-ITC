document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const inputs = document.querySelectorAll(".contact-inputs");

    form.addEventListener("submit", (event) => {
        let isValid = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.classList.add("error"); // Add error class to highlight
            } else {
                input.classList.remove("error"); // Remove error class if fixed
            }
        });

        if (!isValid) {
            event.preventDefault(); // Stop form submission
            alert("Please fill in all required fields.");
        }
    });

    // Remove the error class when the user starts typing
    inputs.forEach(input => {
        input.addEventListener("input", () => {
            input.classList.remove("error");
        });
    });
});