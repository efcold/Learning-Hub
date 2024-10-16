const Logo={
    src: "/Assets/Images/Index/PYTHON.png",
    alt: "Course Logo" 
}
const categoryTitle = {
    content1: { icon: 'fab fa-python', title: 'Introduction to Python' },
    content2: { icon: 'fas fa-file-code', title: 'Python Syntax' },
    content3: { icon: 'fas fa-comment-dots', title: 'Python Comments' },
    content4: { icon: 'fas fa-vial', title: 'Python Variables' },
    content5: { icon: 'fas fa-database', title: 'Python Data Types' },
    content6: { icon: 'fas fa-calculator', title: 'Python Arithmetic Operators' },
    content7: { icon: 'fas fa-arrow-right', title: 'Python Assignment Operators' }, // Note: replace with an appropriate icon if needed
    content8: { icon: 'fas fa-equals', title: 'Python Comparison Operators' },
    content9: { icon: 'fas fa-flag', title: 'Python Booleans' }, // Note: replace with an appropriate icon if needed
    content10: { icon: 'fas fa-cogs', title: 'Python Operators' },
    content11: { icon: 'fas fa-check-circle', title: 'Assessment' },
};

const categoryContent = {
    content1: `
<div>
    <h1>Introduction to Python</h1>
    <h2>Module 1</h2>
    <hr>
    <div class="what-is-python">
        <h3>What is Python?</h3>
        <p>Python is a widely-used programming language developed by Guido van Rossum, first released in 1991. Its applications include:</p>
        <ul>
            <li>Server-side web development</li>
            <li>Software development</li>
            <li>Mathematical computing</li>
            <li>System scripting</li>
        </ul>
    </div>

    <hr>

    <div class="what-can-python-do">
        <h3>What Can Python Do?</h3>
        <ul>
            <li>Build web applications on servers</li>
            <li>Automate workflows</li>
            <li>Connect to and manipulate databases and files</li>
            <li>Process large datasets and perform complex mathematical tasks</li>
            <li>Facilitate rapid prototyping and develop production-ready software</li>
        </ul>
    </div>

    <hr>

    <div class="why-choose-python">
        <h3>Why Choose Python?</h3>
        <ul>
            <li>Compatible across various platforms (Windows, Mac, Linux, Raspberry Pi)</li>
            <li>Features a clear, easy-to-read syntax akin to English</li>
            <li>Requires fewer lines of code compared to many other languages</li>
            <li>Enables quick prototyping through an interpreter system</li>
            <li>Supports multiple programming paradigms: procedural, object-oriented, and functional</li>
        </ul>
    </div>

    <hr>

    <div class="additional-information">
        <h3>Additional Information</h3>
        <p>The current major version is Python 3, while Python 2 remains in use for some legacy systems.</p>
        <p>Python can be written in text editors or IDEs like Thonny, PyCharm, and Eclipse.</p>
    </div>

    <hr>

    <div class="syntax">
        <h3>Syntax</h3>
        <p>Python prioritizes readability and uses line breaks to finish commands, relying on indentation to indicate scope instead of curly brackets.</p>
    </div>

    <hr>

    <div class="get-started">
        <h3>Get Started</h3>
        <h4>Python Installation</h4>
        <p>Most PCs and Macs come with Python pre-installed. To check if Python is installed:</p>
        <p><strong>On Windows:</strong> Search for "Python" in the Start menu, or open Command Prompt and run:</p>
        <pre>python --version</pre>
        <p><strong>On Linux/Mac:</strong> Open the Terminal and type:</p>
        <pre>python --version</pre>
        <p>If Python is not installed, you can download it for free from <a href="https://www.python.org">python.org</a>.</p>
    </div>

    <hr>

    <div class="python-quickstart">
        <h4>Python Quickstart</h4>
        <p>Python is an interpreted language, meaning you write Python files (.py) in a text editor and run them through the Python interpreter.</p>
        <p>To run a Python file, use the command:</p>
        <pre>python helloworld.py</pre>
        <p>Where "helloworld.py" is the name of your file.</p>
    </div>

    <hr>

    <div class="create-your-first-file">
        <h4>Create Your First Python File:</h4>
        <p>Open a text editor and write the following code:</p>
        <pre>              
          <img src="/Assets/Images/Courses/C-Python/m1-1.png" alt="HTML Structure Example" style="max-width:20%; height:auto;">
        </pre>
        <p>Save the file as helloworld.py.</p>
    </div>

    <hr>

    <div class="run-your-program">
        <h4>Run Your Program:</h4>
        <p>Open Command Prompt or Terminal.</p>
        <p>Navigate to the folder where you saved your file.</p>
        <p>Run:</p>
        <pre>              
          <img src="/Assets/Images/Courses/C-Python/m1-2.png" alt="HTML Structure Example" style="max-width:20%; height:auto;">
        </pre>
        <p>You should see:</p>
        <pre>Congratulations! You've just written and executed your first Python program.</pre>
    </div>

    <hr>

    <button class="next-module" data-next="quiz1">Take Quiz</button>
</div>
`,
content2: `
<div>
    <h1>Python Syntax</h1>
    <h2>Module 2</h2>
    <hr>
    
    <div class="executing-python-syntax">
        <h3>Executing Python Syntax</h3>
        <p>You can execute Python code in two ways:</p>
        <ul>
            <li><strong>Directly in the Command Line:</strong> You can enter Python commands directly in the command line (interpreter mode).</li>
        </ul>
        <p>For example:</p>
        <pre>>> print("Hello, World!")</pre>
        <pre>Hello, World!</pre>

        <ul>
            <li><strong>Through a Python File:</strong> Alternatively, you can write your Python code in a file with a .py extension and run it from the command line:</li>
        </ul>
        <pre>C:\\Users\\Your Name>python myfile.py</pre>
    </div>

    <hr>

    <div class="python-indentation">
        <h3>Python Indentation</h3>
        <h4>What is Indentation?</h4>
        <p>Indentation refers to the spaces at the beginning of a line of code. In Python, indentation is crucial as it defines the structure and flow of the code.</p>
        
        <h4>Importance of Indentation:</h4>
        <p>Unlike some programming languages where indentation is just for readability, in Python, it determines how code blocks are grouped.</p>
        <p>Example: Here’s a simple conditional statement:</p>
         <pre>              
          <img src="/Assets/Images/Courses/C-Python/m2-1.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>
        <p>In this example, the indented line is part of the if block.</p>
        
        <h4>Common Errors:</h4>
        <p>If you forget to indent, Python will raise an error:</p>
         <pre>              
          <img src="/Assets/Images/Courses/C-Python/m2-1.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>
    </div>

    <hr>

    <div class="indentation-consistency">
        <h4>Indentation Consistency</h4>
        <p>You can use any number of spaces for indentation, but it's common to use four spaces. It's crucial to maintain the same number of spaces within the same block.</p>
         <pre>              
          <img src="/Assets/Images/Courses/C-Python/m2-3.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>
        <p>However, mixing different indentation levels will cause an error:</p>
        <pre>              
          <img src="/Assets/Images/Courses/C-Python/m2-4.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>
        <p>This inconsistency will lead to a syntax error.</p>
        <p>In summary, proper indentation is essential in Python for defining code blocks, and consistency is key to avoiding errors.</p>
    </div>

    <hr>

    <div class="python-variables">
        <h3>Python Variables</h3>
        <p>In Python, a variable is created when you assign a value to it. This means you don't need a specific command to declare a variable; simply assign a value and the variable is ready to use.</p>
        <p>Examples:</p>
         <pre>              
          <img src="/Assets/Images/Courses/C-Python/m2-5.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>
        <p>In these examples, x is an integer variable, and y is a string variable. You can use these variables later in your code without any additional declarations.</p>
    </div>

    <hr>

    <div class="comments">
        <h3>Comments</h3>
        <p>Comments are used in Python for documentation within the code. They help explain what the code does, making it easier for others (or yourself) to understand it later. Comments are ignored by the Python interpreter, so they don’t affect the program’s execution.</p>
        <h4>How to Write Comments:</h4>
        <p>Comments start with a <code>#</code> symbol. Everything after the <code>#</code> on that line is treated as a comment.</p>
        <p>Example:</p>
        <pre># This is a comment explaining the next line of code
        <pre>              
          <img src="/Assets/Images/Courses/C-Python/m2-6.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre></pre>
        <p>In this example, the line starting with <code>#</code> is a comment and won't be executed. The second comment after print explains what that line does.</p>
        <p>Using comments effectively can make your code more readable and maintainable.</p>
    </div>

    <hr>

    <button class="next-module" data-next="quiz2">Take Quiz</button>
</div>
`,
content3: `
<div>
    <h1>Python Comments</h1>
    <h2>Module 3</h2>
    <hr>

    <div class="purpose">
        <h3>Purpose:</h3>
        <ul>
            <li><strong>Explanation:</strong> Clarify the purpose and functionality of the code.</li>
            <li><strong>Readability:</strong> Enhance understanding for yourself and others.</li>
            <li><strong>Prevent Execution:</strong> Comment out code during testing without deleting it.</li>
        </ul>
    </div>

    <hr>

    <div class="creating-comment">
        <h3>Creating a Comment</h3>
        <p>Comments start with a <code>#</code>, and Python ignores everything after it on that line.</p>
    </div>

    <hr>

    <div class="examples">
        <h3>Example:</h3>
        <pre>              
          <img src="/Assets/Images/Courses/C-Python/m3-1.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>
        <h4>Inline Comments</h4>
        <p>You can place comments at the end of a line:</p>
        <pre>              
          <img src="/Assets/Images/Courses/C-Python/m3-2.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>

        <h4>Commenting Out Code</h4>
        <p>Use comments to prevent code from executing:</p>
        <pre>              
          <img src="/Assets/Images/Courses/C-Python/m3-3.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>
    </div>

    <hr>

    <p>In summary, comments are useful for explaining code, improving readability, and controlling execution during testing.</p>

    <button class="next-module" data-next="quiz3">Take Quiz</button>
</div>
`,
content4: `
<div>
    <h1>Python Variables</h1>
    <h2>Module 4</h2>
    <hr>
    <h2>Python Variables</h2>
    <p>Variables are labels for storing data values.</p>
    
    <h3>Creation:</h3>
    <p>Variables are created when you assign a value:</p>
    <pre>              
          <img src="/Assets/Images/Courses/C-Python/m4-1.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
    </pre>

    <h3>Dynamic Typing:</h3>
    <p>Python variables don’t require type declarations and can change type:</p>
    <pre>              
          <img src="/Assets/Images/Courses/C-Python/m4-2.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>

    <h3>Casting:</h3>
    <p>You can convert variable types explicitly:</p>
    <pre>              
          <img src="/Assets/Images/Courses/C-Python/m4-3.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>

    <p>This flexibility makes Python easy to use!</p>

    <h2>Getting the Type</h2>
    <h3>Using type() Function:</h3>
    <p>You can determine the data type of a variable by using the type() function.</p>
    <pre>              
          <img src="/Assets/Images/Courses/C-Python/m4-4.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
    </pre>

    <h2>String Declaration</h2>
    <p>Single or Double Quotes: You can define string variables using either single or double quotes; both are valid.</p>
    <pre>              
          <img src="/Assets/Images/Courses/C-Python/m4-5.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>
    <p>Both declarations create the same string variable.</p>

    <h2>Case Sensitivity</h2>
    <p>Case-Sensitive Variable Names: Variable names in Python are case-sensitive. This means that <code>a</code> and <code>A</code> are treated as two distinct variables.</p>
    <pre>              
          <img src="/Assets/Images/Courses/C-Python/m4-6.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>

    <h2>Python - Variable Names</h2>
    <h3>Naming Rules:</h3>
    <ul>
        <li>A variable name must start with a letter (a-z, A-Z) or an underscore (_).</li>
        <li>It cannot start with a number.</li>
        <li>It can contain letters, numbers, and underscores only.</li>
        <li>Variable names are case-sensitive (e.g., age, Age, and AGE are different).</li>
        <li>A variable name cannot be a reserved Python keyword.</li>
    </ul>

    <h3>Examples of Legal Variable Names:</h3>
    <pre>              
          <img src="/Assets/Images/Courses/C-Python/m4-7.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>

    <h3>Examples of Illegal Variable Names:</h3>
    <pre>              
          <img src="/Assets/Images/Courses/C-Python/m4-8.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>

    <h2>Multi-Word Variable Names</h2>
    <p>To improve readability for variable names with multiple words, you can use different conventions:</p>
    <ul>
        <li><strong>Camel Case:</strong> The first word is lowercase, and each subsequent word starts with an uppercase letter. <br> Example: <code>myVariableName = "John"</code></li>
        <li><strong>Pascal Case:</strong> Each word starts with an uppercase letter. <br> Example: <code>MyVariableName = "John"</code></li>
        <li><strong>Snake Case:</strong> Each word is separated by an underscore (_). <br> Example: <code>my_variable_name = "John"</code></li>
    </ul>

    <h2>Python Variables - Assign Multiple Values</h2>
    <h3>Assigning Multiple Values to Multiple Variables</h3>
    <p>Multiple Variables in One Line: You can assign different values to multiple variables simultaneously.</p>
    <pre>              
          <img src="/Assets/Images/Courses/C-Python/m4-9.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>
    <p>Note: Ensure that the number of variables matches the number of values. If they don't match, you'll get a ValueError.</p>

    <h3>Assigning One Value to Multiple Variables</h3>
    <p>Same Value to Multiple Variables: You can also assign the same value to multiple variables in one line.</p>
    <pre>              
          <img src="/Assets/Images/Courses/C-Python/m4-10.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>

    <h3>Unpacking a Collection</h3>
    <p>Unpacking Collections: You can unpack values from collections like lists or tuples into individual variables. This is useful when you want to extract multiple values from a single collection.</p>
    <pre>              
          <img src="/Assets/Images/Courses/C-Python/m4-11.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>
        <button class="next-module" data-next="quiz4">Take Quiz</button>
</div>
`,
content5: 
`<div>
    <h1>Python Data Types</h1>
    <h2>Module 5</h2>
    <hr>
    <h2>Built-in Data Types in Python</h2>
    <p>Python has several built-in data types, which can be categorized as follows:</p>

    <h3>Text Type:</h3>
    <ul>
        <li><code>str</code>: Represents a string of characters.</li>
    </ul>

    <h3>Numeric Types:</h3>
    <ul>
        <li><code>int</code>: Represents integers (whole numbers).</li>
        <li><code>float</code>: Represents floating-point numbers (decimals).</li>
        <li><code>complex</code>: Represents complex numbers (numbers with real and imaginary parts).</li>
    </ul>

    <h3>Sequence Types:</h3>
    <ul>
        <li><code>list</code>: An ordered, mutable collection of items.</li>
        <li><code>tuple</code>: An ordered, immutable collection of items.</li>
        <li><code>range</code>: Represents a sequence of numbers, commonly used for looping.</li>
    </ul>

    <h3>Mapping Type:</h3>
    <ul>
        <li><code>dict</code>: Represents a collection of key-value pairs.</li>
    </ul>

    <h3>Set Types:</h3>
    <ul>
        <li><code>set</code>: An unordered collection of unique items.</li>
        <li><code>frozenset</code>: An immutable version of a set.</li>
    </ul>

    <h3>Boolean Type:</h3>
    <ul>
        <li><code>bool</code>: Represents Boolean values (True or False).</li>
    </ul>

    <h3>Binary Types:</h3>
    <ul>
        <li><code>bytes</code>: Represents a sequence of bytes.</li>
        <li><code>bytearray</code>: A mutable version of bytes.</li>
        <li><code>memoryview</code>: Provides a view of the byte data without copying.</li>
    </ul>

    <h3>None Type:</h3>
    <ul>
        <li><code>NoneType</code>: Represents the absence of a value (i.e., None).</li>
    </ul>

    <h2>Getting the Data Type</h2>
    <p>You can check the data type of any variable using the <code>type()</code> function:</p>

    <h3>Example:</h3>
     <pre>              
          <img src="/Assets/Images/Courses/C-Python/m5-1.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>

    <h2>Setting the Data Type</h2>
    <p>In Python, the data type of a variable is determined when you assign a value to it. Here are examples of assigning different data types:</p>

    <h3>Examples:</h3>
     <pre>              
          <img src="/Assets/Images/Courses/C-Python/m5-2.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>

    <h2>Setting the Specific Data Type</h2>
    <p>You can explicitly set a variable's data type using constructor functions:</p>

    <h3>Examples:</h3>
     <pre>              
          <img src="/Assets/Images/Courses/C-Python/m5-3.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>
    <button class="next-module" data-next="quiz5">Take Quiz</button>
</div>
`,
content6: 
`<div>
    <h1>Python Arithmetic Operators</h1>
    <h2>Module 6</h2>
    <hr>
    <h2>Arithmetic Operators</h2>
    <p>Arithmetic operators are used with numeric values to perform common mathematical operations:</p>

    <h3>Addition (+):</h3>
    <p>Adds two numbers.</p>
    <h4>Example:</h4>
     <pre>              
          <img src="/Assets/Images/Courses/C-Python/m6-1.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>

    <h3>Subtraction (-):</h3>
    <p>Subtracts the second number from the first.</p>
    <h4>Example:</h4>
     <pre>              
          <img src="/Assets/Images/Courses/C-Python/m6-2.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>

    <h3>Multiplication (*):</h3>
    <p>Multiplies two numbers.</p>
    <h4>Example:</h4>
     <pre>              
          <img src="/Assets/Images/Courses/C-Python/m6-3.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>

    <h3>Division (/):</h3>
    <p>Divides the first number by the second, resulting in a float.</p>
    <h4>Example:</h4>
     <pre>              
          <img src="/Assets/Images/Courses/C-Python/m6-4.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>

    <h3>Modulus (%):</h3>
    <p>Returns the remainder of the division.</p>
    <h4>Example:</h4>
     <pre>              
          <img src="/Assets/Images/Courses/C-Python/m6-5.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>

    <h3>Exponentiation (**):</h3>
    <p>Raises the first number to the power of the second.</p>
    <h4>Example:</h4>
     <pre>              
          <img src="/Assets/Images/Courses/C-Python/m6-6.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>

    <h3>Floor Division (//):</h3>
    <p>Divides the first number by the second and rounds down to the nearest integer.</p>
    <h4>Example:</h4>
     <pre>              
          <img src="/Assets/Images/Courses/C-Python/m6-7.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>
        <h2>Summary</h2>
    <p>Arithmetic operators allow you to perform basic mathematical operations such as addition, subtraction, multiplication, and division.</p>
    <p>Each operator serves a specific function, and they can be used with numeric values to manipulate data in Python.</p>
    <button class="next-module" data-next="quiz6">Take Quiz</button>
</div>

`,
content7: `
<div>
    <h1>Python Assignment Operators</h1>
    <h2>Module 7</h2>
    <hr>
    <h2>Assignment Operators</h2>
    <p>Assignment operators are used to assign values to variables:</p>
    
    <h3>Basic Assignment (=):</h3>
    <p>Assigns the value on the right to the variable on the left.</p>
    <h4>Example:</h4>
     <pre>              
          <img src="/Assets/Images/Courses/C-Python/m7-1.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>

    <h3>Addition Assignment (+=):</h3>
    <p>Adds the right operand to the left operand and assigns the result to the left operand. Equivalent: <code>x += 3</code> is the same as <code>x = x + 3</code>.</p>
    <h4>Example:</h4>
     <pre>              
          <img src="/Assets/Images/Courses/C-Python/m7-2.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>

    <h3>Subtraction Assignment (-=):</h3>
    <p>Subtracts the right operand from the left operand and assigns the result.</p>
    <h4>Example:</h4>
     <pre>              
          <img src="/Assets/Images/Courses/C-Python/m7-3.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>

    <h3>Multiplication Assignment (*=):</h3>
    <p>Multiplies the left operand by the right operand and assigns the result.</p>
    <h4>Example:</h4>
     <pre>              
          <img src="/Assets/Images/Courses/C-Python/m7-4.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>

    <h3>Division Assignment (/=):</h3>
    <p>Divides the left operand by the right operand and assigns the result.</p>
    <h4>Example:</h4>
     <pre>              
          <img src="/Assets/Images/Courses/C-Python/m7-5.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>

    <h3>Modulus Assignment (%=):</h3>
    <p>Applies the modulus operation and assigns the result.</p>
    <h4>Example:</h4>
     <pre>              
          <img src="/Assets/Images/Courses/C-Python/m7-6.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>

    <h3>Floor Division Assignment (//=):</h3>
    <p>Performs floor division and assigns the result.</p>
    <h4>Example:</h4>
     <pre>              
          <img src="/Assets/Images/Courses/C-Python/m7-7.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>

    <h3>Exponentiation Assignment (**=):</h3>
    <p>Raises the left operand to the power of the right operand and assigns the result.</p>
    <h4>Example:</h4>
     <pre>              
          <img src="/Assets/Images/Courses/C-Python/m7-8.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>

    <h3>Bitwise AND Assignment (&=):</h3>
    <p>Performs a bitwise AND operation and assigns the result.</p>
    <h4>Example:</h4>
     <pre>              
          <img src="/Assets/Images/Courses/C-Python/m7-9.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>

    <h3>Bitwise OR Assignment (|=):</h3>
    <p>Performs a bitwise OR operation and assigns the result.</p>
    <h4>Example:</h4>
     <pre>              
          <img src="/Assets/Images/Courses/C-Python/m7-10.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>

    <h3>Bitwise XOR Assignment (^=):</h3>
    <p>Performs a bitwise XOR operation and assigns the result.</p>
    <h4>Example:</h4>
     <pre>              
          <img src="/Assets/Images/Courses/C-Python/m7-11.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>

    <h3>Right Shift Assignment (>>=):</h3>
    <p>Performs a right bitwise shift and assigns the result.</p>
    <h4>Example:</h4>
     <pre>              
          <img src="/Assets/Images/Courses/C-Python/m7-12.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>

    <h3>Left Shift Assignment (<<=):</h3>
    <p>Performs a left bitwise shift and assigns the result.</p>
    <h4>Example:</h4>
     <pre>              
          <img src="/Assets/Images/Courses/C-Python/m7-13.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>

    <h3>Walrus Operator (:=):</h3>
    <p>Assigns a value to a variable as part of an expression. This is known as the walrus operator.</p>
    <h4>Example:</h4>
     <pre>              
          <img src="/Assets/Images/Courses/C-Python/m7-14.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>

    <h2>Summary</h2>
    <p>Assignment operators are used to assign values to variables and modify them in various ways. They combine assignment with arithmetic, bitwise, or logical operations, making code more concise and readable.</p>
    <button class="next-module" data-next="quiz7">Take Quiz</button>
</div>
`,
content8: `
<div>
    <h1>Python Comparison Operators</h1>
    <h2>Module 8</h2>
    <hr>
    <h2>Comparison Operators</h2>
    <p>Comparison operators are used to compare two values:</p>
    
    <h3>Equal (==):</h3>
    <p>Checks if two values are equal.</p>
    <h4>Example:</h4>
    <pre>              
          <img src="/Assets/Images/Courses/C-Python/m8-1.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>

    <h3>Not Equal (!=):</h3>
    <p>Checks if two values are not equal.</p>
    <h4>Example:</h4>
    <pre>              
          <img src="/Assets/Images/Courses/C-Python/m8-2.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>

    <h3>Greater Than (>):</h3>
    <p>Checks if the left value is greater than the right value.</p>
    <h4>Example:</h4>
    <pre>              
          <img src="/Assets/Images/Courses/C-Python/m8-3.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>

    <h3>Less Than (<):</h3>
    <p>Checks if the left value is less than the right value.</p>
    <h4>Example:</h4>
    <pre>              
          <img src="/Assets/Images/Courses/C-Python/m8-4.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>

    <h3>Greater Than or Equal To (>=):</h3>
    <p>Checks if the left value is greater than or equal to the right value.</p>
    <h4>Example:</h4>
    <pre>              
          <img src="/Assets/Images/Courses/C-Python/m8-5.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>

    <h3>Less Than or Equal To (<=):</h3>
    <p>Checks if the left value is less than or equal to the right value.</p>
    <h4>Example:</h4>
   <pre>              
          <img src="/Assets/Images/Courses/C-Python/m8-6.png" alt="HTML Structure Example" style="max-width:40%; height:auto;">
        </pre>

    <h2>Summary</h2>
    <p>Comparison operators are used to compare two values and return a Boolean result (True or False).</p>
    <p>These operators are essential for making decisions in conditional statements and loops in Python.</p>
    <button class="next-module" data-next="quiz8">Take Quiz</button>
</div>
`,
content9: 
`<div>
        <h1>HTML Comments</h1>
        <h2>Module 9</h2>
        <hr>
        <p>HTML comments are used to insert notes or explanations within your HTML code that are not displayed in the web browser. They are helpful for developers to leave reminders or explanations for themselves or others who may read the code later.</p>
      <hr>       
        <div class="syntax">
            <h3>Syntax</h3>
            <p>HTML comments are written using the following syntax:</p>
            <pre>
                &lt;!-- This is a comment --&gt;
            </pre>
        </div>
        <hr>
        <div class="examples">
            <h3>Examples</h3>
            <ul>
                <li><strong>Single-line Comment:</strong>
                    <pre>
                        &lt;!-- This is a single-line comment --&gt;
                    </pre>
                </li>
                <li><strong>Multi-line Comment:</strong>
                    <pre>
                        &lt;!-- 
                            This is a multi-line comment.
                            It can span multiple lines.
                        --&gt;
                    </pre>
                </li>
                <li><strong>Commenting Out Code:</strong>
                    <p>Comments can be used to temporarily disable code without deleting it:</p>
                    <pre>
                        &lt;!-- &lt;p&gt;This paragraph will not be displayed.&lt;/p&gt; --&gt;
                    </pre>
                </li>
            </ul>
        </div>
        <hr>
        <div class="key-points">
            <h3>Key Points</h3>
            <ul>
                <li>Comments can help improve the readability of the code.</li>
                <li>They are ignored by the browser, meaning they won't affect the rendering of the HTML.</li>
                <li>Comments should be used wisely, as excessive commenting can clutter the code.</li>
                <li>Using comments effectively can help maintain clear communication within the code, especially in collaborative projects.</li>
            </ul>
        </div>
        <hr>
        <button class="next-module" data-next="quiz9">Take Quiz</button>
    </div>
`,

content10: `<div>
        <h1>HTML Div</h1>
        <h2>Module 10</h2>
        <hr>
        <p>HTML <code>&lt;div&gt;</code> elements are used as container elements to group together related content and apply styles or layout. Here are some examples of how to use <code>&lt;div&gt;</code> elements:</p>
        
        <hr>

        <h2>1. Basic Div Example</h2>
        <div>
            <p>This is a basic div.</p>
        </div>
        <p>This is a simple <code>&lt;div&gt;</code> that contains a paragraph. The <code>&lt;div&gt;</code> acts as a container, grouping the paragraph together. It doesn't add any visible styling or layout on its own.</p>
        
        <hr>

        <h2>2. Div with Class</h2>
        <div class="content">
            <p>This div has a class for styling.</p>
        </div>
        <p>This <code>&lt;div&gt;</code> has a class named "content." Classes can be used in CSS to apply specific styles to all elements with that class, allowing for easier styling and layout management.</p>

        <hr>

        <h2>3. Nested Divs</h2>
        <div>
            <h2>Main Title</h2>
            <div>
                <p>This is a nested div.</p>
            </div>
        </div>
        <p>This example shows a <code>&lt;div&gt;</code> containing a heading (<code>&lt;h2&gt;</code>) and another <code>&lt;div&gt;</code> inside it. Nesting <code>&lt;div&gt;</code> elements helps organize content hierarchically, making it clearer and easier to style.</p>

        <hr>

        <h2>4. Div for Layout</h2>
        <div class="container">
            <h3>Header</h3>
            <p>This is the main content area.</p>
        </div>
        <p>This <code>&lt;div&gt;</code> acts as a container for both a header (<code>&lt;h3&gt;</code>) and a paragraph. It can be styled as a section of a webpage, often used to group related content together.</p>

        <hr>

        <h2>5. Multiple Divs</h2>
        <div>
            <p>First div content.</p>
        </div>
        <div>
            <p>Second div content.</p>
        </div>
        <p>Here, two separate <code>&lt;div&gt;</code> elements are used, each containing a paragraph. This structure can help separate different sections of content on the page.</p>

        <hr>

        <h2>6. Div with ID</h2>
        <div id="unique">
            <p>This div has a unique ID.</p>
        </div>
        <p>This <code>&lt;div&gt;</code> has an ID named "unique." IDs are intended to be unique within a page and can be targeted in CSS or JavaScript for specific styling or behavior. They are often used for elements that need specific styling or manipulation.</p>

        <hr>

        <button class="next-module" data-next="quiz10">Take Quiz</button>
    </div>
`,

content11: '<h1>Assessment</h1><p>Click Start assesment to answer all the question regarding this module!</p> <button class="next-module" data-next="assessment">Start Assessment</button>',
};  

