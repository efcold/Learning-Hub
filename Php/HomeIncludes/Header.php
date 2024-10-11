<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="stylesheet" href="/Assets/CSS/Header.css">
    <link rel="stylesheet" href="/Assets/CSS/C-Nav.css">
         <nav>
        <ul>
            <div class="group1">
                <li>
                    <div class="menu-icon" onclick="toggleSidebar()">
                        <img src="/Assets/Images/Nav/menu.png" alt="Menu Icon">
                    </div>
                </li>
                <li class="logo">
                    <img src="/Assets/Images/Nav/DS.png" alt="Logo" id="logo">
                </li>
            </div>
            <div class="group2">
                <li><a href="#" class="home"><img src="/Assets/Images/Nav/home.png" alt="Home" id="home"><label for="home" class="navbar-label">Home</label></a></li>
                <li><a href="#" class="project"><img src="/Assets/Images/Nav/project.png" alt="Project" id="project"><label for="project" class="navbar-label">Project Management</label></a></li>
                <li><a href="/Php/Index.php" class="toga"><img src="/Assets/Images/Nav/graduate.png" alt="Learning" id="toga"><label for="toga" class="navbar-label">Learning Hub</label></a></li>
            </div>
            <li class="search">
                <img src="/Assets/Images/Nav/search.png" alt="Search" class="search-icon">
                <input type="search" placeholder="Search.." class="search-bar">
            </li>
            <div class="group3">
                <li><a href="#" class="notifications"><img src="/Assets/Images/Nav/bell-ring.png" alt="Notifications" id="notifications"></a></li>
                <li><a href="#" class="profile"><img src="/Assets/Images/Nav/user.png" alt="Profile" id="profile"></a></li>
                <li><a href="#" class="message"><img src="/Assets/Images/Nav/message.png" alt="Message" id="message"></a></li>
            </div>
        </ul>
    </nav> 

    <nav class="c-nav" id="conditional-nav" style="display: none;">
    <ul>
    <li>
        <a href="/Php/Courses/HTMLCourse.php" class="nav-item active">
            <i class="fab fa-html5 c-nav-icon"></i> HTML
        </a>
    </li>
    <li>
        <a href="/Php/Courses/CSSCourse.php" class="nav-item">
            <i class="fab fa-css3-alt c-nav-icon"></i> CSS
        </a>
    </li>
    <li>
        <a href="#" class="nav-item">
            <i class="fab fa-js-square c-nav-icon"></i> JAVASCRIPT
        </a>
    </li>
    <li>
    <a href="#" class="nav-item">
            <i class="fab fa-php c-nav-icon"></i> PHP
        </a>
    </li>
    <li>
        <a href="#" class="nav-item">
            <i class="fas fa-gem c-nav-icon"></i> RUBY
        </a>
    </li>
    <li>
    <a href="#" class="nav-item">
            <i class="fab fa-react c-nav-icon"></i> REACT
        </a>
    </li>
</ul>

</nav>

</head>
<body>

        <main>
        </main>
        <script>
    // Pass the PHP variable to JavaScript
    var showConditionalNav = <?php echo json_encode(isset($showConditionalNav) && $showConditionalNav); ?>;
</script>
    </body>
    <script src="/Assets/JS/Includes.js"></script>
    <script src="/Assets/JS/C-Nav.js"></script>
