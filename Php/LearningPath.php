<?php 
include 'HomeIncludes/Header.php';
?>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Progress Bar Example</title>
    <link rel="stylesheet" href="/Assets/CSS/Path.css"> 
</head>
<body>
<?php
include 'HomeIncludes/H-Sidebar.php';
?>
<main>
    <div class="card-container">
        <h1 class="Learning-Path">Choose Learning Path</h1>
        <div class="path-cards">
            <div class="path-card" data-path="frontend">
                <h2 class="card-title">Frontend Development</h2>
                <p class="card-des">These are the languages you will learn</p>
                <div class="progress-container">
                    <div class="progress-bar" style="width: 10%;"></div>
                </div>
                <div class="language-row">CSS [Build web pages]</div>
                <div class="language-row">HTML [Style web pages]</div>
                <div class="language-row">JavaScript [Program web pages]</div>
                <button type="button" class="btn-1" onclick="location.href='/Php/LFrontend.php';">Start Learning</button>
            </div>

            <div class="path-card" data-path="backend">
                <h2 class="card-title">Backend Development</h2>
                <p class="card-des">These are the languages you will learn</p>
                <div class="progress-container">
                    <div class="progress-bar" style="width: 10%;"></div>
                </div>
                <div class="language-row">PHP [Server-side scripting]</div>
                <div class="language-row">Python [Backend programming]</div>
                <div class="language-row">Node.js [Web applications]</div>
                <button type="button" class="btn-1" onclick="location.href='/Php/LBackend.php';">Start Learning</button>
            </div>

            <div class="path-card" data-path="fullstack">
                <h2 class="card-title">Full Stack Development</h2>
                <p class="card-des">These are the languages you will learn</p>
                <div class="progress-container">
                    <div class="progress-bar" style="width: 10%;"></div>
                </div>
                <div class="language-row">CSS [Build web pages]</div>
                <div class="language-row">HTML [Style web pages]</div>
                <div class="language-row">JavaScript [Program web pages]</div>
                <div class="language-row">PHP [Server-side scripting]</div>
                <div class="language-row">Python [Backend programming]</div>
                <div class="language-row">React [Web applications]</div>
                <button type="button" class="btn-1" onclick="location.href='/Php/LFullstack.php';">Start Learning</button>
            </div>
        </div>
    </div>

    <script src="/Assets/JS/Path.js"></script> 
    <script src="/Assets/JS/H-Sidebar.js"></script>


</main>
<?php
include 'HomeIncludes/Footer.php';
?>
</html>
