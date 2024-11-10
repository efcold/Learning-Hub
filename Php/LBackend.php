<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Progress Bar with PHP Files</title>
</head>
<body>


    <!-- Content Display Area -->
    <div id="content-area">
        <?php
        // Assuming you pass the current step as a query parameter ?step=1,2,3
        if (isset($_GET['step'])) {
            $step = $_GET['step'];
            switch ($step) {
                case 1:
                    include '/Php/Courses/LPHPCourse.php';
                    break;
                case 2:
                    include '/Php/Courses/LPYTHONCourse.php';
                    break;
                case 3:
                    include '/Php/Courses/LREACTCourse.php';
                    break;
                default:
                    echo "Invalid step.";
            }
        } else {
            // Default to first file
            include '../Php/Courses/LPHPCourse.php';
        }
        ?>
    </div>

</body>
</html>
