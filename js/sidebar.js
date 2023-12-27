// script.js
document.addEventListener('DOMContentLoaded', function () {
    var clickers = document.querySelectorAll('.second_sidebar_clicker, .hamburger_menu');

    clickers.forEach(function (clicker) {
        clicker.addEventListener('click', function () {
            // Toggle the "clicked" class for the clicked element
            clicker.classList.toggle('clicked');
            
            // Close other dropdowns when one is clicked
            clickers.forEach(function (otherClicker) {
                if (otherClicker !== clicker) {
                    otherClicker.classList.remove('clicked');
                }
            });
        });
    });
});
