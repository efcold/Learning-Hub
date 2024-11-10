const Logo={
    src: "/Assets/Images/Index/JS-W.png",
    alt: "Course Logo" 
}
const categoryTitle = {
    content1: { icon: 'fas fa-laptop', title: 'Introduction to JAVASCRIPT' },
    content2: { icon: 'fas fa-terminal', title: 'JavaScript Statements' },
    content3: { icon: 'fas fa-file-code', title: 'JavaScript Syntax' },
    content4: { icon: 'fas fa-comment-dots', title: 'JavaScript Comments' },
    content5: { icon: 'fas fa-cogs', title: 'JavaScript Variables' },
    content6: { icon: 'fas fa-arrow-alt-circle-right', title: 'JavaScript Let' },
    content7: { icon: 'fas fa-arrow-alt-circle-up', title: 'JavaScript Const' },
    content8: { icon: 'fas fa-exchange-alt', title: 'JavaScript Operators' },
    content9: { icon: 'fas fa-calculator', title: 'JavaScript Arithmetic' },
    content10: { icon: 'fas fa-clipboard-check', title: 'JavaScript Assignment' },
    content11: { icon: 'fas fa-check-circle', title: 'Assessment' },
};

const categoryContent = {
    content1: `
    <div>
        <h1>Introduction to JavaScript</h1>
        <h2>Module 1</h2>
        <hr>
        <div class="definition">
            <p>What is JavaScript?</p>
            <p>JavaScript, often abbreviated as JS, is a programming language and core technology of the Web, alongside HTML and CSS. 99% of websites use JavaScript on the client side for webpage behavior. Web browsers have a dedicated JavaScript engine that executes the client code.</p>
            
            <h3>JavaScript Display Possibilities</h3>
            <p>JavaScript can "display" data in different ways:</p>
            <ul>
                <li>Writing into an HTML element, using <code>innerHTML</code>.</li>
                <li>Writing into the HTML output using <code>document.write()</code>.</li>
                <li>Writing into an alert box, using <code>window.alert()</code>.</li>
                <li>Writing into the browser console, using <code>console.log()</code>.</li>
            </ul>
            <p>Example:</p>
        <img src="/Assets/Images/Courses/C-JS/m1-1.png" alt="HTML Structure Example" style="max-width:50%; height:auto;">
        </div>
        
        <hr>

        <div class="why-study">
            <h3>Why Study JavaScript?</h3>
            <p>JavaScript is one of the 3 languages all web developers must learn:</p>
            <ul>
                <li>HTML to define the content of web pages</li>
                <li>CSS to specify the layout of web pages</li>
                <li>JavaScript to program the behavior of web pages</li>
            </ul>
        </div>

        <hr>

        <div class="js-examples">
            <h3>JavaScript Can Change HTML Content</h3>
            <p>One of many JavaScript HTML methods is <code>getElementById()</code>. The example below "finds" an HTML element (with <code>id="demo"</code>), and changes the element content (<code>innerHTML</code>) to "Hello JavaScript":</p>
            <pre>
                document.getElementById("demo").innerHTML = "Hello JavaScript";
            </pre>

            <h3>JavaScript Can Change HTML Attribute Values</h3>
            <p>In this example, JavaScript changes the value of the <code>src</code> attribute of an <code>&lt;img&gt;</code> tag:</p>
            <pre>
                document.getElementById("myImage").src = "newImage.jpg";
            </pre>

            <h3>JavaScript Can Change HTML Styles (CSS)</h3>
            <p>Changing the style of an HTML element, is a variant of changing an HTML attribute:</p>
            <pre>
                document.getElementById("demo").style.fontSize = "35px";
            </pre>

            <h3>JavaScript Can Hide HTML Elements</h3>
            <p>Showing or hiding HTML elements can also be done by changing the display style:</p>
            <pre>
                document.getElementById("demo").style.display = "none";
            </pre>
        </div>

        <hr>

        <div class="script-tag">
            <h3>The <code>&lt;script&gt;</code> Tag</h3>
            <p>In HTML, JavaScript code is inserted between <code>&lt;script&gt;</code> and <code>&lt;/script&gt;</code> tags.</p>
            <pre>
                &lt;script&gt;
                document.getElementById("demo").innerHTML = "My First JavaScript";
                &lt;/script&gt;
            </pre>
            <p><strong>Note:</strong> Old JavaScript examples may use a type attribute: <code>&lt;script type="text/javascript"&gt;</code>. The type attribute is not required as JavaScript is the default scripting language in HTML.</p>
        </div>

        <hr>

        <div class="js-location">
            <h3>JavaScript in <code>&lt;head&gt;</code> or <code>&lt;body&gt;</code></h3>
            <p>You can place any number of scripts in an HTML document. Scripts can be placed in the <code>&lt;body&gt;</code>, or in the <code>&lt;head&gt;</code> section of an HTML page, or in both.</p>

            <h4>JavaScript in <code>&lt;head&gt;</code></h4>
            <pre>
                &lt;script&gt;
                function myFunction() {
                    document.getElementById("demo").innerHTML = "Paragraph changed.";
                }
                &lt;/script&gt;
            </pre>

            <h4>JavaScript in <code>&lt;body&gt;</code></h4>
            <pre>
                &lt;script&gt;
                function myFunction() {
                    document.getElementById("demo").innerHTML = "Paragraph changed.";
                }
                &lt;/script&gt;
            </pre>
            <p><strong>Note:</strong> Placing scripts at the bottom of the <code>&lt;body&gt;</code> element improves display speed, because script interpretation slows down the display.</p>
        </div>

        <hr>

        <div class="external-js">
            <h3>External JavaScript</h3>
            <p>Scripts can also be placed in external files with a .js extension. To use an external script, put the name of the script file in the <code>src</code> attribute of a <code>&lt;script&gt;</code> tag:</p>
            <pre>
                &lt;script src="myScript.js"&gt;&lt;/script&gt;
            </pre>
            <p>External scripts are practical when the same code is used in many different web pages.</p>
            <p><strong>Advantages of External JavaScript:</strong></p>
            <ul>
                <li>Separates HTML and code</li>
                <li>Makes HTML and JavaScript easier to read and maintain</li>
                <li>Cached JavaScript files can speed up page loads</li>
            </ul>
        </div>

        <hr>

        <button class="next-module" data-next="quiz1">Take Quiz</button>
    </div>
`,
    content2: `<div>
    <h1>Introduction to JavaScript</h1>
    <h2>Module 2</h2>
    <hr>

    <div class="definition">
        <p><strong>JavaScript Statements</strong></p>
        <p>A computer program is a list of "instructions" to be "executed" by a computer. In a programming language, these programming instructions are called statements. A JavaScript program is a list of programming statements.</p>
        <p>JavaScript statements are composed of: Values, Operators, Expressions, Keywords, and Comments.</p>
        <p><strong>Example:</strong></p>
        <pre>
            let x, y, z;    // Statement 1
            x = 5;          // Statement 2
            y = 6;          // Statement 3
            z = x + y;      // Statement 4
        </pre>
    </div>

    <hr>

    <div class="html-element">
        <p><strong>Semicolons</strong></p>
        <p>Semicolons separate JavaScript statements. Add a semicolon at the end of each executable statement:</p>
        <pre>
            let a, b, c;  // Declare 3 variables
            a = 5;        // Assign the value 5 to a
            b = 6;        // Assign the value 6 to b
            c = a + b;    // Assign the sum of a and b to c
        </pre>
        <p><strong>Note:</strong> Ending statements with semicolons is not required, but highly recommended.</p>
    </div>

    <hr>

    <div class="creating-page">
        <h2>JavaScript Code Blocks</h2>
        <p>JavaScript statements can be grouped together in code blocks, inside curly brackets <code>{...}</code>. The purpose of code blocks is to define statements to be executed together. One place you will find statements grouped together in blocks is in JavaScript functions:</p>
        <pre>
            function myFunction() {
              document.getElementById("demo1").innerHTML = "Hello Dolly!";
              document.getElementById("demo2").innerHTML = "How are you?";
            }
        </pre>
    </div>

    <hr>

    <button class="next-module" data-next="quiz2">Take Quiz</button>
</div>

`,
content3: 
`<div>
    <h1>Introduction to JavaScript</h1>
    <h2>Module 3</h2>
    <hr>

    <div class="definition">
        <p><strong>JavaScript Syntax</strong></p>
        <p>JavaScript syntax is the set of rules for constructing JavaScript programs. It includes how to create and use variables, literals, and values.</p>
        <p><strong>Example:</strong></p>
        <pre>
// How to create variables:
var x;
let y;

// How to use variables:
x = 5;
y = 6;
let z = x + y;
        </pre>
    </div>

    <hr>

    <div class="html-element">
        <p><strong>JavaScript Values and Variables</strong></p>
        <p>Fixed values are called Literals, and variable values are called Variables. The two most important syntax rules for fixed values are:</p>
        <ul>
            <li>Numbers are written with or without decimals (e.g., 10.50, 1001).</li>
            <li>Strings are text written within double or single quotes (e.g., "John Doe" or 'John Doe').</li>
        </ul>
        <p><strong>Example:</strong></p>
        <pre>
            let x;
            x = 6;
        </pre>
    </div>

    <hr>

    <div class="creating-page">
        <h2>JavaScript Operators and Expressions</h2>
        <p>JavaScript uses arithmetic operators (<code>+ - * /</code>) to compute values. An expression is a combination of values, variables, and operators, which computes to a value.</p>
        <p><strong>Example:</strong></p>
        <pre>
            (5 + 6) * 10
            x * 10
            "John" + " " + "Doe"
        </pre>
    </div>

    <hr>

    <button class="next-module" data-next="quiz3">Take Quiz</button>
</div>

`,
content4: 
`<div>
    <h1>Introduction to JavaScript</h1>
    <h2>Module 4</h2>
    <hr>

    <div class="definition">
        <p><strong>JavaScript Comments</strong></p>
        <p>JavaScript comments can be used to explain JavaScript code, making it more readable. They can also be used to prevent execution when testing alternative code.</p>
    </div>

    <hr>

    <div class="html-element">
        <p><strong>Single Line Comments</strong></p>
        <p>Single line comments start with <code>//</code>. Any text between <code>//</code> and the end of the line will be ignored by JavaScript.</p>
        <p><strong>Example:</strong></p>
        <pre>
// Change heading:
document.getElementById("myH").innerHTML = "My First Page";

// Change paragraph:
document.getElementById("myP").innerHTML = "My first paragraph.";
        </pre>
    </div>

    <hr>

    <div class="creating-page">
        <h2>Multi-line Comments</h2>
        <p>Multi-line comments start with <code>/*</code> and end with <code>*/</code>. Any text between <code>/*</code> and <code>*/</code> will be ignored by JavaScript.</p>
        <p><strong>Example:</strong></p>
        <pre>
/*
The code below will change
the heading with id = "myH"
and the paragraph with id = "myP"
in my web page:
*/
document.getElementById("myH").innerHTML = "My First Page";
document.getElementById("myP").innerHTML = "My first paragraph.";
        </pre>
    </div>

    <hr>

    <div class="creating-page">
        <h2>Using Comments to Prevent Execution</h2>
        <p>Using comments to prevent execution of code is useful for code testing.</p>
        <p><strong>Example:</strong></p>
        <pre>
//document.getElementById("myH").innerHTML = "My First Page";
document.getElementById("myP").innerHTML = "My first paragraph.";
        </pre>
    </div>

    <hr>

    <button class="next-module" data-next="quiz4">Take Quiz</button>
</div>

`,
content5: 
`<div>
    <h1>Introduction to JavaScript</h1>
    <h2>Module 5</h2>
    <hr>

    <div class="definition">
        <p><strong>JavaScript Variables</strong></p>
        <p>Variables are containers for storing data values. JavaScript variables can be declared using <code>var</code>, <code>let</code>, or <code>const</code>.</p>
    </div>

    <hr>

    <div class="html-element">
        <p><strong>Declaring Variables</strong></p>
        <p>In this example, <code>x</code>, <code>y</code>, and <code>z</code> are undeclared variables, automatically declared when first used:</p>
        <pre>
x = 5;
y = 6;
z = x + y;
        </pre>
    </div>

    <hr>

    <div class="creating-page">
        <h2>Using let and const</h2>
        <p><strong>Example:</strong></p>
        <pre>
let x = 5;
let y = 6;
let z = x + y;

const price1 = 5;
const price2 = 6;
let total = price1 + price2;
        </pre>
        <p>The variables <code>price1</code> and <code>price2</code> are declared with <code>const</code>. These are constant values that cannot be changed. The variable <code>total</code> is declared with <code>let</code> and can be changed.</p>
    </div>

    <hr>

    <button class="next-module" data-next="quiz5">Take Quiz</button>
</div>

`,
content6: 
`<div>
    <h1>Introduction to JavaScript</h1>
    <h2>Module 6</h2>
    <hr>

    <div class="definition">
        <p><strong>The let Keyword</strong></p>
        <p>The <code>let</code> keyword was introduced in ES6 (2015) and provides block scope. Variables declared with <code>let</code> must be declared before use and cannot be redeclared in the same scope.</p>
    </div>

    <hr>

    <div class="html-element">
        <p><strong>Block Scope</strong></p>
        <p>Variables declared with <code>let</code> have block scope, meaning they are only available within the block they are defined in:</p>
        <pre>
{
  let x = 2;
// x can NOT be used here outside the block
}
        </pre>
    </div>

    <hr>

    <div class="creating-page">
        <h2>Redeclaring Variables</h2>
        <p>Variables defined with <code>let</code> cannot be redeclared. Redeclaring a variable inside a block will not affect the variable outside the block:</p>
        <pre>
let x = 10;
// Here x is 10

{
  let x = 2;
// Here x is 2 inside the block
}

// Here x is 10 outside the block
        </pre>
    </div>

    <hr>

    <button class="next-module" data-next="quiz6">Take Quiz</button>
</div>

`,
content7: `
<div>
    <h1>JavaScript Const</h1>
    <h2>Module 7</h2>
    <hr>
    <div class="definition">
        <p>The <code>const</code> keyword was introduced in ES6 (2015) and is used to declare block-scoped variables that cannot be redeclared or reassigned.</p>
        
        <h3>Characteristics of <code>const</code></h3>
        <ul>
            <li><strong>Cannot be Redeclared:</strong> Variables defined with <code>const</code> cannot be redeclared within the same scope.</li>
            <li><strong>Cannot be Reassigned:</strong> A variable defined with <code>const</code> cannot be reassigned.</li>
            <pre>
                const PI = 3.141592653589793;
                // PI = 3.14; // This will give an error
            </pre>
            <li><strong>Must be Assigned:</strong> <code>const</code> variables must be assigned a value when they are declared.</li>
        </ul>
        
        <h3>When to Use <code>const</code></h3>
        <p>Use <code>const</code> when you know that the value should not be changed. Common use cases include:</p>
        <ul>
            <li>A new Array</li>
            <li>A new Object</li>
            <li>A new Function</li>
            <li>A new RegExp</li>
        </ul>
        
        <h3>Constant Objects and Arrays</h3>
        <p>The <code>const</code> keyword defines a constant reference to a value. Therefore:</p>
        <ul>
            <li><strong>Cannot Reassign:</strong>
                <pre>
                    const cars = ["Saab", "Volvo", "BMW"];
                    // cars = ["Toyota", "Volvo", "Audi"]; // ERROR
                </pre>
            </li>
            <li><strong>Can Change Elements:</strong>
                <pre>
                    cars[0] = "Toyota"; // Changing an element
                    cars.push("Audi");  // Adding an element
                </pre>
            </li>
            <li><strong>For Objects:</strong>
                <pre>
                    const car = { type: "Fiat", model: "500", color: "white" };
                    car.color = "red"; // Changing a property
                    car.owner = "Johnson"; // Adding a property
                </pre>
            </li>
        </ul>
    </div>

    <hr>
    
    <button class="next-module" data-next="quiz7">Take Quiz</button>
</div>
`,

content8: `
<div>
    <h1>JavaScript Operators</h1>
    <h2>Module 8</h2>
    <hr>
    <div class="definition">
        <p>Operators are special symbols in JavaScript that perform operations on variables and values. They can be categorized into various types.</p>
        
        <h3>Types of Operators</h3>
        <ul>
            <li><strong>Arithmetic Operators:</strong> Used for mathematical calculations.</li>
            <li><strong>Assignment Operators:</strong> Used to assign values to variables.</li>
            <li><strong>Comparison Operators:</strong> Used to compare two values.</li>
            <li><strong>Logical Operators:</strong> Used to combine two or more conditions.</li>
            <li><strong>Bitwise Operators:</strong> Operate on bits and perform bit-by-bit operations.</li>
        </ul>
        
        <h3>Examples of Operators</h3>
        <h4>Arithmetic Operators</h4>
        <pre>
            let sum = 10 + 5; // Addition
            let product = 10 * 5; // Multiplication
            let difference = 10 - 5; // Subtraction
            let quotient = 10 / 5; // Division
        </pre>
        
        <h4>Assignment Operators</h4>
        <pre>
            let x = 10; // Assigns 10 to x
            x += 5; // x = x + 5
        </pre>
        
        <h4>Comparison Operators</h4>
        <pre>
            let isEqual = (5 === 5); // true
            let isNotEqual = (5 !== 10); // true
        </pre>
        
        <h4>Logical Operators</h4>
        <pre>
            let andResult = (true && false); // false
            let orResult = (true || false); // true
        </pre>
        
        <h4>Bitwise Operators</h4>
        <pre>
            let bitwiseAnd = 5 & 1; // 1
            let bitwiseOr = 5 | 1; // 5
        </pre>
    </div>

    <hr>
    
    <button class="next-module" data-next="quiz8">Take Quiz</button>
</div>
`,

content9: `
<div>
    <h1>JavaScript Arithmetic Operators</h1>
    <h2>Module 9</h2>
    <hr>
    <div class="definition">
        <p>Arithmetic operators are used to perform basic mathematical operations on numbers. They are essential for performing calculations in JavaScript.</p>
        
        <h3>Types of Arithmetic Operators</h3>
        <ul>
            <li><strong>Addition (+):</strong> Adds two numbers.</li>
            <li><strong>Subtraction (-):</strong> Subtracts one number from another.</li>
            <li><strong>Multiplication (*):</strong> Multiplies two numbers.</li>
            <li><strong>Division (/):</strong> Divides one number by another.</li>
            <li><strong>Modulus (%):</strong> Returns the remainder of a division operation.</li>
            <li><strong>Exponentiation (**):</strong> Raises the first operand to the power of the second.</li>
        </ul>
        
        <h3>Examples</h3>
        <h4>Addition</h4>
        <pre>
            let sum = 10 + 5; // 15
        </pre>
        
        <h4>Subtraction</h4>
        <pre>
            let difference = 10 - 5; // 5
        </pre>
        
        <h4>Multiplication</h4>
        <pre>
            let product = 10 * 5; // 50
        </pre>
        
        <h4>Division</h4>
        <pre>
            let quotient = 10 / 5; // 2
        </pre>
        
        <h4>Modulus</h4>
        <pre>
            let remainder = 10 % 3; // 1
        </pre>
        
        <h4>Exponentiation</h4>
        <pre>
            let power = 2 ** 3; // 8
        </pre>
    </div>

    <hr>
    
    <button class="next-module" data-next="quiz9">Take Quiz</button>
</div>
`,

content10: `
<div>
    <h1>JavaScript Assignment Operators</h1>
    <h2>Module 10</h2>
    <hr>
    <div class="definition">
        <p>Assignment operators are used to assign values to variables. They are a fundamental part of JavaScript programming.</p>
        
        <h3>Types of Assignment Operators</h3>
        <ul>
            <li><strong>Basic Assignment (=):</strong> Assigns the right operand to the left operand.</li>
            <li><strong>Addition Assignment (+=):</strong> Adds the right operand to the left operand and assigns the result to the left operand.</li>
            <li><strong>Subtraction Assignment (-=):</strong> Subtracts the right operand from the left operand and assigns the result to the left operand.</li>
            <li><strong>Multiplication Assignment (*=):</strong> Multiplies the left operand by the right operand and assigns the result to the left operand.</li>
            <li><strong>Division Assignment (/=):</strong> Divides the left operand by the right operand and assigns the result to the left operand.</li>
            <li><strong>Modulus Assignment (%=):</strong> Takes the modulus using two operands and assigns the result to the left operand.</li>
        </ul>
        
        <h3>Examples</h3>
        <h4>Basic Assignment</h4>
        <pre>
            let x = 10; // Assigns 10 to x
        </pre>
        
        <h4>Addition Assignment</h4>
        <pre>
            x += 5; // x = x + 5; // 15
        </pre>
        
        <h4>Subtraction Assignment</h4>
        <pre>
            x -= 5; // x = x - 5; // 10
        </pre>
        
        <h4>Multiplication Assignment</h4>
        <pre>
            x *= 2; // x = x * 2; // 20
        </pre>
        
        <h4>Division Assignment</h4>
        <pre>
            x /= 2; // x = x / 2; // 10
        </pre>
        
        <h4>Modulus Assignment</h4>
        <pre>
            x %= 3; // x = x % 3; // 1
        </pre>
    </div>

    <hr>
    
    <button class="next-module" data-next="quiz10">Take Quiz</button>
</div>
`,

content11: '<h1>Assessment</h1><p>Click Start assesment to answer all the question regarding this module!</p> <button class="next-module" data-next="assessment">Start Assessment</button>',
};  

