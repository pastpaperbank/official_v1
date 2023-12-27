document.addEventListener('DOMContentLoaded', function () {
    // Call filterContainers when the page has loaded
    filterContainers();

    const icon = document.querySelector('.icon');
    const search = document.querySelector('.search')

    if (icon && search) {
        icon.onclick = function () {
            search.classList.toggle('active')
        }
    }
});

function filterContainers() {
    var inputYear = document.getElementById('searchInput');

    if (!inputYear) {
        return; // Exit if the searchInput element is not found
    }

    var parentContainers = document.querySelectorAll('.parent_container');
    var noDataContainer = document.querySelector('.no_data_parent_container');

    // Hide all containers initially
    parentContainers.forEach(function (container) {
        container.style.display = 'none';
    });

    // Hide the no data container initially
    if (noDataContainer) {
        noDataContainer.style.display = 'none';
    }

    var inputValue = inputYear.value.trim();

    if (inputValue === '') {
        // If input is empty, show all containers
        parentContainers.forEach(function (container) {
            container.style.display = 'block';
        });
    } else {
        var found = false;

        // Loop through each container
        parentContainers.forEach(function (container) {
            var containerYear = container.getAttribute('data-year');

            // Check if the input year matches the container year
            if (containerYear === inputValue) {
                container.style.display = 'block';
                found = true;
            } else {
                container.style.display = 'none';
            }
        });

        // If no match found, display the no data container
        if (!found && noDataContainer) {
            noDataContainer.style.display = 'block';
        }
    }
}
