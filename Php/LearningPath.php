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
    <h1 class="Learning-Path">Your Learning Path</h1>
    <div class="path-card">
        <h2 class="card-title">Frontend Development</h2>
        <P class="card-des">These are the languages you will learn</P>
        <div class="progress-container">
            <div class="progress-bar" id="progress-bar" style="width: 10%;"> </div> <!-- Example width -->
        </div>
        <div class="language-row">CSS [Build web pages]</div>
        <div class="language-row">HTML [Style web pages]</div>
        <div class="language-row">JavaScript [Program web pages]</div>
    </div>
    <button class="btn-1" id="increase-btn">Start Learning</button>
</div>
    <script src="/Assets/JS/Path.js"></script> 
    <script src="/Assets/JS/H-Sidebar.js"></script>
</body>
</main>
<?php
include 'HomeIncludes/Footer.php';
?>
</html>
