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


function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const isVisible = sidebar.style.display !== 'none';
    sidebar.style.display = isVisible ? 'none' : 'block';
    
    localStorage.setItem('sidebarVisible', !isVisible);
}


document.getElementById('toggle-sidebar').addEventListener('click', toggleSidebar);