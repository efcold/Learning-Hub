document.querySelectorAll('.nav-left a').forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.classList.add('active');
    });
    link.addEventListener('mouseleave', () => {
    });
    link.addEventListener('click', () => {
        document.querySelectorAll('.nav-left a').forEach(item => {
            item.classList.remove('active');
        });
        link.classList.add('active');
    });
});

window.onload = function() {
    const sidebarState = localStorage.getItem('sidebarVisible');
    const sidebar = document.getElementById('sidebar');
    if (sidebarState === 'false') {
        sidebar.style.display = 'none'; 
    }
};


// Function to handle sidebar item click and update active state
// Function to handle sidebar item click and update active state
document.addEventListener("DOMContentLoaded", function () {
    const sidebarItems = document.querySelectorAll('.sidebar-item');

    sidebarItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();

            // Update the active state in the sidebar
            updateActiveSidebarItem(this);

            // Get the data-content attribute of the clicked item
            const contentId = this.getAttribute('data-content');

            // Display the relevant content section
            displayContent(contentId);
        });
    });
});

// Function to update the active state of the sidebar
function updateActiveSidebarItem(activeItem) {
    const sidebarItems = document.querySelectorAll('.sidebar-item');

    // Remove active class from all sidebar items
    sidebarItems.forEach(item => item.classList.remove('active'));

    // Add active class to the clicked or updated item
    activeItem.classList.add('active');
}

// Function to display content based on the clicked sidebar item
function displayContent(contentId) {
    // Hide all content sections
    const allContents = document.querySelectorAll('.content-section');
    allContents.forEach(content => content.style.display = 'none');

    // Show the content section related to the clicked sidebar item
    const activeContent = document.getElementById(contentId);
    if (activeContent) {
        activeContent.style.display = 'block';
    }

    // Update the active state of the sidebar based on the displayed content
    const sidebarItem = document.querySelector(`.sidebar-item[data-content="${contentId}"]`);
    if (sidebarItem) {
        updateActiveSidebarItem(sidebarItem);
    }
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const isVisible = sidebar.style.display !== 'none';
    sidebar.style.display = isVisible ? 'none' : 'block';
    
    localStorage.setItem('sidebarVisible', !isVisible);
}


document.getElementById('toggle-sidebar').addEventListener('click', toggleSidebar);