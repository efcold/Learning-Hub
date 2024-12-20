const Logo={
    src: "/Assets/Images/Index/PHP.png",
    alt: "Course Logo" 
}
const categoryTitle = {
    content1: { icon: 'fas fa-server', title: 'Introduction to PHP' },
    content2: { icon: 'fas fa-code', title: 'PHP Syntax' },
    content3: { icon: 'fas fa-tag', title: 'PHP Variables' },
    content4: { icon: 'fas fa-comment-dots', title: 'PHP Comments' },
    content5: { icon: 'fas fa-database', title: 'PHP Data Types' },
    content6: { icon: 'fas fa-exchange-alt', title: 'PHP Conditionals' },
    content7: { icon: 'fas fa-sync-alt', title: 'PHP Loops' },
    content8: { icon: 'fas fa-list', title: 'PHP Arrays' },
    content9: { icon: 'fas fa-file-code', title: 'PHP Functions' },
    content10: { icon: 'fas fa-folder-open', title: 'PHP File Handling' },
};

const categoryContent = {
    content1: `
<div>
    <h1>Introduction to PHP</h1>
    <h2>Module 1</h2>
    <hr>
    <div class="definition">
        <h3>What is PHP?</h3>
        <p>PHP stands for "PHP: Hypertext Preprocessor." It is a widely-used open-source scripting language, especially suited for web development. PHP scripts are executed on the server. It is used to manage dynamic content, databases, session tracking, and build websites.</p>
    </div>
    
    <hr>

    <div class="basic-syntax">
        <h3>Basic Syntax and Demo</h3>
        <p>PHP scripts are enclosed within <code>&lt;?php</code> and <code>?&gt;</code> tags. Here’s a simple PHP script:</p>
        <pre>
        <img src="/Assets/Images/Courses/C-PHP/m1-1.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>
    </div>

    <hr>

    <div class="expected-output">
        <h3>Expected Output</h3>
        <p>The output of the above PHP script will be:</p>
        <pre>
        <img src="/Assets/Images/Courses/C-PHP/m1-2.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>
    </div>

    <hr>

    <button class="next-module" data-next="quiz1">Take Quiz</button>
</div>
`
,
content2: `
<div>
    <h1>PHP Syntax</h1>
    <h2>Module 2</h2>
    <hr>
    <div class="overview">
        <h3>Overview</h3>
        <p>PHP can be embedded within HTML. Below is an example:</p>
        <pre>
          <pre>
        <img src="/Assets/Images/Courses/C-PHP/m2-1.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>
        </pre>
    </div>

    <hr>

    <div class="expected-output">
        <h3>Expected Output</h3>
        <p>The output of the above PHP script will display:</p>
        <pre>
        <img src="/Assets/Images/Courses/C-PHP/m2-2.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>
    </div>

    <hr>

    <button class="next-module" data-next="quiz2">Take Quiz</button>
</div>
`
,
content3: `
<div>
    <h1>PHP Variables</h1>
    <h2>Module 3</h2>
    <hr>
    <div class="overview">
        <h3>Overview</h3>
        <p>Variables store data such as strings, numbers, and arrays. PHP variable names start with <code>$</code>.</p>
    </div>

    <hr>

    <div class="example">
        <h3>Example</h3>
        <pre>
        <img src="/Assets/Images/Courses/C-PHP/m3-1.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>
    </div>

    <hr>

    <div class="expected-output">
        <h3>Expected Output</h3>
        <p>The output of the above PHP script will display:</p>
        <pre>
        <img src="/Assets/Images/Courses/C-PHP/m3-2.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>
    </div>

    <hr>

    <button class="next-module" data-next="quiz3">Take Quiz</button>
</div>
`
,
content4: `
<div>
    <h1>PHP Comments</h1>
    <h2>Module 4</h2>
    <hr>
    <div class="overview">
        <h3>Overview</h3>
        <p>Comments are useful for annotating code. PHP supports single-line and multi-line comments.</p>
    </div>

    <hr>

    <div class="example">
        <h3>Example</h3>
        <h4>Single-line comment:</h4>
        <pre>
        <img src="/Assets/Images/Courses/C-PHP/m4-1.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>

        <h4>Multi-line comment:</h4>
        <pre>
        <img src="/Assets/Images/Courses/C-PHP/m4-2.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>
    </div>

    <hr>

    <button class="next-module" data-next="quiz4">Take Quiz</button>
</div>
`
,
content5: `
<div>
    <h1>PHP Data Types</h1>
    <h2>Module 5</h2>
    <hr>
    <div class="overview">
        <h3>Overview</h3>
        <p>PHP supports several data types:</p>
        <ul>
            <li><strong>String:</strong> Text.</li>
            <li><strong>Integer:</strong> Whole numbers.</li>
            <li><strong>Float:</strong> Decimal numbers.</li>
            <li><strong>Boolean:</strong> True or False.</li>
            <li><strong>Array:</strong> A collection of values.</li>
            <li><strong>Object:</strong> An instance of a class.</li>
        </ul>
    </div>

    <hr>

    <div class="example">
        <h3>Example</h3>
        <pre>
        <img src="/Assets/Images/Courses/C-PHP/m5-1.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>
    </div>

    <hr>

    <button class="next-module" data-next="quiz5">Take Quiz</button>
</div>
`,

content6: `
<div>
    <h1>PHP Conditionals</h1>
    <h2>Module 6</h2>
    <hr>
    <div class="overview">
        <h3>Overview</h3>
        <p>PHP uses <code>if</code>, <code>else</code>, and <code>elseif</code> statements for conditional execution.</p>
    </div>

    <hr>

    <div class="example">
        <h3>Example</h3>
        <pre>
        <img src="/Assets/Images/Courses/C-PHP/m6-1.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>
    </div>
        <h3>Expected Output:</h3>
        <pre>
        <img src="/Assets/Images/Courses/C-PHP/m6-2.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>
    <hr>

    <button class="next-module" data-next="quiz6">Take Quiz</button>
</div>
`,

content7: `
<div>
    <h1>PHP Loops</h1>
    <h2>Module 7</h2>
    <hr>
    <div class="overview">
        <h3>Overview</h3>
        <p>Loops allow you to execute a block of code multiple times. Common loops in PHP include <code>for</code>, <code>while</code>, and <code>foreach</code>.</p>
    </div>

    <hr>

    <div class="example">
        <h3>Example</h3>
        <pre>
        <img src="/Assets/Images/Courses/C-PHP/m7-1.png" alt="HTML Structure Example" style="max-width:20%; height:auto;">
        </pre>
    </div>
    <h3>Expected Output:</h3>
    <pre>
        <img src="/Assets/Images/Courses/C-PHP/m7-2.png" alt="HTML Structure Example" style="max-width:20%; height:auto;">
        </pre>
    <hr>

    <button class="next-module" data-next="quiz7">Take Quiz</button>
</div>
`,

content8: `
<div>
    <h1>PHP Arrays</h1>
    <h2>Module 8</h2>
    <hr>
    <div class="overview">
        <h3>Overview</h3>
        <p>Arrays are used to store multiple values in a single variable. PHP supports both indexed and associative arrays.</p>
    </div>

    <hr>

    <div class="example">
        <h3>Example</h3>
        <pre>
        <img src="/Assets/Images/Courses/C-PHP/m8-1.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>
    </div>
        <h3>Expected Output:</h3>
        <pre>
        <img src="/Assets/Images/Courses/C-PHP/m8-2.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>
    <hr>

    <button class="next-module" data-next="quiz8">Take Quiz</button>
</div>
`,

content9: `
<div>
    <h1>PHP Functions</h1>
    <h2>Module 9</h2>
    <hr>
    <div class="overview">
        <h3>Overview</h3>
        <p>Functions are reusable blocks of code that perform a specific task. You can create custom functions.</p>
    </div>

    <hr>

    <div class="example">
        <h3>Example</h3>
        <pre>
        <img src="/Assets/Images/Courses/C-PHP/m9-1.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>
    </div>
        <h3>Example</h3>
        <pre>
        <img src="/Assets/Images/Courses/C-PHP/m9-2.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>
    <hr>

    <button class="next-module" data-next="quiz9">Take Quiz</button>
</div>
`,

content10: `
<div>
    <h1>PHP File Handling</h1>
    <h2>Module 10</h2>
    <hr>
    <div class="overview">
        <h3>Overview</h3>
        <p>PHP can read and write files on the server.</p>
    </div>

    <hr>

    <div class="example">
        <h3>Example</h3>
        <pre>
        <img src="/Assets/Images/Courses/C-PHP/m10-1.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>
    </div>
        <h3>Example</h3>
        <pre>
        <img src="/Assets/Images/Courses/C-PHP/m10-2.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>
    <hr>

    <button class="next-module" data-next="quiz10">Take Quiz</button>
</div>
`
,

};  

