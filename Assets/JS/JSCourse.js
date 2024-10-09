const categoryContent = {
    content1: `
    <h1>Introduction to HTML</h1>
    <h2>Module 1</h2>
    <p>What is HTML?</p>
    <p>HTML (HyperText Markup Language) is the standard markup language for building web pages. It describes the structure of a web page using a collection of elements. These elements provide the browser with instructions on how to display the text, naming different sections such as headings, paragraphs, links, and more.</p>
    <p><strong>Example:</strong></p>
    <pre>
    <img src="/Assets/Images/Courses/C-HTML/Structure.png" alt="HTML Structure Example" style="max-width:50%; height:auto;">

    &lt;!DOCTYPE html&gt; — This line tells the web browser that this document is an HTML5 document.

    &lt;html&gt; — This tag starts the HTML document. Everything inside this tag is part of the HTML code.

    &lt;head&gt; — This tag contains information about the web page that is not displayed directly on the page like its title.

    &lt;title&gt;Page Title&lt;/title&gt; — Sets the title that shows in the browser tab.

    &lt;/head&gt; — Ends the head section.

    &lt;body&gt; — Starts the visible part of the web page.

    &lt;h1&gt;Heading&lt;/h1&gt; — This creates a main heading on the page. It’s usually the biggest text and is important for understanding the content.

    &lt;p&gt;Paragraph&lt;/p&gt; — This creates a paragraph of text. It’s used for regular content.

    &lt;/body&gt; — This tag closes the body section of the web page.

    &lt;/html&gt; — This tag closes the HTML document. It signals the end of the HTML code.
    </pre>
    <p><strong>HTML Element</strong></p>
    <p>An HTML element is a basic building block of an HTML document. It consists of a start tag, content, and an end tag. For example, in the element &lt;p&gt;Paragraph&lt;/p&gt;:</p>
    <ul>
        <li>&lt;p&gt; is the start tag, indicating the beginning of a paragraph.</li>
        <li>Paragraph is the content.</li>
        <li>&lt;/p&gt; is the end tag, marking the end of the paragraph.</li>
    </ul>
    <p><strong>Note:</strong> Some HTML elements have no content (like the &lt;br&gt; element). These elements are called empty elements. Empty elements do not have an end tag!</p>
    
    <h2>Creating Your First Web Page with Notepad or TextEdit</h2>
    <h3>Why Use a Simple Text Editor?</h3>
    <p>For learning HTML, it's best to use a simple text editor like Notepad (PC) or TextEdit (Mac).</p>
    <h3>Steps to Create Your Web Page:</h3>
    <h4>Step 1: Open Notepad (PC)</h4>
    <p>Windows 8 or later: Click the Start button and type "Notepad."<br>
    Windows 7 or earlier: Go to Start > Programs > Accessories > Notepad.</p>

    <h4>Step 1: Open TextEdit (Mac)</h4>
    <p>Open Finder, then go to Applications > TextEdit.<br>
    Change settings:<br>
    Go to Preferences > Format and select "Plain Text."<br>
    Under "Open and Save," check "Display HTML files as HTML code."</p>
    
    <h4>Step 2: Write Your HTML Code</h4>
    <p>Copy and paste this code into Notepad or TextEdit:</p>
    <pre>
    &lt;!DOCTYPE html&gt;
    &lt;html&gt;
    &lt;body&gt;

    &lt;h1&gt;My Heading&lt;/h1&gt;
    &lt;p&gt;My paragraph.&lt;/p&gt;

    &lt;/body&gt;
    &lt;/html&gt;
    </pre>
    
    <h4>Step 3: Save Your Web Page</h4>
    <p>In Notepad, click File > Save As.<br>
    Name the file "index.htm" and choose UTF-8 as the encoding.</p>
    
    <h4>Step 4: View in Browser</h4>
    <p>Open the saved file in your web browser to see your first web page!</p>
    <button class="next-module" data-next="quiz1">Take Quiz</button>
    `,
    content2: '<h1>Module 2</h1><p>Lorem ipsum dolor sit amet...</p><button class="next-module" data-next="quiz2">Take Quiz</button>',
    content3: '<h1>Module 3</h1><p>Lorem ipsum dolor sit amet...</p><button class="next-module" data-next="quiz3">Take Quiz</button>',
    content4: '<h1>Module 4</h1><p>Lorem ipsum dolor sit amet...</p><button class="next-module" data-next="quiz4">Take Quiz</button>',
    content5: '<h1>Module 5</h1><p>Lorem ipsum dolor sit amet...</p><button class="next-module" data-next="quiz5">Take Quiz</button>',
    content6: '<h1>Module 6</h1><p>Lorem ipsum dolor sit amet...</p><button class="next-module" data-next="quiz6">Take Quiz</button>',
    content7: '<h1>Module 7</h1><p>Lorem ipsum dolor sit amet...</p><button class="next-module" data-next="quiz7">Take Quiz</button>',
    content8: '<h1>Module 8</h1><p>Lorem ipsum dolor sit amet...</p><button class="next-module" data-next="quiz8">Take Quiz</button>',
    content9: '<h1>Module 9</h1><p>Lorem ipsum dolor sit amet...</p><button class="next-module" data-next="quiz9">Take Quiz</button>',
    content10: '<h1>Assessment</h1><p>This is content for Assessment.</p> <button class="next-module" data-next="assessment">Start Assessment</button>',
};

