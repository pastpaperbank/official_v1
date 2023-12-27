document.addEventListener('DOMContentLoaded', function () {
    var secondSidebarClicker = document.querySelector('.second_sidebar_clicker');

    secondSidebarClicker.addEventListener('click', function () {
        secondSidebarClicker.classList.toggle('touched');
    });

    // Handle touch events
    secondSidebarClicker.addEventListener('touchstart', function () {
        secondSidebarClicker.classList.add('touched');
    });

    secondSidebarClicker.addEventListener('touchend', function () {
        secondSidebarClicker.classList.remove('touched');
    });
});
