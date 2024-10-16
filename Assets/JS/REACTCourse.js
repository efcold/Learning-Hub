const Logo={
    src: "/Assets/Images/Index/REACT.png",
    alt: "Course Logo" 
}
const categoryTitle = {
    content1: { icon: 'fab fa-react', title: 'Introduction to React' },
    content2: { icon: 'fas fa-cogs', title: 'Functional Components' },
    content3: { icon: 'fas fa-building', title: 'Class Components' },
    content4: { icon: 'fas fa-flag-checkered', title: 'State in React' },
    content5: { icon: 'fas fa-hand-pointer', title: 'Handling Events' },
    content6: { icon: 'fas fa-adjust', title: 'Conditional Rendering' },
    content7: { icon: 'fas fa-list', title: 'Lists and Keys' },
    content8: { icon: 'fas fa-file-code', title: 'Forms in React' },
    content9: { icon: 'fas fa-route', title: 'React Router' },
    content10: { icon: 'fas fa-layer-group', title: 'State Management with Context API' },
    content11: { icon: 'fas fa-check-circle', title: 'Assessment' },
};

const categoryContent = {
    content1: `
<div>
    <h1>Introduction to React</h1>
    <h2>Module 1</h2>
    <hr>
    <p>React is a JavaScript library for building user interfaces, enabling developers to create interactive web applications.</p>

    <h2>Key Concepts</h2>
    <ul>
        <li><strong>Components:</strong> Building blocks of a React application.</li>
        <li><strong>JSX:</strong> A syntax extension that allows mixing HTML with JavaScript.</li>
        <li><strong>Props:</strong> Short for properties, used to pass data to components.</li>
    </ul>

    <h2>Example Code</h2>
    <pre>
        <img src="/Assets/Images/Courses/C-React/m1-1.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>

    <h2>Expected Output</h2>
    <p>The expected output will display a heading:</p>
     <pre>
        <img src="/Assets/Images/Courses/C-React/m1-2.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>
    
    <button class="next-module" data-next="quiz1">Take Quiz</button>
</div>
`,
content2: `
<div>
    <h1>Functional Components</h1>
    <h2>Module 2</h2>
    <hr>
    <h2>Overview</h2>
    <p>Functional components are JavaScript functions that return JSX.</p>

    <h2>Key Concepts</h2>
    <ul>
        <li><strong>Stateless components:</strong> These components do not manage their own state.</li>
        <li><strong>Props:</strong> Used to pass data to functional components.</li>
    </ul>

    <h2>Example Code</h2>
     <pre>
        <img src="/Assets/Images/Courses/C-React/m2-1.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>

    <h2>Expected Output</h2>
    <p>The expected output will display a greeting:</p>
     <pre>
        <img src="/Assets/Images/Courses/C-React/m2-2.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>
    
    <button class="next-module" data-next="quiz2">Take Quiz</button>
</div>
`,
content3: `
<div>
    <h1>Class Components</h1>
    <h2>Module 3</h2>
    <hr>
    <h2>Overview</h2>
    <p>Class components are ES6 classes that extend from <code>React.Component</code>.</p>

    <h2>Key Concepts</h2>
    <ul>
        <li><strong>State management:</strong> Class components can hold and manage state.</li>
        <li><strong>Lifecycle methods:</strong> Methods that allow you to hook into specific points in a component's life.</li>
    </ul>

    <h2>Example Code</h2>
     <pre>
        <img src="/Assets/Images/Courses/C-React/m3-1.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>

    <h2>Expected Output</h2>
    <p>The expected output will display a greeting:</p>
     <pre>
        <img src="/Assets/Images/Courses/C-React/m3-2.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>

    <button class="next-module" data-next="quiz3">Take Quiz</button>
</div>
`
,
content4: `
<div>
    <h1>State in React</h1>
    <h2>Module 4</h2>
    <hr>
    <h2>Overview</h2>
    <p>State is an object that determines the behavior of a component.</p>

    <h2>Key Concepts</h2>
    <ul>
        <li><strong>Managing state with <code>useState</code>:</strong> A Hook that allows you to add state to functional components.</li>
        <li><strong>Functional updates:</strong> A method to update state based on the previous state.</li>
    </ul>

    <h2>Example Code</h2>
    <pre>
        <img src="/Assets/Images/Courses/C-React/m4-1.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>

    <h2>Expected Output</h2>
    <p>The expected output will display a counter:</p>
    <pre>
        <img src="/Assets/Images/Courses/C-React/m4-2.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>
    <p>After clicking the button:</p>
     <pre>
        <img src="/Assets/Images/Courses/C-React/m4-3.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>

    <button class="next-module" data-next="quiz4">Take Quiz</button>
</div>
`
,
content5: `
<div>
    <h1>Handling Events</h1>
    <h2>Module 5</h2>
    <hr>
    <h2>Overview</h2>
    <p>Event handling in React allows you to respond to user inputs and interactions.</p>

    <h2>Key Concepts</h2>
    <ul>
        <li><strong>Synthetic events:</strong> A cross-browser wrapper around the native event.</li>
        <li><strong>Handling clicks:</strong> Responding to click events using event handlers.</li>
    </ul>

    <h2>Example Code</h2>
     <pre>
        <img src="/Assets/Images/Courses/C-React/m5-1.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>

    <h2>Expected Output</h2>
    <p>The expected output will display a message:</p>
     <pre>
        <img src="/Assets/Images/Courses/C-React/m5-2.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>
    <p>After clicking the button:</p>
     <pre>
        <img src="/Assets/Images/Courses/C-React/m5-3.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>

    <button class="next-module" data-next="quiz5">Take Quiz</button>
</div>
`,
content6: `
<div>
    <h1>Conditional Rendering</h1>
    <h2>Module 6</h2>
    <hr>
    <h2>Overview</h2>
    <p>Conditional rendering allows you to render different components or elements based on specific conditions.</p>

    <h2>Key Concepts</h2>
    <ul>
        <li><strong>Ternary operators:</strong> A concise way to write conditional statements.</li>
        <li><strong>Logical && operator:</strong> Used to conditionally render components.</li>
    </ul>

    <h2>Example Code</h2>
     <pre>
        <img src="/Assets/Images/Courses/C-React/m6-1.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>

    <h2>Expected Output</h2>
    <p>Initially, the output will display:</p>
     <pre>
        <img src="/Assets/Images/Courses/C-React/m6-2.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>
    <p>After clicking the button:</p>
     <pre>
        <img src="/Assets/Images/Courses/C-React/m6-3.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>

    <button class="next-module" data-next="quiz6">Take Quiz</button>
</div>
`
,
content7: `
<div>
    <h1>Lists and Keys</h1>
    <h2>Module 7</h2>
    <hr>
    <h2>Overview</h2>
    <p>Rendering lists of data is a common use case in React, and keys help React identify which items have changed.</p>

    <h2>Key Concepts</h2>
    <ul>
        <li><strong>Mapping through arrays:</strong>
        <li><strong>Using keys for list items:</strong> 
</ul>

    <h2>Example Code</h2>
    <pre>
        <img src="/Assets/Images/Courses/C-React/m7-1.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>

    <h2>Expected Output</h2>
     <pre>
        <img src="/Assets/Images/Courses/C-React/m7-2.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>

    <button class="next-module" data-next="quiz7">Take Quiz</button>
</div>
`,

content8: `
<div>
    <h1>Forms in React</h1>
    <h2>Module 8</h2>
    <hr>
    <h2>Overview</h2>
    <p>Forms are essential in web applications for user input, and React provides a way to handle them efficiently.</p>

    <h2>Key Concepts</h2>
    <ul>
        <li>Controlled components</li>
        <li>Handling form submissions</li>
    </ul>

    <h2>Example Code</h2>
     <pre>
        <img src="/Assets/Images/Courses/C-React/m8-1.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>
  <pre>
        <img src="/Assets/Images/Courses/C-React/m8-2.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>
    <h2>Expected Output</h2>
         <pre>
        <img src="/Assets/Images/Courses/C-React/m8-3.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>
    <p>After submitting the form, an alert will display the entered name.</p>

    <button class="next-module" data-next="quiz8">Take Quiz</button>
</div>
`
,

content9: `
<div>
    <h1>React Router</h1>
    <h2>Module 9</h2>
    <hr>
    <h2>Overview</h2>
    <p>React Router is a library for routing in React applications, allowing navigation between different components.</p>

    <h2>Key Concepts</h2>
    <ul>
        <li>&lt;BrowserRouter&gt; and &lt;Route&gt;</li>
        <li>Navigation with links</li>
    </ul>

    <h2>Example Code</h2>
      <pre>
        <img src="/Assets/Images/Courses/C-React/m9-1.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>
  <pre>
        <img src="/Assets/Images/Courses/C-React/m9-2.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>
    <h2>Expected Output</h2>
    <p>- Navigation links to Home and About pages.</p>

    <button class="next-module" data-next="quiz9">Take Quiz</button>
</div>
`
,

content10: `
<div>
    <h1>State Management with Context API</h1>
    <h2>Module 10</h2>
    <hr>
    <h2>Overview</h2>
    <p>The Context API allows you to manage state globally in a React application without passing props down manually at every level.</p>

    <h2>Key Concepts</h2>
    <ul>
        <li>Creating a context</li>
        <li>Using <code>useContext</code> hook</li>
    </ul>

    <h2>Example Code</h2>
      <pre>
        <img src="/Assets/Images/Courses/C-React/m10-1.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>
          <pre>
        <img src="/Assets/Images/Courses/C-React/m10-2.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>

    <h2>Expected Output</h2>
    <p>- Displays "Hello from context!"</p>
  <pre>
        <img src="/Assets/Images/Courses/C-React/m10-3.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>
    <button class="next-module" data-next="quiz10">Take Quiz</button>
</div>
`,

content11: '<h1>Assessment</h1><p>Click Start assesment to answer all the question regarding this module!</p> <button class="next-module" data-next="assessment">Start Assessment</button>',
};  

