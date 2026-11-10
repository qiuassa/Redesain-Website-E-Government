const themeToggle = document.querySelector("#theme-toggle");
const root = document.documentElement;

function setTheme(isDark, savePreference = false) {
    root.dataset.theme = isDark ? "dark" : "light";
    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.setAttribute(
        "aria-label",
        isDark ? "Aktifkan mode terang" : "Aktifkan mode gelap"
    );

    if (savePreference) {
        try {
            localStorage.setItem("brebes-theme", isDark ? "dark" : "light");
        } catch (error) {
            console.warn("Preferensi tema tidak dapat disimpan.", error);
        }
    }
}

try {
    setTheme(localStorage.getItem("brebes-theme") === "dark");
} catch (error) {
    console.warn("Preferensi tema tidak dapat dibaca.", error);
    setTheme(false);
}

themeToggle.addEventListener("click", () => {
    setTheme(themeToggle.getAttribute("aria-pressed") !== "true", true);
});
