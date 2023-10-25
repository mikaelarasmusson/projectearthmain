document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.menu-item');
    const menuIcon = document.getElementById('menu-icon'); // Get the hamburger icon

    // Function to handle menu item click for smaller screens (under or equal to 700px)
    function handleMenuItemClickUnder700(event) {
        // Prevent navigating to the main link
        event.preventDefault();
        const submenu = event.target.nextElementSibling;

        // Check if the submenu is already open
        const isSubMenuOpen = submenu.classList.contains('active');

        if (!isSubMenuOpen) {
            // If the submenu was closed, open it
            submenu.classList.add('active');
        } else {
            // If the submenu was open, navigate to the link
            window.location.href = event.target.getAttribute('href');
        }
    }

    // Function to handle menu item click for larger screens (over 700px)
    function handleMenuItemClickOver700(event) {
        // Prevent navigating to the main link
        event.preventDefault();

        // Navigate to the link directly 
        window.location.href = event.target.getAttribute('href');
    }

    // Function to toggle the visibility of the dropdown menu
    function toggleDropdownMenu() {
        const dropdownContent = document.querySelector('.dropdown-content');

        // Check if the dropdown menu is open
        if (dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none'; // Close the dropdown menu
        } else {
            dropdownContent.style.display = 'block'; // Open the dropdown menu
        }
    }

    // Add or remove event listeners based on screen width
    function updateEventListeners() {
        const screenWidth = window.innerWidth;

        // Add or remove event listeners for each menu item
        menuItems.forEach(function (menuItem) {
            const mainLink = menuItem.querySelector('a');

            if (screenWidth <= 700) {
                // Add click handler for main menu items when screen width is <= 700px
                mainLink.addEventListener('click', handleMenuItemClickUnder700);
                mainLink.removeEventListener('click', handleMenuItemClickOver700);
            } else {
                // Remove click handler for smaller screens (<= 700px)
                mainLink.removeEventListener('click', handleMenuItemClickUnder700);

                // Add click handler for main menu items when screen width is > 700px
                mainLink.addEventListener('click', handleMenuItemClickOver700);
            }
        });

        // Add click handler for the hamburger icon to toggle the dropdown menu
        if (screenWidth <= 700) {
            menuIcon.addEventListener('click', toggleDropdownMenu);
        } else {
            menuIcon.removeEventListener('click', toggleDropdownMenu);
        }
    }

    // Initial setup
    updateEventListeners();

    // Listen for window resize and load events to update the event listeners
    window.addEventListener('resize', updateEventListeners);
    window.addEventListener('load', updateEventListeners);
});