const quizzes = {
    quiz1: `
    <h1>QUIZ # 1</h1>
        <h2> What is the purpose of the !DOCTYPE html declaration?</h2>
        <div class="quiz-options">
            <div class="quiz-card" onclick="selectQuizAnswer(1, 'To specify the title of the page')">To specify the title of the page</div>
            <div class="quiz-card" onclick="selectQuizAnswer(1, 'To indicate that the document is HTML5')">To indicate that the document is HTML5</div>
            <div class="quiz-card" onclick="selectQuizAnswer(1, 'To start the body of the document')">To start the body of the document</div>          
        </div>
         <div id="selected-answer-1" class="selected-answer-container"></div>
        <button class="next-module" data-next="content2">Next Module</button>
    `,
    quiz2: `
    <h1>QUIZ # 1</h1>
        <h2> What is 2 + 2?</h2>
        <div class="quiz-options">
            <div class="quiz-card" onclick="selectQuizAnswer(2, '3')">3</div>
            <div class="quiz-card" onclick="selectQuizAnswer(2, '4')">4</div>
            <div class="quiz-card" onclick="selectQuizAnswer(2, '5')">5</div>
        </div>
    <div id="selected-answer-2" class="selected-answer-container"></div>
        <button class="next-module" data-next="content3">Next Module</button>
    `,
    quiz3: `
    <h1>QUIZ # 1</h1>
        <h2>Quiz: What is the largest planet in our solar system?</h2>
        <div class="quiz-options">
            <div class="quiz-card" onclick="selectQuizAnswer(3, 'Earth')">Earth</div>
            <div class="quiz-card" onclick="selectQuizAnswer(3, 'Jupiter')">Jupiter</div>
            <div class="quiz-card" onclick="selectQuizAnswer(3, 'Mars')">Mars</div>

        </div>
                    <div id="selected-answer-3" class="selected-answer-container"></div>
        <button class="next-module" data-next="content4">Next Module</button>
    `,
    quiz4: `
    <h1>QUIZ # 1</h1>
        <h2>Quiz: Which gas do plants absorb from the atmosphere?</h2>
        <div class="quiz-options">
            <div class="quiz-card" onclick="selectQuizAnswer(4, 'Oxygen')">Oxygen</div>
            <div class="quiz-card" onclick="selectQuizAnswer(4, 'Carbon Dioxide')">Carbon Dioxide</div>
            <div class="quiz-card" onclick="selectQuizAnswer(4, 'Nitrogen')">Nitrogen</div>
         
        </div>
           <div id="selected-answer-4" class="selected-answer-container"></div>
        <button class="next-module" data-next="content5">Next Module</button>
    `,
    quiz5: `
    <h1>QUIZ # 1</h1>
        <h2>Quiz: What is the chemical symbol for water?</h2>
        <div class="quiz-options">
            <div class="quiz-card" onclick="selectQuizAnswer(5, 'H2O')">H2O</div>
            <div class="quiz-card" onclick="selectQuizAnswer(5, 'O2')">O2</div>
            <div class="quiz-card" onclick="selectQuizAnswer(5, 'CO2')">CO2</div>
           
        </div>
         <div id="selected-answer-5" class="selected-answer-container"></div>
        <button class="next-module" data-next="content6">Next Module</button>
    `,
    quiz6: `
    <h1>QUIZ # 1</h1>
        <h2>Quiz: What is the powerhouse of the cell?</h2>
        <div class="quiz-options">
            <div class="quiz-card" onclick="selectQuizAnswer(6, 'Nucleus')">Nucleus</div>
            <div class="quiz-card" onclick="selectQuizAnswer(6, 'Mitochondria')">Mitochondria</div>
            <div class="quiz-card" onclick="selectQuizAnswer(6, 'Ribosome')">Ribosome</div>
           
        </div>
         <div id="selected-answer-6" class="selected-answer-container"></div>
        <button class="next-module" data-next="content7">Next Module</button>
    `,
    quiz7: `
    <h1>QUIZ # 1</h1>
        <h2>Quiz: What is the speed of light?</h2>
        <div class="quiz-options">
            <div class="quiz-card" onclick="selectQuizAnswer(7, '300,000 km/s')">300,000 km/s</div>
            <div class="quiz-card" onclick="selectQuizAnswer(7, '150,000 km/s')">150,000 km/s</div>
            <div class="quiz-card" onclick="selectQuizAnswer(7, '450,000 km/s')">450,000 km/s</div>
           
        </div>
         <div id="selected-answer-7" class="selected-answer-container"></div>
        <button class="next-module" data-next="content8">Next Module</button>
    `,
    quiz8: `
    <h1>QUIZ # 1</h1>
        <h2>Quiz: What is the main ingredient in guacamole?</h2>
        <div class="quiz-options">
            <div class="quiz-card" onclick="selectQuizAnswer(8, 'Avocado')">Avocado</div>
            <div class="quiz-card" onclick="selectQuizAnswer(8, 'Tomato')">Tomato</div>
            <div class="quiz-card" onclick="selectQuizAnswer(8, 'Onion')">Onion</div>
           
        </div>
         <div id="selected-answer-8" class="selected-answer-container"></div>
        <button class="next-module" data-next="content9">Next Module</button>
    `,
    quiz9: `
    <h1>QUIZ # 1</h1>
        <h2>Quiz: What planet is known as the Red Planet?</h2>
        <div class="quiz-options">
            <div class="quiz-card" onclick="selectQuizAnswer(9, 'Venus')">Venus</div>
            <div class="quiz-card" onclick="selectQuizAnswer(9, 'Mars')">Mars</div>
            <div class="quiz-card" onclick="selectQuizAnswer(9, 'Jupiter')">Jupiter</div>
           
        </div>
         <div id="selected-answer-9" class="selected-answer-container"></div>
        <button class="next-module" data-next="content10">Next Module</button>
    `,
};