const quizzes = {
    quiz1: `
    <h1>QUIZ # 1</h1>
        <h2>What is JavaScript?</h2>
        <div class="quiz-options">
            <div class="quiz-card" onclick="selectQuizAnswer(1, 'Often abbreviated as JS, is a programming language and core technology of the Web.', true)">Often abbreviated as JS, is a programming language and core technology of the Web.</div> <!-- Correct Answer -->
            <div class="quiz-card" onclick="selectQuizAnswer(1, 'The function is invoked (called) when a button is clicked.')">The function is invoked (called) when a button is clicked.</div>
            <div class="quiz-card" onclick="selectQuizAnswer(1, 'Start the body of the document')">Start the body of the document</div>
        </div>
        <div id="selected-answer-1" class="selected-answer-container"></div>
        <button class="next-module" data-next="content2">Next Module</button>
    `,
    quiz2: `
    <h1>QUIZ # 2</h1>
        <h2>What JavaScript statements often start with a keyword to identify the JavaScript action to be performed?</h2>
        <div class="quiz-options">
            <div class="quiz-card" onclick="selectQuizAnswer(2, 'JavaScript Code Blocks')">JavaScript Code Blocks</div>
            <div class="quiz-card" onclick="selectQuizAnswer(2, 'JavaScript Line Length and Line Breaks')">JavaScript Line Length and Line Breaks</div>
            <div class="quiz-card" onclick="selectQuizAnswer(2, 'JavaScript Keywords', true)">JavaScript Keywords</div> <!-- Correct Answer -->
        </div>
        <div id="selected-answer-2" class="selected-answer-container"></div>
        <button class="next-module" data-next="content3">Next Module</button>
    `,
    quiz3: `
    <h1>QUIZ # 3</h1>
        <h2>What is JavaScript Comments?</h2>
        <div class="quiz-options">
            <div class="quiz-card" onclick="selectQuizAnswer(3, 'Code after double slashes // or between /* and */ is treated as a comment.', true)">Code after double slashes // or between /* and */ is treated as a comment.</div> <!-- Correct Answer -->
            <div class="quiz-card" onclick="selectQuizAnswer(3, 'Unicode covers (almost) all the characters, punctuations, and symbols in the world.')">Unicode covers (almost) all the characters, punctuations, and symbols in the world.</div>
            <div class="quiz-card" onclick="selectQuizAnswer(3, 'Identifiers are used to name variables and keywords, and functions.')">Identifiers are used to name variables and keywords, and functions.</div>
        </div>
        <div id="selected-answer-3" class="selected-answer-container"></div>
        <button class="next-module" data-next="content4">Next Module</button>
    `,
    quiz4: `
    <h1>QUIZ # 4</h1>
        <h2>What is multi-line Comments?</h2>
        <div class="quiz-options">
            <div class="quiz-card" onclick="selectQuizAnswer(4, 'Comments start with /* and end with */', true)">Comments start with /* and end with */</div> <!-- Correct Answer -->
            <div class="quiz-card" onclick="selectQuizAnswer(4, 'Comments to prevent execution of code is suitable for code testing.')">Comments to prevent execution of code is suitable for code testing.</div>
            <div class="quiz-card" onclick="selectQuizAnswer(4, 'Comments can also be used to prevent execution, when testing alternative code.')">Comments can also be used to prevent execution, when testing alternative code.</div>
        </div>
        <div id="selected-answer-4" class="selected-answer-container"></div>
        <button class="next-module" data-next="content5">Next Module</button>
    `,
    quiz5: `
    <h1>QUIZ # 5</h1>
        <h2>What is Javascript arithmetic?</h2>
        <div class="quiz-options">
            <div class="quiz-card" onclick="selectQuizAnswer(5, 'As a letter, identifiers containing _ are valid variable names')">As a letter, identifiers containing _ are valid variable names</div>
            <div class="quiz-card" onclick="selectQuizAnswer(5, 'As with algebra, you can do arithmetic with JavaScript variables, using operators like = and +', true)">As with algebra, you can do arithmetic with JavaScript variables, using operators like = and +</div> <!-- Correct Answer -->
            <div class="quiz-card" onclick="selectQuizAnswer(5, 'Professional programmers often use it as an alias for the main function in a JavaScript library.')">Professional programmers often use it as an alias for the main function in a JavaScript library.</div>
        </div>
        <div id="selected-answer-5" class="selected-answer-container"></div>
        <button class="next-module" data-next="content6">Next Module</button>
    `,
    quiz6: `
    <h1>QUIZ # 6</h1>
        <h2>What is Let Hoisting?</h2>
        <div class="quiz-options">
            <div class="quiz-card" onclick="selectQuizAnswer(6, 'A variable using the let keyword can solve this problem.', true)">A variable using the let keyword can solve this problem.</div> <!-- Correct Answer -->
            <div class="quiz-card" onclick="selectQuizAnswer(6, 'Variables defined with var are hoisted to the top and can be initialised at any time.')">Variables defined with var are hoisted to the top and can be initialised at any time.</div>
            <div class="quiz-card" onclick="selectQuizAnswer(6, 'A JavaScript variable with var is allowed anywhere in a program')">A JavaScript variable with var is allowed anywhere in a program</div>
        </div>
        <div id="selected-answer-6" class="selected-answer-container"></div>
        <button class="next-module" data-next="content7">Next Module</button>
    `,
    quiz7: `
    <h1>QUIZ # 7</h1>
        <h2>What is a Constant object?</h2>
        <div class="quiz-options">
            <div class="quiz-card" onclick="selectQuizAnswer(7, 'Can change the properties of a constant object')">Can change the properties of a constant object</div>
            <div class="quiz-card" onclick="selectQuizAnswer(7, 'A variable defined with the const keyword cannot be reassigned:', true)">A variable defined with the const keyword cannot be reassigned:</div> <!-- Correct Answer -->
            <div class="quiz-card" onclick="selectQuizAnswer(7, 'A JavaScript var variable is allowed anywhere in a program')">A JavaScript var variable is allowed anywhere in a program</div>
        </div>
        <div id="selected-answer-7" class="selected-answer-container"></div>
        <button class="next-module" data-next="content8">Next Module</button>
    `,
    quiz8: `
    <h1>QUIZ # 8</h1>
        <h2>What are not Types of JavaScript Operators?</h2>
        <div class="quiz-options">
            <div class="quiz-card" onclick="selectQuizAnswer(8, 'String Operators')">String Operators</div>
            <div class="quiz-card" onclick="selectQuizAnswer(8, 'Bitwise Operators')">Bitwise Operators</div>
            <div class="quiz-card" onclick="selectQuizAnswer(8, 'Const Operator', true)">Const Operator</div> <!-- Correct Answer -->
        </div>
        <div id="selected-answer-8" class="selected-answer-container"></div>
        <button class="next-module" data-next="content9">Next Module</button>
    `,
    quiz9: `
    <h1>QUIZ # 9</h1>
        <h2>What is the operator of Decrementing?</h2>
        <div class="quiz-options">
            <div class="quiz-card" onclick="selectQuizAnswer(9, '(--)', true)">(--)</div> <!-- Correct Answer -->
            <div class="quiz-card" onclick="selectQuizAnswer(9, '(++)')">(++)</div>
            <div class="quiz-card" onclick="selectQuizAnswer(9, '(**)')">(**)</div>
        </div>
        <div id="selected-answer-9" class="selected-answer-container"></div>
        <button class="next-module" data-next="content10">Next Module</button>
    `,
    quiz10: `
    <h1>QUIZ # 10</h1>
        <h2>What is |=?</h2>
        <div class="quiz-options">
            <div class="quiz-card" onclick="selectQuizAnswer(10, 'Bitwise OR Assignment Operator', true)">Bitwise OR Assignment Operator</div> <!-- Correct Answer -->
            <div class="quiz-card" onclick="selectQuizAnswer(10, 'Bitwise XOR Assignment Operator')">Bitwise XOR Assignment Operator</div>
            <div class="quiz-card" onclick="selectQuizAnswer(10, 'Bitwise AND Assignment Operator')">Bitwise AND Assignment Operator</div>
        </div>
        <div id="selected-answer-10" class="selected-answer-container"></div>
         <button class="next-module" data-next="content11">Next Module</button>
    `,
};