const quizzes = {
    quiz1: `
    <h1>QUIZ # 1</h1>
        <h2>What does PHP stand for?</h2>
        <div class="quiz-options">
            <div class="quiz-card" onclick="selectQuizAnswer(1, 'Personal Home Page')">A) Personal Home Page</div>
            <div class="quiz-card" onclick="selectQuizAnswer(1, 'PHP: Hypertext Preprocessor')">B) PHP: Hypertext Preprocessor</div>
            <div class="quiz-card" onclick="selectQuizAnswer(1, 'Professional Hypertext Page')">C) Professional Hypertext Page</div>
            <div class="quiz-card" onclick="selectQuizAnswer(1, 'Preprocessor HTML Page')">D) Preprocessor HTML Page</div>
        </div>
        <div id="selected-answer-1" class="selected-answer-container"></div>
        <button class="next-module" data-next="content2">Next Module</button>
    `,
    quiz2: `
    <h1>QUIZ # 2</h1>
        <h2>Which of the following is the correct way to embed PHP within HTML?</h2>
        <div class="quiz-options">
            <div class="quiz-card" onclick="selectQuizAnswer(2, 'php echo Hello!; /php')">A) php echo "Hello!"; </php></div>
            <div class="quiz-card" onclick="selectQuizAnswer(2, '?php echo Hello!; ?')">B) ?php echo "Hello!"; ?</div>
            <div class="quiz-card" onclick="selectQuizAnswer(2, 'script echo Hello!; /script')">C) script echo "Hello!"; /script</div>
            <div class="quiz-card" onclick="selectQuizAnswer(2, 'PHP echo Hello!; /PHP')">D) PHP echo "Hello!"; /PHP</div>
        </div>
        <div id="selected-answer-2" class="selected-answer-container"></div>
        <button class="next-module" data-next="content3">Next Module</button>
    `,
    quiz3: `
    <h1>QUIZ # 3</h1>
        <h2>What symbol is used to declare a variable in PHP?</h2>
        <div class="quiz-options">
            <div class="quiz-card" onclick="selectQuizAnswer(3, '#')">A) #</div>
            <div class="quiz-card" onclick="selectQuizAnswer(3, '%')">B) %</div>
            <div class="quiz-card" onclick="selectQuizAnswer(3, '$')">C) $</div>
            <div class="quiz-card" onclick="selectQuizAnswer(3, '&')">D) &</div>
        </div>
        <div id="selected-answer-3" class="selected-answer-container"></div>
        <button class="next-module" data-next="content4">Next Module</button>
    `,
    quiz4: `
    <h1>QUIZ # 4</h1>
        <h2>Which of the following is used to create a single-line comment in PHP?</h2>
        <div class="quiz-options">
            <div class="quiz-card" onclick="selectQuizAnswer(4, '//')">A) //</div>
            <div class="quiz-card" onclick="selectQuizAnswer(4, '/* */')">B) /* */</div>
            <div class="quiz-card" onclick="selectQuizAnswer(4, '#')">C) #</div>
            <div class="quiz-card" onclick="selectQuizAnswer(4, '!----')">D) !----</div>
        </div>
        <div id="selected-answer-4" class="selected-answer-container"></div>
        <button class="next-module" data-next="content5">Next Module</button>
    `,
    quiz5: `
    <h1>QUIZ # 5</h1>
        <h2>Which of the following is a valid PHP data type?</h2>
        <div class="quiz-options">
            <div class="quiz-card" onclick="selectQuizAnswer(5, 'String')">A) String</div>
            <div class="quiz-card" onclick="selectQuizAnswer(5, 'List')">B) List</div>
            <div class="quiz-card" onclick="selectQuizAnswer(5, 'Queue')">C) Queue</div>
            <div class="quiz-card" onclick="selectQuizAnswer(5, 'Dictionary')">D) Dictionary</div>
        </div>
        <div id="selected-answer-5" class="selected-answer-container"></div>
        <button class="next-module" data-next="content6">Next Module</button>
    `,
    quiz6: `
    <h1>QUIZ # 6</h1>
        <h2>Which statement is used to execute code based on a condition in PHP?</h2>
        <div class="quiz-options">
            <div class="quiz-card" onclick="selectQuizAnswer(6, 'for')">A) for</div>
            <div class="quiz-card" onclick="selectQuizAnswer(6, 'if')">B) if</div>
            <div class="quiz-card" onclick="selectQuizAnswer(6, 'switch')">C) switch</div>
            <div class="quiz-card" onclick="selectQuizAnswer(6, 'while')">D) while</div>
        </div>
        <div id="selected-answer-6" class="selected-answer-container"></div>
        <button class="next-module" data-next="content7">Next Module</button>
    `,
    quiz7: `
    <h1>QUIZ # 7</h1>
        <h2>Which PHP loop will execute at least once, even if the condition is false?</h2>
        <div class="quiz-options">
            <div class="quiz-card" onclick="selectQuizAnswer(7, 'for')">A) for</div>
            <div class="quiz-card" onclick="selectQuizAnswer(7, 'while')">B) while</div>
            <div class="quiz-card" onclick="selectQuizAnswer(7, 'foreach')">C) foreach</div>
            <div class="quiz-card" onclick="selectQuizAnswer(7, 'do...while')">D) do...while</div>
        </div>
        <div id="selected-answer-7" class="selected-answer-container"></div>
        <button class="next-module" data-next="content8">Next Module</button>
    `,
    quiz8: `
    <h1>QUIZ # 8</h1>
        <h2>Which of the following is an indexed array in PHP?</h2>
        <div class="quiz-options">
            <div class="quiz-card" onclick="selectQuizAnswer(8, 'array(Apple, Banana, Cherry)')"> A) array(Apple, Banana, Cherry) </div>
            <div class="quiz-card" onclick="selectQuizAnswer(8, 'array(fruit = Apple, vegetable = Carrot)')"> B) array(fruit = Apple, vegetable = Carrot)</div>
            <div class="quiz-card" onclick="selectQuizAnswer(8, 'array(1 = Apple, 2 = Banana)')"> C) array(1 = Apple, 2 = Banana) </div>
            <div class="quiz-card" onclick="selectQuizAnswer(8, 'array()')"> D) array()</div>
        </div>
        <div id="selected-answer-8" class="selected-answer-container"></div>
        <button class="next-module" data-next="content9">Next Module</button>
    `,
    quiz9: `
    <h1>QUIZ # 9</h1>
        <h2>How do you define a function in PHP?</h2>
        <div class="quiz-options">
            <div class="quiz-card" onclick="selectQuizAnswer(9, 'function greet()')">A) function greet()</div>
            <div class="quiz-card" onclick="selectQuizAnswer(9, 'def greet()')">B) def greet()</div>
            <div class="quiz-card" onclick="selectQuizAnswer(9, 'fn greet()')">C) fn greet()</div>
            <div class="quiz-card" onclick="selectQuizAnswer(9, 'function: greet()')">D) function: greet()</div>
        </div>
        <div id="selected-answer-9" class="selected-answer-container"></div>
        <button class="next-module" data-next="content10">Next Module</button>
    `,
    quiz10: `
    <h1>QUIZ # 10</h1>
        <h2>Which function is used to write data into a file in PHP?</h2>
        <div class="quiz-options">
            <div class="quiz-card" onclick="selectQuizAnswer(10, 'file_read()')">A) file_read()</div>
            <div class="quiz-card" onclick="selectQuizAnswer(10, 'fwrite()')">B) fwrite()</div>
            <div class="quiz-card" onclick="selectQuizAnswer(10, 'file_put_contents()')">C) file_put_contents()</div>
            <div class="quiz-card" onclick="selectQuizAnswer(10, 'write_file()')">D) write_file()</div>
        </div>
        <div id="selected-answer-10" class="selected-answer-container"></div>
        <button class="next-module" data-next="content11">Next Module</button>
        <div id="result-message"></div>
    `
};