const correctAnswers = {
    1: 'To indicate that the document is HTML5',
    2: '4',
    3: 'Jupiter',
    4: 'Carbon Dioxide',
    5: 'H2O',
    6: 'Mitochondria',
    7: '300,000 km/s',
    8: 'Avocado',
    9: 'Mars',
};

const assessmentQuestions = [
    { question: "What is the capital of France?", choices: ["Berlin", "Madrid", "Paris"], selectedChoice: null, correctAnswer: "Paris" },
    { question: "What is 2 + 2?", choices: ["3", "4", "5"], selectedChoice: null, correctAnswer: "4" },
    { question: "What is the largest planet in our solar system?", choices: ["Earth", "Jupiter", "Mars"], selectedChoice: null, correctAnswer: "Jupiter" },
];
let score = 0;
let currentQuestionIndex = 0;
const selectedAnswers = [];
const moduleQuizAnswers = {};

function selectQuizAnswer(module, answer) {
    moduleQuizAnswers[module] = answer; // Store the selected answer for the module

    const quizOptions = document.querySelectorAll(`#quiz${module} .quiz-card`);
    quizOptions.forEach(card => {
        card.classList.remove('selected'); // Remove 'selected' class from all cards
    });

    const selectedCard = Array.from(quizOptions).find(card => card.textContent.trim() === answer);
    if (selectedCard) {
        selectedCard.classList.add('selected'); // Add 'selected' class to the clicked card
    }

    // Display the selected answer in a new card
    displaySelectedAnswer(module, answer);

    // Check if the answer is correct
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

    // Add a class to the next button for validation
    const nextButton = mainContent.querySelector('.next-module');
    nextButton.classList.add('quiz-next-button');
    nextButton.setAttribute('data-module', quizKey.replace('quiz', '')); // Pass the module number
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
    selectedAnswers[currentQuestionIndex] = assessmentQuestions[currentQuestionIndex].selectedChoice;
    const resultMessage = document.getElementById('result-message');

    const moduleResults = Object.entries(moduleQuizAnswers).map(([module, answer]) => 
        `<p><strong>Module ${module}:</strong> Your answer: ${answer}</p>`
    ).join('');

    const resultContent = assessmentQuestions.map((question, index) => `
        <p><strong>${question.question}</strong>: Your answer: ${selectedAnswers[index]}</p>
    `).join('');

    resultMessage.innerHTML = `
        <h2>Your Selected Answers:</h2>
        ${moduleResults} <!-- Display module quiz answers -->
        ${resultContent}
        <button class="all-submit-button" onclick="submitAssessment()">Submit Answers</button>
        <button class="re-take-button" onclick="resetAssessment()">Retake Assessment</button>`;
    
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
    selectedAnswers[currentQuestionIndex] = assessmentQuestions[currentQuestionIndex].selectedChoice;
    let totalCorrect = 0;

    const moduleResults = Object.entries(moduleQuizAnswers).map(([module, answer]) => {
        const isCorrect = correctAnswers[module] === answer;
        if (isCorrect) {
            totalCorrect++;
        }
        return `<p><strong>Module ${module}:</strong> Your answer: ${answer} | Correct answer: ${correctAnswers[module]}</p>`;
    }).join('');

    const resultContent = assessmentQuestions.map((question, index) => {
        const isCorrect = question.correctAnswer === selectedAnswers[index];
        if (isCorrect) {
            totalCorrect++;
        }
        return `<p><strong>${question.question}</strong>: Your answer: ${selectedAnswers[index]} | Correct answer: ${question.correctAnswer}</p>`;
    }).join('');

    const resultMessage = `
        <h2>Your Selected Answers:</h2>
        ${moduleResults} <!-- Display module quiz answers -->
        ${resultContent}
        <h3>Total Correct Answers: ${totalCorrect}</h3> <!-- Display the number of correct answers -->
        <button class="all-submit-button" onclick="goToLearningPath()">Go to Learning Path</button>
        <button class="learn-submit-button" onclick="continueLearning()">Continue Learning</button>`;

    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = resultMessage;
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
        button.addEventListener('click', function() {
            const nextContent = this.getAttribute('data-next');
            const mainContent = document.getElementById('main-content');

            // Check if the current content is a quiz and if an answer has been selected
            if (this.classList.contains('quiz-next-button')) {
                const currentModule = parseInt(this.getAttribute('data-module'));
                if (!moduleQuizAnswers[currentModule]) {
                    alert("Please pick an answer before proceeding to the next module.");
                    return; // Stop further execution
                }
            }

            if (categoryContent[nextContent]) {
                mainContent.innerHTML = categoryContent[nextContent];
                addNextModuleEventListener();
            } else if (nextContent === 'assessment') {
                displayAssessment();
            } else if (quizzes[nextContent]) {
                displayQuiz(nextContent);
            }
        });
    });
}
const sidebarItems = document.querySelectorAll('.sidebar-item');


sidebarItems.forEach(item => {
    item.addEventListener('click', function() {

        sidebarItems.forEach(i => i.classList.remove('active'));

        this.classList.add('active');
    });
});

window.onload = setDefaultContent;
