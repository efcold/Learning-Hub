<?php
include './HomeIncludes/Header.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Courses with Progress Bar</title>
    <link rel="stylesheet" href="/Assets/CSS/Courses.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha384-k6RqeWeci5ZR/Lv4MR0sA0FfDOML2Z3GzC6F1U7+KnTq9zId2hF49S0F4E8e2j6" crossorigin="anonymous">
    <style>
        #progress-container {
            width: 100%;
            background-color: #f3f3f3;
            border: 1px solid #ccc;
            border-radius: 5px;
            margin-bottom: 20px;
        }

        #progress-bar {
            width: 0%;
            height: 30px;
            background-color: #4caf50;
            border-radius: 5px;
        }

        button {
            margin: 5px;
        }
    </style>
</head>
<body>
    <?php include './HomeIncludes/Header.php'; ?>
    <main>
        <div class="course-container">
            <?php include './HomeIncludes/Sidebar.php'; ?>
            <div class="ass-card">
                <div class="main-content" id="main-content">
                </div>
                <div id="progress-container">
                    <div id="progress-bar"></div>
                </div>
            </div>
        </div>
    </main>
    <?php include './HomeIncludes/Footer.php'; ?>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://kit.fontawesome.com/852b931f78.js" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.4/dist/chart.umd.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha384-k6RqeWeci5ZR/Lv4MR0sA0FfDOML2Z3GzC6F1U7+KnTq9zId2hF49S0F4E8e2j6" crossorigin="anonymous"><script src="/Assets/JS/LHTMLCourse.js"></script>
</html>