const correctAnswers = {
    1: 'B) PHP: Hypertext Preprocessor',
    2: 'B) <?php echo \"Hello!\"; ?>',
    3: 'C) $',
    4: 'A) //',
    5: 'A) String',
    6: 'B) if',
    7: 'D) do...while',
    8: 'A) array(\"Apple\", \"Banana\", \"Cherry\")',
    9: 'A) function greet()',
    10: 'C) file_put_contents()'
};




let score = 0;
let currentQuestionIndex = 0;
const selectedAnswers = [];
const moduleQuizAnswers = {};

function selectQuizAnswer(module, answer) {
    moduleQuizAnswers[module] = answer; 

    const quizOptions = document.querySelectorAll(`#quiz${module} .quiz-card`);
    quizOptions.forEach(card => {
        card.classList.remove('selected');
    });

    const selectedCard = Array.from(quizOptions).find(card => card.textContent.trim() === answer);
    if (selectedCard) {
        selectedCard.classList.add('selected'); 
    }


    displaySelectedAnswer(module, answer);

    if (correctAnswers[module] === answer) {
        score++;
    }
}

function displaySelectedAnswer(module, answer) {
    const selectedAnswerContainer = document.getElementById(`selected-answer-${module}`);
    selectedAnswerContainer.innerHTML = `
        <div class="selected-answer-card">
            <h3>You selected:</h3>
            <p>${answer}</p>
        </div>
    `;
}


