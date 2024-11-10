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
        <h2>What is React?</h2>
        <div class="quiz-options">
            <div class="quiz-card" onclick="selectQuizAnswer(1, 'A programming language')">A programming language</div>
            <div class="quiz-card" onclick="selectQuizAnswer(1, 'A JavaScript library used for building user interfaces, primarily for single-page applications')">A JavaScript library used for building user interfaces, primarily for single-page applications</div>
            <div class="quiz-card" onclick="selectQuizAnswer(1, 'A CSS framework')">A CSS framework</div>
            <div class="quiz-card" onclick="selectQuizAnswer(1, 'A database management system')">A database management system</div>
        </div>
        <div id="selected-answer-1" class="selected-answer-container"></div>
        <button class="next-module" data-next="content2">Next Module</button>
    `,
    quiz2: `
    <h1>QUIZ # 2</h1>
        <h2>What does the Virtual DOM do?</h2>
        <div class="quiz-options">
            <div class="quiz-card" onclick="selectQuizAnswer(2, 'It stores user data')">It stores user data</div>
            <div class="quiz-card" onclick="selectQuizAnswer(2, 'It optimizes updates and rendering by acting as a lightweight copy of the actual DOM')">It optimizes updates and rendering by acting as a lightweight copy of the actual DOM</div>
            <div class="quiz-card" onclick="selectQuizAnswer(2, 'It creates visual representations of data')">It creates visual representations of data</div>
            <div class="quiz-card" onclick="selectQuizAnswer(2, 'It tracks user interactions')">It tracks user interactions</div>
        </div>
        <div id="selected-answer-2" class="selected-answer-container"></div>
        <button class="next-module" data-next="content3">Next Module</button>
    `,
    quiz3: `
    <h1>QUIZ # 3</h1>
        <h2>How do you create a new React application?</h2>
        <div class="quiz-options">
            <div class="quiz-card" onclick="selectQuizAnswer(3, 'By downloading from a website')">By downloading from a website</div>
            <div class="quiz-card" onclick="selectQuizAnswer(3, 'By running npx create-react-app my-app in the terminal')">By running npx create-react-app my-app in the terminal</div>
            <div class="quiz-card" onclick="selectQuizAnswer(3, 'By using a GUI tool')">By using a GUI tool</div>
            <div class="quiz-card" onclick="selectQuizAnswer(3, 'By writing custom code')">By writing custom code</div>
        </div>
        <div id="selected-answer-3" class="selected-answer-container"></div>
        <button class="next-module" data-next="content4">Next Module</button>
    `,
    quiz4: `
    <h1>QUIZ # 4</h1>
        <h2>How do you define a functional component?</h2>
        <div class="quiz-options">
            <div class="quiz-card" onclick="selectQuizAnswer(4, 'As a class extending React.Component')">As a class extending React.Component</div>
            <div class="quiz-card" onclick="selectQuizAnswer(4, 'As a JavaScript function that returns a React element (JSX)')">As a JavaScript function that returns a React element (JSX)</div>
            <div class="quiz-card" onclick="selectQuizAnswer(4, 'As an HTML element')">As an HTML element</div>
            <div class="quiz-card" onclick="selectQuizAnswer(4, 'As a CSS style')">As a CSS style</div>
        </div>
        <div id="selected-answer-4" class="selected-answer-container"></div>
        <button class="next-module" data-next="content5">Next Module</button>
    `,
    quiz5: `
    <h1>QUIZ # 5</h1>
        <h2>What is state in React?</h2>
        <div class="quiz-options">
            <div class="quiz-card" onclick="selectQuizAnswer(5, 'A method for rendering components')">A method for rendering components</div>
            <div class="quiz-card" onclick="selectQuizAnswer(5, 'A built-in object that stores property values that belong to a component')">A built-in object that stores property values that belong to a component</div>
            <div class="quiz-card" onclick="selectQuizAnswer(5, 'A type of event')">A type of event</div>
            <div class="quiz-card" onclick="selectQuizAnswer(5, 'A styling option')">A styling option</div>
        </div>
        <div id="selected-answer-5" class="selected-answer-container"></div>
        <button class="next-module" data-next="content6">Next Module</button>
    `,
    quiz6: `
    <h1>QUIZ # 6</h1>
        <h2>How do you handle events in React?</h2>
        <div class="quiz-options">
            <div class="quiz-card" onclick="selectQuizAnswer(6, 'By using inline event handlers')">By using inline event handlers</div>
            <div class="quiz-card" onclick="selectQuizAnswer(6, 'By adding event handler functions to JSX elements')">By adding event handler functions to JSX elements</div>
            <div class="quiz-card" onclick="selectQuizAnswer(6, 'By creating custom events')">By creating custom events</div>
            <div class="quiz-card" onclick="selectQuizAnswer(6, 'By modifying the DOM directly')">By modifying the DOM directly</div>
        </div>
        <div id="selected-answer-6" class="selected-answer-container"></div>
        <button class="next-module" data-next="content7">Next Module</button>
    `,
    quiz7: `
    <h1>QUIZ # 7</h1>
        <h2>What is conditional rendering?</h2>
        <div class="quiz-options">
            <div class="quiz-card" onclick="selectQuizAnswer(7, 'Rendering components without props')">Rendering components without props</div>
            <div class="quiz-card" onclick="selectQuizAnswer(7, 'A technique used to display different UI elements based on certain conditions')">A technique used to display different UI elements based on certain conditions</div>
            <div class="quiz-card" onclick="selectQuizAnswer(7, 'Rendering components in a loop')">Rendering components in a loop</div>
            <div class="quiz-card" onclick="selectQuizAnswer(7, 'Rendering hidden elements')">Rendering hidden elements</div>
        </div>
        <div id="selected-answer-7" class="selected-answer-container"></div>
        <button class="next-module" data-next="content8">Next Module</button>
    `,
    quiz8: `
    <h1>QUIZ # 8</h1>
        <h2>How do you render lists in React?</h2>
        <div class="quiz-options">
            <div class="quiz-card" onclick="selectQuizAnswer(8, 'By using the .map() method to iterate over an array')">By using the .map() method to iterate over an array</div>
            <div class="quiz-card" onclick="selectQuizAnswer(8, 'By using a for loop')">By using a for loop</div>
            <div class="quiz-card" onclick="selectQuizAnswer(8, 'By defining multiple components')">By defining multiple components</div>
            <div class="quiz-card" onclick="selectQuizAnswer(8, 'By using createElement')">By using createElement</div>
        </div>
        <div id="selected-answer-8" class="selected-answer-container"></div>
        <button class="next-module" data-next="content9">Next Module</button>
    `,
    quiz9: `
    <h1>QUIZ # 9</h1>
        <h2>What are controlled components?</h2>
        <div class="quiz-options">
            <div class="quiz-card" onclick="selectQuizAnswer(9, 'Components that render nothing')">Components that render nothing</div>
            <div class="quiz-card" onclick="selectQuizAnswer(9, 'Form elements that derive their value from the component state')">Form elements that derive their value from the component state</div>
            <div class="quiz-card" onclick="selectQuizAnswer(9, 'Components that can be styled')">Components that can be styled</div>
            <div class="quiz-card" onclick="selectQuizAnswer(9, 'Components that do not update')">Components that do not update</div>
        </div>
        <div id="selected-answer-9" class="selected-answer-container"></div>
        <button class="next-module" data-next="content10">Next Module</button>
    `,
    quiz10: `
    <h1>QUIZ # 10</h1>
        <h2>What is JSX?</h2>
        <div class="quiz-options">
            <div class="quiz-card" onclick="selectQuizAnswer(10, 'A templating engine')">A templating engine</div>
            <div class="quiz-card" onclick="selectQuizAnswer(10, 'A syntax extension that allows writing HTML elements within JavaScript')">A syntax extension that allows writing HTML elements within JavaScript</div>
            <div class="quiz-card" onclick="selectQuizAnswer(10, 'A JavaScript function')">A JavaScript function</div>
            <div class="quiz-card" onclick="selectQuizAnswer(10, 'A database query language')">A database query language</div>
        </div>
        <div id="selected-answer-10" class="selected-answer-container"></div>
        <button class="next-module" data-next="content11">Next Module</button>
    `
};


const correctAnswers = {
    1: "A JavaScript library used for building user interfaces, primarily for single-page applications",
    2: "It optimizes updates and rendering by acting as a lightweight copy of the actual DOM",
    3: "By running npx create-react-app my-app in the terminal",
    4: "As a JavaScript function that returns a React element (JSX)",
    5: "A built-in object that stores property values that belong to a component",
    6: "By adding event handler functions to JSX elements",
    7: "A technique used to display different UI elements based on certain conditions",
    8: "By using the .map() method to iterate over an array",
    9: "Form elements that derive their value from the component state",
    10: "A syntax extension that allows writing HTML elements within JavaScript"
};


const assessmentQuestions = [
    {
        question: "What is the purpose of React?",
        choices: ["A) To manage server-side rendering", "B) To build user interfaces for single-page applications with a component-based architecture", "C) To style web applications", "D) To create APIs"],
        selectedChoice: null,
        correctAnswer: "B) To build user interfaces for single-page applications with a component-based architecture"
    },
    {
        question: "Explain the difference between functional and class components.",
        choices: ["A) Functional components are always faster", "B) Functional components do not manage state or lifecycle methods (unless using hooks), while class components can", "C) Class components are simpler", "D) There is no difference"],
        selectedChoice: null,
        correctAnswer: "B) Functional components do not manage state or lifecycle methods (unless using hooks), while class components can"
    },
    {
        question: "How can you manage state in a functional component?",
        choices: ["A) By using `setState`", "B) By using the `useState` hook", "C) By using class properties", "D) By using global state"],
        selectedChoice: null,
        correctAnswer: "B) By using the `useState` hook"
    },
    {
        question: "What are synthetic events in React?",
        choices: ["A) Events created by the user", "B) React’s cross-browser wrapper around native events, ensuring consistent behavior", "C) Events that only work in certain browsers", "D) Native events in React"],
        selectedChoice: null,
        correctAnswer: "B) React’s cross-browser wrapper around native events, ensuring consistent behavior"
    },
    {
        question: "Describe how to implement conditional rendering in React.",
        choices: ["A) By using the `if` statement only", "B) By using state management libraries", "C) By using conditional statements (like ternary operators) to display different components based on a condition", "D) By defining multiple components"],
        selectedChoice: null,
        correctAnswer: "C) By using conditional statements (like ternary operators) to display different components based on a condition"
    },
    {
        question: "What is the role of keys in a list in React?",
        choices: ["A) To style the items in the list", "B) To help React identify which items have changed, added, or removed, improving performance", "C) To sort the items in the list", "D) To validate the items"],
        selectedChoice: null,
        correctAnswer: "B) To help React identify which items have changed, added, or removed, improving performance"
    },
    {
        question: "What is a controlled component?",
        choices: ["A) A component that is read-only", "B) A form element whose value is controlled by React state", "C) A component that cannot be updated", "D) A component that does not render anything"],
        selectedChoice: null,
        correctAnswer: "B) A form element whose value is controlled by React state"
    },
    {
        question: "How do you define routes in a React application using React Router?",
        choices: ["A) By using the `&lt;Link&gt;` component", "B) By using the `&lt;Route&gt;` component to specify the path and component", "C) By using the `&lt;Switch&gt;` component only", "D) By using the `history` object"],
        selectedChoice: null,
        correctAnswer: "B) By using the `&lt;Route&gt;` component to specify the path and component"
    },
    {
        question: "What is the Context API used for?",
        choices: ["A) To create animations", "B) To manage and share state globally across components without passing props", "C) To manage local state only", "D) To enhance performance"],
        selectedChoice: null,
        correctAnswer: "B) To manage and share state globally across components without passing props"
    },
    {
        question: "How can you handle form submissions in React?",
        choices: ["A) By using `formSubmit()`", "B) By adding an `onSubmit` event handler to the form and preventing default behavior", "C) By calling `submit()` directly", "D) By using state management libraries"],
        selectedChoice: null,
        correctAnswer: "B) By adding an `onSubmit` event handler to the form and preventing default behavior"
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