const quizzes = {
    quiz1: `
    <h1>QUIZ # 1</h1>
        <h2>What is the purpose of the <!DOCTYPE html> declaration?</h2>
        <div class="quiz-options">
            <div class="quiz-card" onclick="selectQuizAnswer(1, 'To specify the title of the page')">To specify the title of the page</div>
            <div class="quiz-card" onclick="selectQuizAnswer(1, 'To indicate that the document is HTML5')">To indicate that the document is HTML5</div>
            <div class="quiz-card" onclick="selectQuizAnswer(1, 'To start the body of the document')">To start the body of the document</div>          
        </div>
        <div id="selected-answer-1" class="selected-answer-container"></div>
        <button class="next-module" data-next="content2">Next Module</button>
    `,
    quiz2: `
    <h1>QUIZ # 2</h1>
        <h2>What are <th> and <td> tags used for in an HTML table?</h2>
        <div class="quiz-options">
            <div class="quiz-card" onclick="selectQuizAnswer(2, '<th> is for table header cells, and <td> is for table data cells.')"><th> is for table header cells, and <td> is for table data cells.</div>
            <div class="quiz-card" onclick="selectQuizAnswer(2, 'Both are for creating table headers only.')">Both are for creating table headers only.</div>
            <div class="quiz-card" onclick="selectQuizAnswer(2, '<th> is for rows, and <td> is for columns.')"><th> is for rows, and <td> is for columns.</div>
        </div>
        <div id="selected-answer-2" class="selected-answer-container"></div>
        <button class="next-module" data-next="content3">Next Module</button>
    `,
    quiz3: `
    <h1>QUIZ # 3</h1>
        <h2>Which attribute would you use to apply inline styles directly to an HTML element?</h2>
        <div class="quiz-options">
            <div class="quiz-card" onclick="selectQuizAnswer(3, 'class')">class</div>
            <div class="quiz-card" onclick="selectQuizAnswer(3, 'style')">style</div>
            <div class="quiz-card" onclick="selectQuizAnswer(3, 'id')">id</div>
        </div>
        <div id="selected-answer-3" class="selected-answer-container"></div>
        <button class="next-module" data-next="content4">Next Module</button>
    `,
    quiz4: `
    <h1>QUIZ # 4</h1>
        <h2>Which heading level is typically used for major sections within a page?</h2>
        <div class="quiz-options">
            <div class="quiz-card" onclick="selectQuizAnswer(4, 'h2')">h2</div>
            <div class="quiz-card" onclick="selectQuizAnswer(4, 'h3')">h3</div>
            <div class="quiz-card" onclick="selectQuizAnswer(4, 'h1')">h1</div>
        </div>
        <div id="selected-answer-4" class="selected-answer-container"></div>
        <button class="next-module" data-next="content5">Next Module</button>
    `,
    quiz5: `
    <h1>QUIZ # 5</h1>
        <h2>In the example <p>This is a <strong>text</strong> word and this is <em>text</em> word.</p> what do the <strong> and <em> tags do?</h2>
        <div class="quiz-options">
            <div class="quiz-card" onclick="selectQuizAnswer(5, 'They change the font size.')">They change the font size.</div>
            <div class="quiz-card" onclick="selectQuizAnswer(5, 'They format the text as bold and italic, respectively.')">They format the text as bold and italic, respectively.</div>
            <div class="quiz-card" onclick="selectQuizAnswer(5, 'They create new paragraphs.')">They create new paragraphs.</div>
        </div>
        <div id="selected-answer-5" class="selected-answer-container"></div>
        <button class="next-module" data-next="content6">Next Module</button>
    `,
    quiz6: `
    <h1>QUIZ # 6</h1>
        <h2>What does the following CSS rule do?</h2>
        <code>#special { color: red; font-size: 20px; }</code>
        <div class="quiz-options">
            <div class="quiz-card" onclick="selectQuizAnswer(6, 'It applies red color and 20px font size to all paragraphs.')">It applies red color and 20px font size to all paragraphs.</div>
            <div class="quiz-card" onclick="selectQuizAnswer(6, 'It styles the element with the ID "special" to have red text and a font size of 20 pixels.')">It styles the element with the ID "special" to have red text and a font size of 20 pixels.</div>
            <div class="quiz-card" onclick="selectQuizAnswer(6, 'It creates a new HTML element.')">It creates a new HTML element.</div>
        </div>
        <div id="selected-answer-6" class="selected-answer-container"></div>
        <button class="next-module" data-next="content7">Next Module</button>
    `,
    quiz7: `
    <h1>QUIZ # 7</h1>
        <h2>What is a key recommendation regarding the use of text formatting tags in HTML?</h2>
        <div class="quiz-options">
            <div class="quiz-card" onclick="selectQuizAnswer(7, 'Use as many formatting tags as possible.')">Use as many formatting tags as possible.</div>
            <div class="quiz-card" onclick="selectQuizAnswer(7, 'Use formatting tags appropriately to maintain the semantic meaning of the content.')">Use formatting tags appropriately to maintain the semantic meaning of the content.</div>
            <div class="quiz-card" onclick="selectQuizAnswer(7, 'Avoid using any formatting tags at all.')">Avoid using any formatting tags at all.</div>
        </div>
        <div id="selected-answer-7" class="selected-answer-container"></div>
        <button class="next-module" data-next="content8">Next Module</button>
    `,
    quiz8: `
    <h1>QUIZ # 8</h1>
        <h2>How does the <abbr> tag enhance the use of abbreviations in HTML?</h2>
        <div class="quiz-options">
            <div class="quiz-card" onclick="selectQuizAnswer(8, 'It creates a hyperlink to a definition.')">It creates a hyperlink to a definition.</div>
            <div class="quiz-card" onclick="selectQuizAnswer(8, 'It automatically formats the abbreviation in bold.')">It automatically formats the abbreviation in bold.</div>
            <div class="quiz-card" onclick="selectQuizAnswer(8, 'It provides the full name or meaning of the abbreviation.')">It provides the full name or meaning of the abbreviation.</div>
        </div>
        <div id="selected-answer-8" class="selected-answer-container"></div>
        <button class="next-module" data-next="content9">Next Module</button>
    `,
    quiz9: `
    <h1>QUIZ # 9</h1>
        <h2>What is the correct syntax for an HTML comment?</h2>
        <div class="quiz-options">
            <div class="quiz-card" onclick="selectQuizAnswer(9, '// This is a comment')">// This is a comment</div>
            <div class="quiz-card" onclick="selectQuizAnswer(9, '/* This is a comment */')">/* This is a comment */</div>
            <div class="quiz-card" onclick="selectQuizAnswer(9, '<!-- This is a comment -->')"><!-- This is a comment --></div>
        </div>
        <div id="selected-answer-9" class="selected-answer-container"></div>
        <button class="next-module" data-next="content10">Next Module</button>
    `,
    quiz10: `
    <h1>QUIZ # 10</h1>
        <h2>What is the purpose of a <div> element in HTML?</h2>
        <div class="quiz-options">
            <div class="quiz-card" onclick="selectQuizAnswer(10, 'To display images')">To display images</div>
            <div class="quiz-card" onclick="selectQuizAnswer(10, 'To create a container for grouping content')">To create a container for grouping content</div>
            <div class="quiz-card" onclick="selectQuizAnswer(10, 'To define the structure of a table')">To define the structure of a table</div>
        </div>
        <div id="selected-answer-10" class="selected-answer-container"></div>
        <button class="next-module" data-next="content11">Next Module</button>
    `,
};

