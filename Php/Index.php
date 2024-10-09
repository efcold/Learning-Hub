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
    "/Php/Courses/HTMLCourse.php",
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
<body>
<?php
include 'HomeIncludes/H-Sidebar.php';
?>
<main>
    <h1 class="heading-learn-to-code">LEARN TO CODE</h1>
    <div class="card-container-courses">
        <?php for ($i = 0; $i < count($titles); $i++): ?>
            <div class="card-course">
                <h3><?php echo $titles[$i]; ?></h3>
                <p><?php echo $descriptions[$i]; ?></p>
                <button class="button-learn-more" onclick="location.href='<?php echo $urls[$i]; ?>';">Learn</button>
            </div>
        <?php endfor; ?>
    </div>
        
    <h1 class="heading-create-learning-path">CREATE A LEARNING PATH</h1>
    <button class="button-learning-path" onclick="location.href='LearningPath.php';">I want to be a Frontend Developer</button>
    <button class="button-learning-path">I want to be a Backend Developer</button>
    <button class="button-learning-path">I want to be a Full Stack Developer</button>
</main>
        </body>
        <?php
include 'HomeIncludes/Footer.php';
?>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="/Assets/JS/H-Sidebar.js"></script>