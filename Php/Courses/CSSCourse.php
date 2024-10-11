<?php
$showConditionalNav = true; 
include '../HomeIncludes/Header.php';
$showNav = true;
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Courses</title>
    <link rel="stylesheet" href="/Assets/CSS/Courses.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha384-k6RqeWeci5ZR/Lv4MR0sA0FfDOML2Z3GzC6F1U7+KnTq9zId2hF49S0F4E8e2j6" crossorigin="anonymous">
</head>
<main>
<div class="course-container"> 
<?php
    include '../HomeIncludes/Sidebar.php';
    ?>
     <div class="ass-card">
        <div class="main-content" id="main-content">
        </div>
    </div>
</div>
</main>
<?php
include '../HomeIncludes/Footer.php';
?>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://kit.fontawesome.com/852b931f78.js" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.4/dist/chart.umd.min.js"></script>
<script src="/Assets/JS/CSSCourse.js"></script>
</html>