const correctAnswers = {
    1: 'To indicate that the document is HTML5',
    2: '<th> is for table header cells, and <td> is for table data cells.',
    3: 'style',
    4: '<h2>',
    5: 'They format the text as bold and italic, respectively.',
    6: 'It styles the element with the ID "special" to have red text and a font size of 20 pixels.',
    7: 'Use formatting tags appropriately to maintain the semantic meaning of the content.',
    8: 'It provides the full name or meaning of the abbreviation.',
    9: '<!-- This is a comment -->',
    10: 'To create a container for grouping content',
};


const assessmentQuestions = [
    { question: "Which of the following is a good practice when using comments in HTML?", choices: ["A) Adding comments for every line of code", "B) Using comments to explain complex sections of code", "C) Writing comments in a language that only you understand"], selectedChoice: null, correctAnswer: "B) Using comments to explain complex sections of code" },
    { question: "What does the <cite> tag represent in an HTML document?", choices: ["A) A reference to the title of a creative work", "B) A link to an external website", "C) A block of text for a quote"], selectedChoice: null, correctAnswer: "A) A reference to the title of a creative work" },
    { question: "Which HTML tag is used for shorter inline quotations that automatically add quotation marks?", choices: ["A) <cite>", "B) <q>", "C) <blockquote>"], selectedChoice: null, correctAnswer: "B) <q>" },
    { question: "What is the purpose of the blockquote tag?", choices: ["A) To create a list", "B) To display longer quotations, usually indented", "C) To format text as code"], selectedChoice: null, correctAnswer: "B) To display longer quotations, usually indented" },
    { question: "In CSS, what is the purpose of classes?", choices: ["A) To create reusable styles that can be applied to multiple elements", "B) To apply styles to unique elements only", "C) To link external stylesheets"], selectedChoice: null, correctAnswer: "A) To create reusable styles that can be applied to multiple elements" },
    { question: "How does a browser typically handle spacing around paragraphs?", choices: ["A) No spacing is added.", "B) Spacing is added only if specified in CSS.", "C) Browsers automatically add space before and after each <p> element."], selectedChoice: null, correctAnswer: "C) Browsers automatically add space before and after each <p> element." },
    { question: "How do headings enhance SEO (Search Engine Optimization)?", choices: ["A) By making the text colorful", "B) By reducing the page loading time", "C) By helping search engines understand the structure of the content"], selectedChoice: null, correctAnswer: "C) By helping search engines understand the structure of the content" },
    { question: "What is the purpose of the placeholder attribute in an <input> tag?", choices: ["A) To specify the input field type", "B) To provide a hint to the user about what to enter", "C) To disable the input field"], selectedChoice: null, correctAnswer: "B) To provide a hint to the user about what to enter" },
    { question: "What does the href attribute specify in an anchor (<a>) tag?", choices: ["A) The title of the link", "B) The URL that the link points to", "C) The color of the link"], selectedChoice: null, correctAnswer: "B) The URL that the link points to" },
    { question: "What does the <!DOCTYPE html> declaration indicate?", choices: ["A) It declares that the document is an HTML5 document.", "B) It specifies the title of the page.", "C) It starts the body of the document."], selectedChoice: null, correctAnswer: "A) It declares that the document is an HTML5 document." },
    { question: "What information is contained within the <head> section of an HTML document?", choices: ["A) The visible content of the page", "B) Images and links", "C) Meta-information like the title and links to styles"], selectedChoice: null, correctAnswer: "C) Meta-information like the title and links to styles" },
]
;
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
        <div class="question-result">
            <p class="question-text"><strong>${question.question}</strong></p>
            <p class="answer-text">Your answer: <span class="selected-answer">${selectedAnswers[index]}</span></p>
        </div>
    `).join('');

    resultMessage.innerHTML = `
        <h2>Your Selected Answers:</h2>
        <div class="module-results">${moduleResults}</div>
        <div class="question-results">${resultContent}</div>
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
    const moduleResults = Object.entries(moduleQuizAnswers).map(([module, answer], index) => {
        const isCorrect = correctAnswers[module] === answer; 
        if (isCorrect) {
            totalCorrect++;
        }
        return `
        <div class="question-result ${isCorrect ? 'correct' : 'incorrect'}">
            <p class="question-text"><strong>Module ${module}:</strong></p>
            <p class="answer-text">Your answer: <span class="${isCorrect ? 'correct-answer' : 'wrong-answer'}">${answer}</span></p>
            <p class="answer-text">Correct answer: <span class="correct-answer">${correctAnswers[module]}</span></p>
        </div>
    `;
}).join('');

    const resultContent = assessmentQuestions.map((question, index) => {
        const isCorrect = question.correctAnswer === selectedAnswers[index];

        if (isCorrect) {
            totalCorrect++;
        }

        return `
            <div class="question-result ${isCorrect ? 'correct' : 'incorrect'}">
                <p class="question-text"><strong>Question ${index + 1}: ${question.question}</strong></p>
                <p class="answer-text">Your answer: <span class="${isCorrect ? 'correct-answer' : 'wrong-answer'}">${selectedAnswers[index]}</span></p>
                <p class="answer-text">Correct answer: <span class="correct-answer">${question.correctAnswer}</span></p>
            </div>
        `;
    }).join('');
    

    const mainMessage = `
        <div class="result-container">
            ${resultContent}
            <h3>Total Correct Answers: ${totalCorrect}</h3>
        </div>
    `;
    

    const scorePercentage = (totalCorrect / assessmentQuestions.length) * 100;


    const chartContainer = document.createElement('div');
    chartContainer.className = "chart-canvas-container";


    const canvas = document.createElement('canvas');
    canvas.id = "chart";
    canvas.height = 150;


    chartContainer.appendChild(canvas);


    const resultMessage = `
        <div class="chart-container">
            <div class="text-container">
                <h1 class="chart-heading">CONGRATULATIONS</h1>
                <p class="score-text">You've scored</p>
                <p class="score-percentage">${scorePercentage.toFixed(2)}%</p>
                <p class="tutorial-text">in this tutorial.</p>
            </div>
            ${chartContainer.outerHTML} <!-- Append the chart container -->
        </div>
        ${moduleResults} <!-- Display module quiz answers -->
        ${resultContent}
        <h3>Total Correct Answers: ${totalCorrect}</h3> <!-- Display the number of correct answers -->
        <div class="buttons">
            <button class="all-submit-button button learning-path-btn" onclick="goToLearningPath()">Go to Learning Path</button>
            <button class="learn-submit-button button next-course-btn" onclick="continueLearning()">Continue Learning</button>
        </div>`;

    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = resultMessage;

    const layout = ["Correct", "Wrong"];
    const score = [totalCorrect, assessmentQuestions.length - totalCorrect]; // Use dynamic values
    const barColors = ["#4b9b74", "#dd5555"];

    const ctx = document.getElementById("chart").getContext("2d");
    new Chart(ctx, {
        type: "pie",
        data: {
            labels: layout,
            datasets: [{
                backgroundColor: barColors,
                data: score,
                borderWidth: 0
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: false
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

    });
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
