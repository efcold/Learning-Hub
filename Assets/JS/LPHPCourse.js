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
    content11: { icon: 'fas fa-check-circle', title: 'Assessment' },
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

content11: '<h1>Assessment</h1><p>Click Start assesment to answer all the question regarding this module!</p> <button class="next-module" data-next="assessment">Start Assessment</button>',
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



const assessmentQuestions = [
    { 
        question: "What does PHP stand for?", 
        choices: ["A) Personal Hypertext Processor", "B) PHP: Hypertext Preprocessor", "C) Preprocessor Hypertext PHP", "D) PHP Hypertext Protocol"], 
        selectedChoice: null, 
        correctAnswer: "B) PHP: Hypertext Preprocessor" 
    },
    { 
        question: "How do you define a variable in PHP?", 
        choices: ["A) By starting with #", "B) By starting with &", "C) By starting with $", "D) By starting with %"], 
        selectedChoice: null, 
        correctAnswer: "C) By starting with $" 
    },
    { 
        question: "What are the two types of comments in PHP?", 
        choices: ["A) Single-line and double-line", "B) Inline and block", "C) Single-line (//) and multi-line (/* ... */)", "D) Short and long"], 
        selectedChoice: null, 
        correctAnswer: "C) Single-line (//) and multi-line (/* ... */)" 
    },
    { 
        question: "What are the primary data types supported by PHP?", 
        choices: ["A) String, Integer, Float, Boolean, Array, Object", "B) Text, Number, Decimal, Boolean, List, Class", "C) Character, Integer, Float, Binary, Collection", "D) String, Int, Real, True/False, List, Entity"], 
        selectedChoice: null, 
        correctAnswer: "A) String, Integer, Float, Boolean, Array, Object" 
    },
    { 
        question: "How do you perform a conditional check in PHP?", 
        choices: ["A) Using switch statements", "B) Using if, else, and elseif", "C) Using check statements", "D) Using loop statements"], 
        selectedChoice: null, 
        correctAnswer: "B) Using if, else, and elseif" 
    },
    { 
        question: "What is an array in PHP?", 
        choices: ["A) A single value data type", "B) A data structure that can hold multiple values under a single variable name", "C) A function that processes data", "D) A reserved keyword"], 
        selectedChoice: null, 
        correctAnswer: "B) A data structure that can hold multiple values under a single variable name" 
    },
    { 
        question: "What is the purpose of a function in PHP?", 
        choices: ["A) To define a variable", "B) To hold data", "C) To perform a specific task in a reusable manner", "D) To handle errors"], 
        selectedChoice: null, 
        correctAnswer: "C) To perform a specific task in a reusable manner" 
    },
    { 
        question: "How can you read a file in PHP?", 
        choices: ["A) By using read_file()", "B) By using file_get_contents()", "C) By using open_file()", "D) By using get_file_data()"], 
        selectedChoice: null, 
        correctAnswer: "B) By using file_get_contents()" 
    },
    { 
        question: "What is the output of the following code?\n<?php\n echo 10 + 20;\n?>", 
        choices: ["A) 10", "B) 20", "C) 30", "D) 1020"], 
        selectedChoice: null, 
        correctAnswer: "C) 30" 
    },
    { 
        question: "How do you start a PHP script?", 
        choices: ["A) With &lt;?script&gt;", "B) With &lt;php&gt;", "C) With &lt;?php", "D) With &lt;?start&gt;"], 
        selectedChoice: null, 
        correctAnswer: "C) With &lt;php&gt;" 
    }
];

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

function displayAssessment() {
    const mainContent = document.getElementById('main-content');
    const questionCard = `
        <div class="assessment-card">
            <h1>Assessment Question</h1>
            <p>${assessmentQuestions[currentQuestionIndex].question}</p>
        </div>`;
    
    const choiceCards = `
        <div class="choices">
            ${assessmentQuestions[currentQuestionIndex].choices.map(choice => `
                <div class="card choice-card" onclick="selectChoice('${choice}')">
                    <p>${choice}</p>
                </div>
            `).join('')}
        </div>`;
    
    const isLastQuestion = currentQuestionIndex === assessmentQuestions.length - 1;
    mainContent.innerHTML = `
        ${questionCard}
        ${choiceCards}
        <div class="button-container">
            <button class="back-question-button" onclick="prevQuestion()" style="display:${currentQuestionIndex === 0 ? 'none' : 'block'};">Back</button>
            <button class="next-question-button" onclick="${isLastQuestion ? 'showSummary()' : 'nextQuestion()'}" id="next-button" disabled>
                ${isLastQuestion ? 'Show Summary' : 'Next Question'}
            </button>
        </div>
        <div id="result-message"></div>`;
    
    toggleNextButton();
}

function selectChoice(choice) {
    assessmentQuestions[currentQuestionIndex].selectedChoice = choice;
    const choiceCards = document.querySelectorAll('.choice-card');
    choiceCards.forEach(card => {
        card.classList.remove('selected');
    });
    const selectedCard = Array.from(choiceCards).find(card => card.textContent.trim() === choice);
    if (selectedCard) {
        selectedCard.classList.add('selected');
    }
    toggleNextButton();
}

function toggleNextButton() {
    const nextButton = document.getElementById('next-button');
    nextButton.disabled = !assessmentQuestions[currentQuestionIndex].selectedChoice;
}

function nextQuestion() {
    selectedAnswers[currentQuestionIndex] = assessmentQuestions[currentQuestionIndex].selectedChoice;
    currentQuestionIndex++;
    if (currentQuestionIndex < assessmentQuestions.length) {
        displayAssessment();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayAssessment();
    }
}