const correctAnswers = {
    1: 'Often abbreviated as JS, is a programming language and core technology of the Web.',
    2: 'JavaScript Keywords',
    3: 'Code after double slashes // or between /* and */ is treated as a comment.',
    4: 'Comments start with /* and end with */',
    5: 'As with algebra, you can do arithmetic with JavaScript variables, using operators like = and +',
    6: 'A variable using the let keyword can solve this problem.',
    7: 'A variable defined with the const keyword cannot be reassigned.',
    8: 'Const Operator',
    9: '(--)',
    10: 'Bitwise OR Assignment Operator',
};


const assessmentQuestions = [
    { question: "What is the primary purpose of assignment operators in JavaScript?", choices: ["A) To perform arithmetic calculations", "B) To compare values", "C) To assign values to variables"], selectedChoice: null, correctAnswer: "C) To assign values to variables" },
    { question: "What is JavaScript often abbreviated as?", choices: ["A) JS", "B) Java", "C) Script"], selectedChoice: null, correctAnswer: "A) JS" },
    { question: "Where should a semicolon be added in JavaScript?", choices: ["A) At the beginning of each statement", "B) At the end of each executable statement", "C) After each variable declaration"], selectedChoice: null, correctAnswer: "B) At the end of each executable statement" },
    { question: "What is a JavaScript program essentially composed of?", choices: ["A) Only variables and functions", "B) Primarily loops and conditions", "C) Values, operators, expressions, keywords, and comments"], selectedChoice: null, correctAnswer: "C) Values, operators, expressions, keywords, and comments" },
    { question: "What is the primary purpose of JavaScript syntax?", choices: ["A) To define the website's layout", "B) To create new HTML elements", "C) To establish the rules for constructing JavaScript programs"], selectedChoice: null, correctAnswer: "C) To establish the rules for constructing JavaScript programs" },
    { question: "Which keywords are used in JavaScript to declare variables?", choices: ["A) define, create, assign", "B) var, const, let", "C) declare, initialize, set"], selectedChoice: null, correctAnswer: "B) var, const, let" },
    { question: "Which symbols are used to create single-line comments in JavaScript?", choices: ["A) /* */", "B) //", "C) #"], selectedChoice: null, correctAnswer: "B) //" },
    { question: "Which symbols are used to create multi-line comments in JavaScript?", choices: ["A) //", "B) /* */", "C) --"], selectedChoice: null, correctAnswer: "B) /* */" },
    { question: "What is the primary purpose of variables in JavaScript?", choices: ["A) To define JavaScript functions", "B) To create new HTML elements", "C) To store data values"], selectedChoice: null, correctAnswer: "C) To store data values" },
    { question: "What is the primary purpose of the let keyword in JavaScript?", choices: ["A) To declare a constant variable", "B) To declare a block-scoped variable", "C) To declare a global variable"], selectedChoice: null, correctAnswer: "B) To declare a block-scoped variable" },
    { question: "What is the primary purpose of the const keyword in JavaScript?", choices: ["A) To declare a variable that can be reassigned multiple times.", "B) To declare a variable that can be reassigned only once.", "C) To declare a constant variable that cannot be reassigned."], selectedChoice: null, correctAnswer: "C) To declare a constant variable that cannot be reassigned." },
    { question: "Which of the following is NOT an arithmetic operator in JavaScript?", choices: ["A) + (addition)", "B) - (subtraction)", "C) * (multiplication)"], selectedChoice: null, correctAnswer: "C) * (multiplication)" },
    { question: "What is the result of the following JavaScript expression: Math.sqrt(16)?", choices: ["A) 4", "B) 4", "C) 8"], selectedChoice: null, correctAnswer: "C) 8" },
    { question: "What is the result of the following JavaScript expression: Math.round(3.7)?", choices: ["A) 3", "B) 4", "C) 3.7"], selectedChoice: null, correctAnswer: "C) 3.7" },
];

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