function displayQuiz(quizKey) {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = quizzes[quizKey];
    addNextModuleEventListener();

    const nextButton = mainContent.querySelector('.next-module');
    nextButton.classList.add('quiz-next-button');
    nextButton.setAttribute('data-module', quizKey.replace('quiz', '')); 
}


function showSummary() {

    window.scrollTo({ top: 0, behavior: 'smooth' });

    const resultMessage = document.getElementById('result-message');

    const moduleResults = Object.entries(moduleQuizAnswers).map(([module, answer]) => 
        `<div class="module-result"><strong>Module ${module}:</strong> Your answer: ${answer}</div>`
    ).join('');


    resultMessage.innerHTML = `
        <h2>Your Selected Answers:</h2>
        <div class="module-results">${moduleResults}</div>
        <div class="button-container">
            <button class="all-submit-button button" onclick="submitAssessment()">Submit Answers</button>
        </div>
    `;

    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = '';
    mainContent.appendChild(resultMessage);
}






function submitAssessment() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    let totalModuleCorrect = 0; // Variable to count correct answers in module quizzes

    // Generate the module results content
    const moduleResults = Object.entries(moduleQuizAnswers).map(([module, answer], index) => {
        const isCorrect = correctAnswers[module] === answer; 
        if (isCorrect) {
            totalModuleCorrect++; // Increment module correct count
        }
        return `
        <div class="question-result ${isCorrect ? 'correct' : 'incorrect'}">
            <p class="question-text"><strong>Module ${module} Quiz:</strong></p>
            <p class="answer-text">Your answer: <span class="${isCorrect ? 'correct-answer' : 'wrong-answer'}">${answer}</span></p>
            <p class="answer-text">Correct answer: <span class="correct-answer">${correctAnswers[module]}</span></p>
        </div>
    `;
    }).join('');

    // Generate the assessment questions results content


    const moduleScorePercentage = (totalModuleCorrect / Object.keys(moduleQuizAnswers).length) * 100; // Calculate module percentage

    // Create chart containers for a horizontal layout

    const moduleChartContainer = document.createElement('div');
    moduleChartContainer.className = "chart-canvas-container small-chart";

    // Create canvas elements for both charts

    const moduleCanvas = document.createElement('canvas');
    moduleCanvas.id = "module-chart";
    moduleCanvas.height = 120; // Reduced chart size

    moduleChartContainer.appendChild(moduleCanvas);

    // Updated result message to include both charts in a horizontal layout
    const resultMessage = `
        <div class="chart-container-horizontal">
         <div class="module-results-c">
                <h2>Module Quiz Results</h2>
                <h3>Total Correct Answers: ${totalModuleCorrect}</h3>
                <p class="score-percentage">${moduleScorePercentage.toFixed(2)}%</p>
                ${moduleChartContainer.outerHTML} <!-- Append the module chart container -->
            </div> 
        </div>
        ${moduleResults} <!-- Display module quiz answers -->
        <div class="buttons">
            <button class="learn-submit-button button next-course-btn" onclick="continueLearning()">Continue Learning</button>
        </div>`;

    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = resultMessage;



    const moduleLayout = ["Correct", "Wrong"];
    const moduleScore = [totalModuleCorrect, Object.keys(moduleQuizAnswers).length - totalModuleCorrect];
    const barColors = ["#4b9b74", "#dd5555"];

    const ctxModule = document.getElementById("module-chart").getContext("2d");
    new Chart(ctxModule, {
        type: "pie",
        data: {
            labels: moduleLayout,
            datasets: [{
                label: 'Module Quiz Results',
                backgroundColor: barColors,
                data: moduleScore,
                borderWidth: 0
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom'
                }
            }
        }
    });

    const nextCourseBtn = document.querySelector('.learn-submit-button');

    nextCourseBtn.addEventListener("click", function() {
        alert("Proceeding to the Next Course...");
        goToNextCourse();
    });
    
    function goToNextCourse() {
        // Array of course URLs in order
        const courses = [
            "/Php/Courses/HTMLCourse.php", 
            "/Php/Courses/CSSCourse.php", 
            "/Php/Courses/JSCourse.php", 
            "/Php/Courses/PHPCourse.php", 
            "/Php/Courses/PYTHONCourse.php", 
            "/Php/Courses/REACTCourse.php"
        ];
    
        // Get the current page URL
        const currentPage = window.location.pathname;
    
        // Find the index of the current page in the courses array
        const currentIndex = courses.indexOf(currentPage);
    
        // Determine the next course index
        let nextIndex = currentIndex + 1;
    
        // If current index is the last course, reset to the first course
        if (nextIndex >= courses.length) {
            nextIndex = 0; // Loop back to the first course or adjust as needed
        }
    
        // Redirect to the next course URL
        window.location.href = courses[nextIndex];
    }
}





