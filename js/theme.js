const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// Use saved preference, otherwise start in Light
const savedTheme = localStorage.getItem("blendingInTheme") || "light";

body.setAttribute("data-theme", savedTheme);

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        const currentTheme = body.getAttribute("data-theme");

        const newTheme =
            currentTheme === "light" ? "gothic" : "light";

        body.setAttribute("data-theme", newTheme);

        // Remember the user's choice
        localStorage.setItem("blendingInTheme", newTheme);
    });
}
