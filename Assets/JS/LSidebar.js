document.addEventListener('DOMContentLoaded', function () {
    const sidebarLogo = document.getElementById('sidebar-logo');
    
    // Set the logo source and alt text
    sidebarLogo.src = Logo.src; // Set the logo source
    sidebarLogo.alt = Logo.alt; // Set the logo alt text
    
    const sidebarItems = document.querySelectorAll('.sidebar-item');
    
    sidebarItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent the default action
            
            // Remove 'active' class from all items and add to the clicked item
            sidebarItems.forEach(el => el.classList.remove('active'));
            this.classList.add('active');

            // Get the content data attribute
            const contentId = this.getAttribute('data-content');

            // Call the function to update content based on the clicked item
            updateSidebarContent(contentId);
        });
    });
     
    sidebarItems.forEach(item => {
        const contentKey = item.getAttribute('data-content');
        const category = categoryTitle[contentKey];

        if (category) {
            item.querySelector('i').className = category.icon; // Set the icon class
            item.innerHTML = `<i class="${category.icon}"></i> ${category.title}`; // Set the icon and title text
        }
    }); 

    function updateSidebarContent(contentId) {
        // Logic to change sidebar content based on contentId
        console.log(`Displaying content for ${contentId}`);
        
        // Example: Update a content section in the main area
        const contentSection = document.querySelector('.card-container-courses');
        contentSection.innerHTML = `<h3>${contentId} Content</h3><p>This is the content for ${contentId}.</p>`;
    }
    
});