const quizzes = {
    quiz1: `
    <h1>QUIZ # 1</h1>
        <h2>What is the Python Command Line?</h2>
        <div class="quiz-options">
            <div class="quiz-card" onclick="selectQuizAnswer(1, 'is an interpreted programming language, this means that as a developer you write Python')">is an interpreted programming language, this means that as a developer you write Python</div>
            <div class="quiz-card" onclick="selectQuizAnswer(1, 'To test a short amount of code in python sometimes it is quickest and easiest not to write the code in a file.')">To test a short amount of code in python sometimes it is quickest and easiest not to write the code in a file.</div>
            <div class="quiz-card" onclick="selectQuizAnswer(1, 'an interpreted, object-oriented, high-level programming language with dynamic semantics.')">an interpreted, object-oriented, high-level programming language with dynamic semantics.</div>
        </div>
        <div id="selected-answer-1" class="selected-answer-container"></div>
        <button class="next-module" data-next="content2">Next Module</button>
    `,
    quiz2: `
    <h1>QUIZ # 2</h1>
        <h2>Which of the following is the correct syntax for creating a tuple in Python?</h2>
        <div class="quiz-options">
            <div class="quiz-card" onclick="selectQuizAnswer(2, '[1, 2, 3]')">[1, 2, 3]</div>
            <div class="quiz-card" onclick="selectQuizAnswer(2, '{1, 2, 3}')">{1, 2, 3}</div>
            <div class="quiz-card" onclick="selectQuizAnswer(2, '(1, 2, 3)')">(1, 2, 3)</div>
        </div>
        <div id="selected-answer-2" class="selected-answer-container"></div>
        <button class="next-module" data-next="content3">Next Module</button>
    `,
    quiz3: `
    <h1>QUIZ # 3</h1>
        <h2>Which of the following is a valid way to write a multi-line comment in Python?</h2>
        <div class="quiz-options">
            <div class="quiz-card" onclick="selectQuizAnswer(3, '/* This is a multi-line comment */')">/* This is a multi-line comment */</div>
            <div class="quiz-card" onclick="selectQuizAnswer(3, '# This is a multi-line comment')"># This is a multi-line comment</div>
            <div class="quiz-card" onclick="selectQuizAnswer(3, '""" This is a multi-line comment """')">""" This is a multi-line comment """</div>
        </div>
        <div id="selected-answer-3" class="selected-answer-container"></div>
        <button class="next-module" data-next="content4">Next Module</button>
    `,
    quiz4: `
    <h1>QUIZ # 4</h1>
        <h2>Which of the following is a valid Python variable name?</h2>
        <div class="quiz-options">
            <div class="quiz-card" onclick="selectQuizAnswer(4, '123_abc')">123_abc</div>
            <div class="quiz-card" onclick="selectQuizAnswer(4, 'abc-123')">abc-123</div>
            <div class="quiz-card" onclick="selectQuizAnswer(4, 'abc_123')">abc_123</div>
        </div>
        <div id="selected-answer-4" class="selected-answer-container"></div>
        <button class="next-module" data-next="content5">Next Module</button>
    `,
    quiz5: `
    <h1>QUIZ # 5</h1>
        <h2>Which of the following data types is used to represent a collection of key-value pairs in Python?</h2>
        <div class="quiz-options">
            <div class="quiz-card" onclick="selectQuizAnswer(5, 'List')">List</div>
            <div class="quiz-card" onclick="selectQuizAnswer(5, 'Tuple')">Tuple</div>
            <div class="quiz-card" onclick="selectQuizAnswer(5, 'Dictionary')">Dictionary</div>
        </div>
        <div id="selected-answer-5" class="selected-answer-container"></div>
        <button class="next-module" data-next="content6">Next Module</button>
    `,
    quiz6: `
    <h1>QUIZ # 6</h1>
        <h2>What is the output of the following Python code?<br>x = 10<br>y = 3<br>print(x ** y)</h2>
        <div class="quiz-options">
            <div class="quiz-card" onclick="selectQuizAnswer(6, '30')">30</div>
            <div class="quiz-card" onclick="selectQuizAnswer(6, '13')">13</div>
            <div class="quiz-card" onclick="selectQuizAnswer(6, '1000')">1000</div>
        </div>
        <div id="selected-answer-6" class="selected-answer-container"></div>
        <button class="next-module" data-next="content7">Next Module</button>
    `,
    quiz7: `
    <h1>QUIZ # 7</h1>
        <h2>What is the output of the following Python code?<br>x = "10.5"<br>y = int(x)<br>print(y)</h2>
        <div class="quiz-options">
            <div class="quiz-card" onclick="selectQuizAnswer(7, '10.5')">10.5</div>
            <div class="quiz-card" onclick="selectQuizAnswer(7, '10')">10</div>
            <div class="quiz-card" onclick="selectQuizAnswer(7, 'Error: Cannot convert string to integer')">Error: Cannot convert string to integer</div>
        </div>
        <div id="selected-answer-7" class="selected-answer-container"></div>
        <button class="next-module" data-next="content8">Next Module</button>
    `,
    quiz8: `
    <h1>QUIZ # 8</h1>
        <h2>What is the output of the following Python code?<br>my_string = "Hello world"<br>print(my_string.startswith("Hello"))</h2>
        <div class="quiz-options">
            <div class="quiz-card" onclick="selectQuizAnswer(8, 'True')">True</div>
            <div class="quiz-card" onclick="selectQuizAnswer(8, 'False')">False</div>
            <div class="quiz-card" onclick="selectQuizAnswer(8, '"Hello"')">"Hello"</div>
        </div>
        <div id="selected-answer-8" class="selected-answer-container"></div>
        <button class="next-module" data-next="content9">Next Module</button>
    `,
    quiz9: `
    <h1>QUIZ # 9</h1>
        <h2>What is the operator of Decrementing?</h2>
        <div class="quiz-options">
            <div class="quiz-card" onclick="selectQuizAnswer(9, '(--)')">(--)</div>
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
            <div class="quiz-card" onclick="selectQuizAnswer(10, 'Bitwise OR Assignment Operator')">Bitwise OR Assignment Operator</div>
            <div class="quiz-card" onclick="selectQuizAnswer(10, 'Bitwise XOR Assignment Operator')">Bitwise XOR Assignment Operator</div>
            <div class="quiz-card" onclick="selectQuizAnswer(10, 'Logical AND assignment operator')">Logical AND assignment operator</div>
        </div>
        <div id="selected-answer-10" class="selected-answer-container"></div>
        <button class="next-module" data-next="content11">Next Module</button>
    `,
};

const pythonCorrectAnswers = {
    1: 'To test a short amount of code in python sometimes it is quickest and easiest not to write the code in a file.',
    2: '(1, 2, 3)',
    3: '""" This is a multi-line comment """',
    4: 'abc_123',
    5: 'Dictionary',
    6: '1000',
    7: 'Error: Cannot convert string to integer',
    8: 'True',
    9: '(--)',
    10: 'Bitwise OR Assignment Operator',
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
