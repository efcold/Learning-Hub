// Select all navigation links
const navLinks = document.querySelectorAll('.c-nav a');

// Function to set the active link based on the current URL
function setActiveLink() {
    const currentURL = window.location.pathname; // Get the current page URL path

    navLinks.forEach(link => {
        // Check if the href of the link matches the current URL
        if (link.getAttribute('href') === currentURL) {
            link.parentElement.classList.add('active'); // Add active class to the matched link's parent
        } else {
            link.parentElement.classList.remove('active'); // Remove active class from other links' parents
        }
    });
}

// Add click event to all nav links
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Remove active class from all links' parents
        navLinks.forEach(nav => nav.parentElement.classList.remove('active'));
        // Add active class to the clicked link's parent
        this.parentElement.classList.add('active');
    });
});

// Check if the conditional navigation should be displayed on page load
document.addEventListener('DOMContentLoaded', function() {
    if (typeof showConditionalNav !== 'undefined' && showConditionalNav) {
        document.getElementById('conditional-nav').style.display = 'block';
    }
    setActiveLink(); // Set the active link based on the current URL
});
