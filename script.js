var typed = new Typed(".multiple-text", {
    strings: ["Research Student", "Developer", "Programmer", "Blogger"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});



// Add your JavaScript functionality here, such as dark mode toggle,
// blog handling, local storage operations, etc.

// Example: Toggle Dark Mode
const toggleButton = document.querySelector('#darkModeToggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});


const toggle = document.querySelector('.toggle');
toggle.addEventListener('change', switchTheme);

function switchTheme() {
    if (toggle.checked) {
        document.body.classList.add('dark-mode');
    }
    else {
        document.body.classList.remove('dark-mode');
    }
}