document.querySelectorAll('.sidebar-item').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        const contentType = this.getAttribute('data-content');
        const mainContent = document.getElementById('main-content');
        if (categoryContent[contentType]) {
            mainContent.innerHTML = categoryContent[contentType];
            addNextModuleEventListener();
        } else if (contentType.startsWith('quiz')) {
            displayQuiz(contentType);
        }
    });
});

function setDefaultContent() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = categoryContent.content1;
    addNextModuleEventListener();
}

function addNextModuleEventListener() {
    document.querySelectorAll('.next-module').forEach(button => {
        button.addEventListener('click', function () {
            const mainContent = document.getElementById('main-content');
            const currentModule = parseInt(this.getAttribute('data-module'));
            const quizKeys = Object.keys(quizzes); // Get the quiz keys
            
            // Check if the current module is the last quiz
            const isLastQuiz = quizKeys[quizKeys.length - 1] === `quiz${currentModule}`;

            // If this is a quiz next button and answer not selected
            if (this.classList.contains('quiz-next-button') && !moduleQuizAnswers[currentModule]) {
                alert("Please pick an answer before proceeding.");
                return; // Exit if no answer is selected
            }

            // If this is the last quiz, change the button behavior to show the summary
            if (isLastQuiz) {
                this.textContent = "Show Summary"; // Change button text
                this.removeEventListener('click', arguments.callee); // Remove the old event listener
                
                // Create a new event listener to call showSummary
                this.addEventListener('click', function () {
                    showSummary(); // Show summary on click
                });
                return; // Stop here so it doesn't load the next content
            }

            // Load the next content (module, quiz, or assessment)
            const nextContent = this.getAttribute('data-next');
            if (categoryContent[nextContent]) {
                mainContent.innerHTML = categoryContent[nextContent];
                window.scrollTo({ top: 0, behavior: 'smooth' });
                addNextModuleEventListener(); // Reattach event listeners for the new content
                updateActiveSidebarItem(nextContent);
            } else if (nextContent === 'assessment') {
                displayAssessment();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                updateActiveSidebarItem('content11');
            } else if (quizzes[nextContent]) {
                displayQuiz(nextContent);
                window.scrollTo({ top: 0, behavior: 'smooth' });
                updateActiveSidebarItem(nextContent);
            }
        });
    });
}



function updateActiveSidebarItem(contentId) {
    const sidebarItems = document.querySelectorAll('.sidebar-item');

    sidebarItems.forEach(item => item.classList.remove('active'));

    const activeSidebarItem = document.querySelector(`.sidebar-item[data-content="${contentId}"]`);
    if (activeSidebarItem) {
        activeSidebarItem.classList.add('active');
    }
}


window.onload = setDefaultContent;
