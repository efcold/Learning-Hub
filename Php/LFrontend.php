<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Progress Bar with Modules</title>
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

    <h1>Module Progress Tracker</h1>
    <div id="progress-container">
        <div id="progress-bar"></div>
    </div>
    <div id="button-container">
        <!-- Create 10 buttons -->
        <button onclick="incrementProgress()">Button 1</button>
        <button onclick="incrementProgress()">Button 2</button>
        <button onclick="incrementProgress()">Button 3</button>
        <button onclick="incrementProgress()">Button 4</button>
        <button onclick="incrementProgress()">Button 5</button>
        <button onclick="incrementProgress()">Button 6</button>
        <button onclick="incrementProgress()">Button 7</button>
        <button onclick="incrementProgress()">Button 8</button>
        <button onclick="incrementProgress()">Button 9</button>
        <button onclick="incrementProgress()">Button 10</button>
    </div>

    <div id="content-area">
        <?php
        // Assuming you pass the current step as a query parameter ?step=1,2,3
        if (isset($_GET['step'])) {
            $step = $_GET['step'];
            switch ($step) {
                case 1:
                    include '../Php/Courses/LHTMLCourse.php';
                    break;
                case 2:
                    include '../Php/Courses/LCSSCourse.php';
                    break;
                case 3:
                    include '../Php/Courses/LJSCourse.php';
                    break;
                default:
                    echo "Invalid step.";
            }
        } else {
            // Default to first file
            include '../Php/Courses/LHTMLCourse.php';
        }
        ?>
    </div>

    <script>
        let progress = 0;

        // Get the current step from the URL
        const urlParams = new URLSearchParams(window.location.search);
        let currentStep = parseInt(urlParams.get('step')) || 1; // Default to step 1

        // Initialize progress based on the current step
        function initializeProgress() {
            if (currentStep > 1) {
                // Do not set progress to 100% automatically
                document.getElementById('progress-bar').style.width = progress + '%';
            }
        }

        function incrementProgress() {
            if (progress < 100) {
                progress += 10;
                document.getElementById('progress-bar').style.width = progress + '%';
                
                if (progress === 100) {
                    alert("Module is finished!");
                    displayNextModuleButton(); // Show button to go to the next module
                }
            }
        }

        function displayNextModuleButton() {
            if (currentStep < 3) { // Assuming there are 3 modules
                const nextButton = document.createElement('button');
                nextButton.innerText = 'Next Module';
                nextButton.onclick = nextModule;
                document.getElementById('button-container').appendChild(nextButton);
            } else {
                alert("You have completed all modules!");
            }
        }

        function nextModule() {
            if (currentStep < 3) { // Assuming there are 3 modules
                currentStep++;
                // Redirect to the next module
                window.location.href = '?step=' + currentStep;
            }
        }

        initializeProgress(); // Call to set initial progress
    </script>

</body>
</html>