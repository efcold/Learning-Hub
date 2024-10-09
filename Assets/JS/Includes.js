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


document.addEventListener("DOMContentLoaded", function () {
    const sidebarItems = document.querySelectorAll('.sidebar-item');

    sidebarItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();


            updateActiveSidebarItem(this);


            const contentId = this.getAttribute('data-content');


            displayContent(contentId);
        });
    });
});

function updateActiveSidebarItem(activeItem) {
    const sidebarItems = document.querySelectorAll('.sidebar-item');


    sidebarItems.forEach(item => item.classList.remove('active'));

    activeItem.classList.add('active');
}

function displayContent(contentId) {

    const allContents = document.querySelectorAll('.content-section');
    allContents.forEach(content => content.style.display = 'none');

    const activeContent = document.getElementById(contentId);
    if (activeContent) {
        activeContent.style.display = 'block';
    }

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