function showSummary() {

    window.scrollTo({ top: 0, behavior: 'smooth' });
    selectedAnswers[currentQuestionIndex] = assessmentQuestions[currentQuestionIndex].selectedChoice;

    const resultMessage = document.getElementById('result-message');

    const moduleResults = Object.entries(moduleQuizAnswers).map(([module, answer]) => 
        `<div class="module-result"><strong>Module ${module}:</strong> Your answer: ${answer}</div>`
    ).join('');

    const resultContent = assessmentQuestions.map((question, index) => `
        <div >
            <p ><strong>${question.question}</strong></p>
            <p class="answer-text">Your answer: <span class="selected-answer">${selectedAnswers[index]}</span></p>
        </div>
    `).join('');

    resultMessage.innerHTML = `
        <h2>Your Selected Answers:</h2>
        <div class="module-results">${moduleResults}</div>
        <div class="question-results-c">${resultContent}</div>
        <div class="button-container">
            <button class="all-submit-button button" onclick="submitAssessment()">Submit Answers</button>
            <button class="re-take-button button" onclick="resetAssessment()">Retake Assessment</button>
        </div>
    `;

    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = '';
    mainContent.appendChild(resultMessage);
}




function resetAssessment() {
    currentQuestionIndex = 0;
    selectedAnswers.length = 0;
    displayAssessment();
}

function submitAssessment() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    selectedAnswers[currentQuestionIndex] = assessmentQuestions[currentQuestionIndex].selectedChoice;
    let totalCorrect = 0; 
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
    const resultContent = assessmentQuestions.map((question, index) => {
        const isCorrect = question.correctAnswer === selectedAnswers[index];
        if (isCorrect) {
            totalCorrect++;
        }
        return `
            <div class="question-result ${isCorrect ? 'correct' : 'incorrect'}">
                <p class="question-text"><strong>Assessment Question ${index + 1}:</strong> ${question.question}</p>
                <p class="answer-text">Your answer: <span class="${isCorrect ? 'correct-answer' : 'wrong-answer'}">${selectedAnswers[index]}</span></p>
                <p class="answer-text">Correct answer: <span class="correct-answer">${question.correctAnswer}</span></p>
            </div>
        `;
    }).join('');

    const scorePercentage = (totalCorrect / assessmentQuestions.length) * 100;
    const moduleScorePercentage = (totalModuleCorrect / Object.keys(moduleQuizAnswers).length) * 100; // Calculate module percentage

    // Create chart containers for a horizontal layout
    const resultChartContainer = document.createElement('div');
    resultChartContainer.className = "chart-canvas-container small-chart";
    const moduleChartContainer = document.createElement('div');
    moduleChartContainer.className = "chart-canvas-container small-chart";

    // Create canvas elements for both charts
    const resultCanvas = document.createElement('canvas');
    resultCanvas.id = "result-chart";
    resultCanvas.height = 120; // Reduced chart size
    const moduleCanvas = document.createElement('canvas');
    moduleCanvas.id = "module-chart";
    moduleCanvas.height = 120; // Reduced chart size

    resultChartContainer.appendChild(resultCanvas);
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
            <div class="assessment-results-c">
                <h2>Assessment Results</h2>
                <h3>Total Correct Answers: ${totalCorrect}</h3>
                <p class="score-percentage">${scorePercentage.toFixed(2)}%</p>
                ${resultChartContainer.outerHTML} <!-- Append the result chart container -->
            </div>    
        </div>
        ${moduleResults} <!-- Display module quiz answers -->
        ${resultContent} <!-- Display assessment answers -->
        <div class="buttons">
            <button class="all-submit-button button learning-path-btn" onclick="goToLearningPath()">Go to Learning Path</button>
            <button class="learn-submit-button button next-course-btn" onclick="continueLearning()">Continue Learning</button>
        </div>`;

    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = resultMessage;

    // Data for both pie charts
    const resultLayout = ["Correct", "Wrong"];
    const resultScore = [totalCorrect, assessmentQuestions.length - totalCorrect];
    const moduleLayout = ["Correct", "Wrong"];
    const moduleScore = [totalModuleCorrect, Object.keys(moduleQuizAnswers).length - totalModuleCorrect];
    const barColors = ["#4b9b74", "#dd5555"];

    // Create the result content chart
    
    // Create the module quiz result chart
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
    const ctxResult = document.getElementById("result-chart").getContext("2d");
    new Chart(ctxResult, {
        type: "pie",
        data: {
            labels: resultLayout,
            datasets: [{
                label: 'Assessment Results',
                backgroundColor: barColors,
                data: resultScore,
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

    const learningPathBtn = document.querySelector('.all-submit-button');
    const nextCourseBtn = document.querySelector('.learn-submit-button');

    learningPathBtn.addEventListener("click", function() {
        alert("Navigating to Learning Path...");
    });

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
            const nextContent = this.getAttribute('data-next');
            const mainContent = document.getElementById('main-content');

            if (this.classList.contains('quiz-next-button')) {
                const currentModule = parseInt(this.getAttribute('data-module'));
                if (!moduleQuizAnswers[currentModule]) {
                    alert("Please pick an answer before proceeding to the next module.");
                    return;
                }
            }

            if (categoryContent[nextContent]) {
                mainContent.innerHTML = categoryContent[nextContent];
                window.scrollTo({ top: 0, behavior: 'smooth' }); // Scrolls to the top of the page
                addNextModuleEventListener();
                updateActiveSidebarItem(nextContent); 
            } else if (nextContent === 'assessment') {
                displayAssessment();
                window.scrollTo({ top: 0, behavior: 'smooth' }); // Scrolls to the top of the page
                updateActiveSidebarItem('content11'); 
            } else if (quizzes[nextContent]) {
                displayQuiz(nextContent);
                window.scrollTo({ top: 0, behavior: 'smooth' }); // Scrolls to the top of the page
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
