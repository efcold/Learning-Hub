<?php
include 'HomeIncludes/Header.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assessment</title>
    <link href="https://fonts.googleapis.com/css2?family=Palaquin+Dark:wght@700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/Assets/CSS/Assesment.css"> 
</head>
<body>
<?php
include 'HomeIncludes/H-Sidebar.php';
?>
<div class="assm-card-container">
    <h1>Quiz Summary</h1>
    <?php 
    $cards = [
        "HTML" => [
            "HTML is the standard markup language for creating web pages.",
            "It describes the structure of a webpage and consists of a series of elements.",
            "HTML elements are represented by tags.",
            "Semantic HTML helps in SEO."
        ],
        "CSS" => [
            "CSS is a style sheet language used for describing the presentation of a document written in HTML or XML.",
            "CSS controls the layout of multiple web pages all at once.",
            "It allows for responsive design and media queries.",
            "CSS animations make web pages more interactive."
        ],
        "JAVASCRIPT" => [
            "JavaScript is a high-level, dynamic, untyped, and interpreted programming language.",
            "It is a core technology of the World Wide Web.",
            "JavaScript enables interactive web pages.",
            "It can be used on both client-side and server-side."
        ],
        "PHP" => [
            "PHP is a popular general-purpose scripting language especially suited to web development.",
            "It can be embedded into HTML.",
            "PHP is widely used for server-side scripting.",
            "PHP frameworks like Laravel help in rapid development."
        ],
        "Python" => [
            "SQL (Structured Query Language) is a domain-specific language used in programming.",
            "It is used for managing and manipulating relational databases.",
            "Common SQL commands include SELECT, INSERT, UPDATE, and DELETE.",
            "SQL is essential for data analysis."
        ],
        "React" => [
            "C# is a modern, object-oriented programming language developed by Microsoft.",
            "It is part of the .NET initiative.",
            "C# is used for developing a wide range of applications.",
            "It has strong typing and is ideal for Windows development."
        ]
    ];


    $redDonutCourse = "CSS"; 

    foreach ($cards as $title => $details): ?>
        <div class="assm-card">
            <div class="assm-card-headers">
                <span class="assm-card-titles"><?= $title ?></span>
                <div class="assm-progress-bar-container">
                    <div class="assm-progress-bar" style="width: <?= (array_search($title, array_keys($cards)) + 1) * 15 ?>%;"></div>
                </div>
                <span class="assm-dropdown-icon" onclick="toggleDetails(this)">▼</span>
            </div>
            <div class="assm-card-details" style="display: none;">
                <div class="assm-details-list">
                    <?php foreach ($details as $detail): ?>
                        <div class="assm-detail-item">
                            <div class="assm-donut-icon" style="background-color: <?= ($title === $redDonutCourse) ? 'red' : 'green' ?>;"></div>
                            <p><?= $detail ?></p>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
            <div class="assm-button-container" style="display: none;">
                <button class="assm-action-button">Learn More</button>
            </div>
        </div>
    <?php endforeach; ?>
</div>

<script src="/Assets/JS/Assesment.js"></script>
</body>
<?php
include 'HomeIncludes/Footer.php';
?>
<script src="/Assets/JS/H-Sidebar.js"></script>
