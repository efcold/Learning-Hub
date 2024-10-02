<?php
include 'HomeIncludes/Header.php';

$titles = [
    "HTML Basics",
    "CSS Styling",
    "JavaScript Fundamentals",
    "PHP for Beginners",
    "Introduction to Python",
    "Web Development with React"
];

$descriptions = [
    "Learn the structure of web pages using HTML.",
    "Style your web pages with CSS for a polished look.",
    "Understand the fundamentals of JavaScript programming.",
    "Get started with PHP and server-side scripting.",
    "Explore the basics of Python programming.",
    "Build interactive UIs using React."
];

$urls = [
    "Courses.php",
    "Courses.php",
    "Courses.php",
    "Courses.php",
    "Courses.php",
    "Courses.php"
];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Homepage</title>
    <link href="https://fonts.googleapis.com/css2?family=Palaquin+Dark:wght@700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/Assets/CSS/index.css"> 
</head>


<main>
<h1 class="learn-to-code">LEARN TO CODE</h1>
    <div class="card-container">
        <?php for ($i = 0; $i < count($titles); $i++): ?>
            <div class="card">
                <h3><?php echo $titles[$i]; ?></h3>
                <p><?php echo $descriptions[$i]; ?></p>
                <button class="learn-button" onclick="location.href='<?php echo $urls[$i]; ?>';">Learn</button>
            </div>
        <?php endfor; ?>
    </div>
        
    <h1 class="create-learning-path">CREATE A LEARNING PATH</h1>
    <button class="path" onclick="location.href='LearningPath.php';">I want to be a Frontend Developer</button>
    <button class="path">I want to be a Backedn Developer</button>
    <button class="path">I want to be a Full Stack Developer</button>
</main>
