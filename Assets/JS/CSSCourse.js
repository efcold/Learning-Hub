const Logo={
    src: "/Assets/Images/Index/CSS-W.png",
    alt: "Course Logo"
}
const categoryTitle = {
    content1: { icon: 'fas fa-house-user', title: 'Introduction to CSS1' }, 
    content2: { icon: 'fas fa-laptop-code', title: 'CSS Syntax' }, 
    content3: { icon: 'fas fa-tags', title: 'CSS Selectors' }, 
    content4: { icon: 'fas fa-file-import', title: 'How To Add CSS' }, 
    content5: { icon: 'fas fa-comment-dots', title: 'CSS Comments' }, 
    content6: { icon: 'fas fa-palette', title: 'Colors' }, 
    content7: { icon: 'fas fa-tint', title: 'Background Color' }, 
    content8: { icon: 'fas fa-quote-left', title: 'HTML Quotation and Citation' }, 
    content9: { icon: 'fas fa-sticky-note', title: 'HTML Comments' }, 
    content10: { icon: 'fas fa-box', title: 'HTML Div' }, 
    content11: { icon: 'fas fa-check-circle', title: 'Assessment' },
};
const categoryContent = {
    content1: `
    <div>
    <h1>CSS - Cascading Style Sheets</h1>
    <h2>Module 1</h2>
    <hr>

    <div class="definition">
        <p>What is CSS?</p>
        <p>CSS stands for Cascading Style Sheets. It describes how HTML elements are to be displayed on screen, paper, or in other media, saving a lot of work. It can control the layout of multiple web pages all at once. External stylesheets are stored in CSS files.</p>
    </div>

    <hr>

    <div class="css-demo">
        <h2>CSS Demo - One HTML Page with Multiple Styles</h2>
        <p>Here we will show one HTML page displayed with four different stylesheets. Click on the images below to see the different styles:</p>

        <div class="stylesheets">
            <p>Stylesheet 1</p>
            <img src="/Assets/Images/Courses/C-CSS/S1.png" alt="Stylesheet 1" style="max-width: 40%; height: auto;">
            <p>Stylesheet 2</p>
            <img src="/Assets/Images/Courses/C-CSS/S2.png" alt="Stylesheet 2" style="max-width: 40%; height: auto;">
            <p>Stylesheet 3</p>
            <img src="/Assets/Images/Courses/C-CSS/S3.png" alt="Stylesheet 3" style="max-width: 40%; height: auto;">
            <p>Stylesheet 4</p>
            <img src="/Assets/Images/Courses/C-CSS/S4.png" alt="Stylesheet 4" style="max-width: 40%; height: auto;">
            <p>No Stylesheet </p>
            <img src="/Assets/Images/Courses/C-CSS/NO-S.png" alt="No Stylesheet" style="max-width: 40%; height: auto;">
        </div>

        <h3>Multiple Stylesheets</h3>
        <p>When different stylesheets are applied to the same HTML page, each one changes the appearance in unique ways:</p>
        <ul>
            <li><strong>Stylesheet 1:</strong> Might apply a light color scheme, simple font, and a centered layout, giving the page a clean and minimal look.</li>
            <li><strong>Stylesheet 2:</strong> Could use bold typography, vibrant colors, and possibly a different layout or alignment, giving a more modern and dynamic feel.</li>
            <li><strong>Stylesheet 3:</strong> Might focus on spacing, adding more margins and padding between elements, or changing the overall structure (e.g., moving elements around the page).</li>
            <li><strong>Stylesheet 4:</strong> A dark theme, with darker background colors, light text, and additional visual effects like shadows or hover effects.</li>
        </ul>

        <h3>No Stylesheet</h3>
        <p>If no stylesheet is used, the page will appear using the browser's default styling, which includes:</p>
        <ul>
            <li>Standard fonts</li>
            <li>Black text on a white background</li>
            <li>Default spacing and layout</li>
            <li>Basic blue, underlined links</li>
            <li>No customizations for colors, fonts, or layout</li>
        </ul>
        <p>The page will look plain and unformatted, showing only the raw content without visual design.</p>
    </div>

    <hr>

    <button class="next-module" data-next="quiz1">Take Quiz</button>
</div>
`,
    content2: `
<div>
    <h1>CSS Syntax</h1>
    <h2>Module 2</h2>
    <hr>

    <div class="definition">
        <p>A CSS rule consists of a selector and a declaration block.</p>
        <h4>CSS Syntax</h4>
        <img src="/Assets/Images/Courses/C-CSS/Syntax.png" alt="Syntax" style="max-width: 40%; height: auto;">
        <p>The selector points to the HTML element you want to style.</p>
        <p>The declaration block contains one or more declarations separated by semicolons.</p>
        <p>Each declaration includes a CSS property name and a value, separated by a colon.</p>
        <p>Multiple CSS declarations are separated with semicolons, and declaration blocks are surrounded by curly braces.</p>
    </div>

    <hr>

    <div class="css-example">
        <h3>Example</h3>
        <p>In this example, all <code>&lt;p&gt;</code> elements will be center-aligned, with a red text color:</p>
        <img src="/Assets/Images/Courses/C-CSS/p-element.png" alt="p" style="max-width: 40%; height: auto;">
        <p><strong>Example Explained:</strong></p>
        <ul>
            <li><code>p</code> is a selector in CSS (it points to the HTML element you want to style: <code>&lt;p&gt;</code>).</li>
            <li><code>color</code> is a property, and <code>red</code> is the property value.</li>
            <li><code>text-align</code> is a property, and <code>center</code> is the property value.</li>
        </ul>
    </div>

    <hr>

    <div class="note">
        <p><strong>Note:</strong> You will learn much more about CSS selectors and CSS properties in the next chapters!</p>
    </div>

    <hr>

    <button class="next-module" data-next="quiz2">Take Quiz</button>
</div> 
`,
content3: `
<div>
<h1>CSS Selectors</h1>
<h2>Module 3</h2>
<hr>

<div class="definition">
    <p>A CSS selector selects the HTML element(s) you want to style.</p>
    <p>CSS selectors are used to "find" (or select) the HTML elements you want to style.</p>
    <p>We can divide CSS selectors into five categories:</p>
    <ul>
        <li><strong>Simple selectors:</strong> Select elements based on name, id, or class.</li>
        <li><strong>Combinator selectors:</strong> Select elements based on a specific relationship between them.</li>
        <li><strong>Pseudo-class selectors:</strong> Select elements based on a certain state.</li>
        <li><strong>Pseudo-elements selectors:</strong> Select and style a part of an element.</li>
        <li><strong>Attribute selectors:</strong> Select elements based on an attribute or attribute value.</li>
    </ul>
</div>

<hr>

<div class="css-example">
    <h3>The CSS Element Selector</h3>
    <p>The element selector selects HTML elements based on the element name.</p>
    <p><strong>Example:</strong> Here, all <code>&lt;p&gt;</code> elements on the page will be center-aligned, with a red text color.</p>
    <img src="/Assets/Images/Courses/C-CSS/e1.png" alt="e1" style="max-width: 40%; height: auto;">
</div>

<hr>

<div class="css-id-selector">
    <h3>The CSS ID Selector</h3>
    <p>The id selector uses the id attribute of an HTML element to select a specific element.</p>
    <p>The id of an element is unique within a page, so the id selector is used to select one unique element!</p>
    <p>To select an element with a specific id, write a hash (#) character, followed by the id of the element.</p>
    <img src="/Assets/Images/Courses/C-CSS/e2.png" alt="e3" style="max-width: 40%; height: auto;">
    <p><strong>Example:</strong> The CSS rule above will be applied to the HTML element with <code>id="para1"</code>.</p>
    <p><strong>Note:</strong> An id name cannot start with a number.</p>
</div>

<hr>

<div class="css-class-selector">
    <h3>The CSS Class Selector</h3>
    <p>The class selector selects HTML elements with a specific class attribute.</p>
    <p>To select elements with a specific class, write a period (.) character, followed by the class name.</p>
    <img src="/Assets/Images/Courses/C-CSS/e3.png" alt="e3" style="max-width: 40%; height: auto;">
    <p><strong>Example:</strong> In this example, all HTML elements with <code>class="center"</code> will be red and center-aligned.</p>

    <p>You can also specify that only specific HTML elements should be affected by a class.</p>
    <img src="/Assets/Images/Courses/C-CSS/e4.png" alt="e4" style="max-width: 40%; height: auto;">
    <p><strong>Example:</strong> In this example, only <code>&lt;p&gt;</code> elements with <code>class="center"</code> will be red and center-aligned.</p>

    <p>HTML elements can also refer to more than one class.</p>
    <img src="/Assets/Images/Courses/C-CSS/e5.png" alt="e5" style="max-width: 40%; height: auto;">
    <p><strong>Example:</strong> In this example, the <code>&lt;p&gt;</code> element will be styled according to both <code>class="center"</code> and <code>class="large"</code>.</p>
    <p><strong>Note:</strong> A class name cannot start with a number.</p>
</div>

<hr>

<div class="css-universal-selector">
    <h3>The CSS Universal Selector</h3>
    <p>The universal selector (*) selects all HTML elements on the page.</p>
    <img src="/Assets/Images/Courses/C-CSS/e6.png" alt="e6" style="max-width: 40%; height: auto;">
    <p><strong>Example:</strong> The CSS rule above will affect every HTML element on the page.</p>
</div>

<hr>

<div class="css-grouping-selector">
    <h3>The CSS Grouping Selector</h3>
    <p>The grouping selector selects all the HTML elements with the same style definitions.</p>
    <p>Look at the following CSS code (the <code>h1</code>, <code>h2</code>, and <code>p</code> elements have the same style definitions):</p>
    <img src="/Assets/Images/Courses/C-CSS/e7.png" alt="e7" style="max-width: 40%; height: auto;">
    <p><strong>Example:</strong> In this example, we have grouped the selectors to minimize the code.</p>
    <img src="/Assets/Images/Courses/C-CSS/e8.png" alt="e8" style="max-width: 40%; height: auto;">
</div>

<hr>

<button class="next-module" data-next="quiz3">Take Quiz</button>
</div>
`,
content4: `
<div>
<h1>How to Add CSS</h1>
<h2>Module 4</h2>
<hr>

<div class="definition">
    <p>There are three ways of inserting a style sheet:</p>
    <ul>
        <li><strong>External CSS</strong></li>
        <li><strong>Internal CSS</strong></li>
        <li><strong>Inline CSS</strong></li>
    </ul>
</div>

<hr>

<div class="css-external">
    <h3>External CSS</h3>
    <p>With an external style sheet, you can change the look of an entire website by changing just one file.</p>
    <p>Each HTML page must include a reference to the external style sheet file inside the <code>&lt;link&gt;</code> element, inside the <code>&lt;head&gt;</code> section.</p>
    <img src="/Assets/Images/Courses/C-CSS/f1.png" alt="f1" style="max-width: 40%; height: auto;">
    <img src="/Assets/Images/Courses/C-CSS/f2.png" alt="f2" style="max-width: 20%; height: auto;">
    <p>An external style sheet can be written in any text editor and must be saved with a <code>.css</code> extension. The external <code>.css</code> file should not contain any HTML tags.</p>
    <img src="/Assets/Images/Courses/C-CSS/f3.png" alt="f3" style="max-width: 40%; height: auto;">
    <p><strong>Note:</strong> Do not add a space between the property value (20) and the unit (px):<br>
    Incorrect: <code>margin-left: 20 px;</code><br>
    Correct: <code>margin-left: 20px;</code></p>
</div>

<hr>

<div class="css-internal">
    <h3>Internal CSS</h3>
    <p>An internal style sheet may be used if one single HTML page has a unique style.</p>
    <p>The internal style is defined inside the <code>&lt;style&gt;</code> element, inside the <code>&lt;head&gt;</code> section.</p>
   <img src="/Assets/Images/Courses/C-CSS/f4.png" alt="f4" style="max-width: 40%; height: auto;">
   <img src="/Assets/Images/Courses/C-CSS/f5.png" alt="f5" style="max-width: 30%; height: auto;">
</div>

<hr>

<div class="css-inline">
    <h3>Inline CSS</h3>
    <p>An inline style may be used to apply a unique style for a single element.</p>
    <p>To use inline styles, add the <code>style</code> attribute to the relevant element. The <code>style</code> attribute can contain any CSS property.</p>
    <img src="/Assets/Images/Courses/C-CSS/f6.png" alt="f6" style="max-width: 40%; height: auto;">
    <img src="/Assets/Images/Courses/C-CSS/f7.png" alt="f7" style="max-width: 40%; height: auto;">
</div>

<hr>

<button class="next-module" data-next="quiz4">Take Quiz</button>
</div>
`,
content5: `<div>
    <h1>CSS Comments</h1>
    <h2>Module 5</h2>
    <hr>

    <div class="definition">
        <p>CSS comments are not displayed in the browser, but they can help document your source code.</p>
        <p>Comments are used to explain the code and may help when you edit the source code at a later date. They are ignored by browsers.</p>
        <p>A CSS comment is placed inside the <code>&lt;style&gt;</code> element, and starts with <code>/*</code> and ends with <code>*/</code>:</p>
    </div>

    <hr>

    <div class="example">
        <h3>Example</h3>
        <img src="/Assets/Images/Courses/C-CSS/ff1.png" alt="ff1" style="max-width: 40%; height: auto;">
    </div>

    <hr>

    <div class="purpose">
        <h3>Purpose of CSS Comments</h3>
        <ul>
            <li>To clarify complex code.</li>
            <li>To leave notes for other developers (or your future self).</li>
            <li>To temporarily disable certain parts of your code for testing.</li>
        </ul>
    </div>

    <hr>

    <button class="next-module" data-next="quiz5">Take Quiz</button>
</div>
`,
content6: `<div>
<h1>CSS Colors</h1>
<h2>Module 6</h2>
<hr>

<div class="definition">
    <p>CSS Colors can be specified using named colors (e.g., Tomato), or using RGB, HEX, HSL, RGBA, and HSLA values.</p>
</div>

<hr>

<div class="predefined-colors">
    <h3>Predefined Color Names</h3>
    <p>CSS supports 140 color names, such as:</p>
    <ul>
        <li>Tomato</li>
        <li>DodgerBlue</li>
        <li>MediumSeaGreen</li>
        <li>Gray</li>
        <li>Violet</li>
    </ul>
</div>

<hr>

<img src="/Assets/Images/Courses/C-CSS/ss1.png" alt="ss1" style="max-width: 40%; height: auto;">

<hr>

<div class="color-values">
    <h3>Color Values</h3>
    <ul>
        <li><strong>RGB:</strong> <code>rgb(255, 99, 71)</code></li>
        <li><strong>HEX:</strong> <code>#ff6347</code></li>
        <li><strong>HSL:</strong> <code>hsl(9, 100%, 64%)</code></li>
        <li><strong>RGBA (with transparency):</strong> <code>rgba(255, 99, 71, 0.5)</code></li>
        <li><strong>HSLA (with transparency):</strong> <code>hsla(9, 100%, 64%, 0.5)</code></li>
    </ul>
</div>

<hr>

<button class="next-module" data-next="quiz6">Take Quiz</button>
</div>
`,
content7: `<div>
<h1>CSS Background Color</h1>
<h2>Module 7</h2>
<hr>

<div class="definition">
    <p>CSS Background Properties are used to apply background effects to elements. Key properties include:</p>
    <ul>
        <li><strong>background-color:</strong> Sets an element's background color.</li>
        <li><strong>background-image:</strong> Adds a background image.</li>
        <li><strong>background-repeat:</strong> Defines how a background image repeats.</li>
        <li><strong>background-attachment:</strong> Controls if a background scrolls with the page.</li>
        <li><strong>background-position:</strong> Sets the position of the background image.</li>
        <li><strong>background:</strong> A shorthand property for setting all background properties.</li>
    </ul>
</div>

<hr>

<div class="background-color-specifications">
    <h3>Specifies the background color of an element using:</h3>
    <ul>
        <li>Color name: <code>red</code></li>
        <li>HEX value: <code>#ff0000</code></li>
        <li>RGB value: <code>rgb(255,0,0)</code></li>
    </ul>
</div>

<hr>

<div class="background-color-example">
    <h3>Example Code</h3>
    <img src="/Assets/Images/Courses/C-CSS/sss1.png" alt="sss1" style="max-width: 40%; height: auto;">
    <h5>Output</h5>
    <img src="/Assets/Images/Courses/C-CSS/sss2.png" alt="sss2" style="max-width: 40%; height: auto;">
</div>

<hr>

<div class="opacity-transparency">
    <h3>Opacity / Transparency</h3>
    <p>The opacity property adjusts transparency (0.0 to 1.0). Lower values make elements more transparent.</p>
    <h4>Example Code</h4>
    <img src="/Assets/Images/Courses/C-CSS/sss3.png" alt="sss3" style="max-width: 40%; height: auto;">
    <h5>Output</h5>
    <img src="/Assets/Images/Courses/C-CSS/sss4.png" alt="sss4" style="max-width: 40%; height: auto;">
    </pre>
</div>

<hr>

<button class="next-module" data-next="quiz7">Take Quiz</button>
</div>
`,
content8: 
`<div>\
<h1>HTML Quotation and Citation Element</h1>\
<h2>Module 8</h2>\
<ol>\
    <li><strong>Blockquote</strong><br>\
        The <code>&lt;blockquote&gt;</code> element is used for longer quotations that are usually indented.<br>\
        <code>&lt;blockquote&gt;<br>\
            "The only limit to our realization of tomorrow is our doubts of today." – Franklin D. Roosevelt<br>\
        &lt;/blockquote&gt;</code>\
    </li>\
    <li><strong>Cite</strong><br>\
        The <code>&lt;cite&gt;</code> element is used to reference the title of a creative work, such as a book, article, or song.<br>\
        <code>&lt;p&gt;In her book, &lt;cite&gt;To Kill a Mockingbird&lt;/cite&gt;, Harper Lee addresses serious issues of race and injustice.&lt;/p&gt;</code>\
    </li>\
    <li><strong>Q (Inline Quotation)</strong><br>\
        The <code>&lt;q&gt;</code> element is used for shorter inline quotations and automatically adds quotation marks around the text.<br>\
        <code>&lt;p&gt;She said, &lt;q&gt;This is an example of an inline quotation.&lt;/q&gt;&lt;/p&gt;</code>\
    </li>\
    <li><strong>Abbr (Abbreviation)</strong><br>\
        The <code>&lt;abbr&gt;</code> element can also be used for citations, especially when providing the full name of an abbreviation.<br>\
        <code>&lt;p&gt;The &lt;abbr title="United Nations Educational, Scientific and Cultural Organization"&gt;UNESCO&lt;/abbr&gt; was founded in 1945.&lt;/p&gt;</code>\
    </li>\
    <li><strong>Address</strong><br>\
        The <code>&lt;address&gt;</code> element is used to provide contact information for the author of a document or an article, often displayed in italics.<br>\
        <code>&lt;address&gt;<br>\
            Written by &lt;a href="mailto:author@example.com"&gt;Author Name&lt;/a&gt;&lt;br&gt;<br>\
            123 Main St.&lt;br&gt;<br>\
            City, Country<br>\
        &lt;/address&gt;</code>\
    </li>\
</ol>\
<p>These elements help structure content related to quotations and citations clearly and semantically in HTML.</p>\
<button class="next-module" data-next="quiz8">Take Quiz</button>\
</div>`,

content9: `<div>\
<h1>HTML Comments</h1>\
<h2>Module 9</h2>\
<p>HTML comments are used to insert notes or explanations within your HTML code that are not displayed in the web browser. They are helpful for developers to leave reminders or explanations for themselves or others who may read the code later.</p>\
<h2>Syntax</h2>\
<p>HTML comments are written using the following syntax:</p>\
<code>&lt;!-- This is a comment --&gt;</code>\
<h2>Examples</h2>\
<ul>\
    <li><strong>Single-line Comment:</strong><br>\
        <code>&lt;!-- This is a single-line comment --&gt;</code>\
    </li>\
    <li><strong>Multi-line Comment:</strong><br>\
        <code>&lt;!-- <br>\
            This is a multi-line comment.<br>\
            It can span multiple lines.<br>\
        --&gt;</code>\
    </li>\
    <li><strong>Commenting Out Code:</strong><br>\
        Comments can be used to temporarily disable code without deleting it:<br>\
        <code>&lt;!-- &lt;p&gt;This paragraph will not be displayed.&lt;/p&gt; --&gt;</code>\
    </li>\
</ul>\
<h2>Key Points</h2>\
<ul>\
    <li>Comments can help improve the readability of the code.</li>\
    <li>They are ignored by the browser, meaning they won\'t affect the rendering of the HTML.</li>\
    <li>Comments should be used wisely, as excessive commenting can clutter the code.</li>\
    <li>Using comments effectively can help maintain clear communication within the code, especially in collaborative projects.</li>\
</ul>\
<button class="next-module" data-next="quiz9">Take Quiz</button>\
</div>`,

content10: `<div>\
<h1>HTML Div</h1>\
<h2>Module 10</h2>\
<p>HTML <code>&lt;div&gt;</code> elements are used as container elements to group together related content and apply styles or layout. Here are some examples of how to use <code>&lt;div&gt;</code> elements:</p>\
<h2>1. Basic Div Example</h2>\
<div>\
    <p>This is a basic div.</p>\
</div>\
<p>This is a simple <code>&lt;div&gt;</code> that contains a paragraph. The <code>&lt;div&gt;</code> acts as a container, grouping the paragraph together. It doesn\'t add any visible styling or layout on its own.</p>\
<h2>2. Div with Class</h2>\
<div class="content">\
    <p>This div has a class for styling.</p>\
</div>\
<p>This <code>&lt;div&gt;</code> has a class named "content." Classes can be used in CSS to apply specific styles to all elements with that class, allowing for easier styling and layout management.</p>\
<h2>3. Nested Divs</h2>\
<div>\
    <h2>Main Title</h2>\
    <div>\
        <p>This is a nested div.</p>\
    </div>\
</div>\
<p>This example shows a <code>&lt;div&gt;</code> containing a heading (<code>&lt;h2&gt;</code>) and another <code>&lt;div&gt;</code> inside it. Nesting <code>&lt;div&gt;</code> elements helps organize content hierarchically, making it clearer and easier to style.</p>\
<h2>4. Div for Layout</h2>\
<div class="container">\
    <h3>Header</h3>\
    <p>This is the main content area.</p>\
</div>\
<p>This <code>&lt;div&gt;</code> acts as a container for both a header (<code>&lt;h3&gt;</code>) and a paragraph. It can be styled as a section of a webpage, often used to group related content together.</p>\
<h2>5. Multiple Divs</h2>\
<div>\
    <p>First div content.</p>\
</div>\
<div>\
    <p>Second div content.</p>\
</div>\
<p>Here, two separate <code>&lt;div&gt;</code> elements are used, each containing a paragraph. This structure can help separate different sections of content on the page.</p>\
<h2>6. Div with ID</h2>\
<div id="unique">\
    <p>This div has a unique ID.</p>\
</div>\
<p>This <code>&lt;div&gt;</code> has an ID named "unique." IDs are intended to be unique within a page and can be targeted in CSS or JavaScript for specific styling or behavior. They are often used for elements that need specific styling or manipulation.</p>\
<button class="next-module" data-next="quiz10">Take Quiz</button>\
</div>`,

    content11: '<h1>Assessment</h1><p>Click Start assesment to answer all the question regarding this module!</p> <button class="next-module" data-next="assessment">Start Assessment</button>',
};

const quizzes = {
    quiz1: `
    <h1>QUIZ # 1</h1>
        <h2>What happens if you apply different stylesheets to one HTML page?</h2>
        <div class="quiz-options">
            <div class="quiz-card" onclick="selectQuizAnswer(1, 'No change happens')">No change happens</div>
            <div class="quiz-card" onclick="selectQuizAnswer(1, 'The page will use all styles at once')">The page will use all styles at once</div>
            <div class="quiz-card" onclick="selectQuizAnswer(1, 'The appearance of the webpage will change based on the stylesheet used')">The appearance of the webpage will change based on the stylesheet used</div>
        </div>
        <div id="selected-answer-1" class="selected-answer-container"></div>
        <button class="next-module" data-next="content2">Next Module</button>
    `,
    quiz2: `
    <h1>QUIZ # 2</h1>
        <h2>In CSS, what does the selector do?</h2>
        <div class="quiz-options">
            <div class="quiz-card" onclick="selectQuizAnswer(2, 'Chooses the color of the text')">Chooses the color of the text</div>
            <div class="quiz-card" onclick="selectQuizAnswer(2, 'Points to the HTML element you want to style')">Points to the HTML element you want to style</div>
            <div class="quiz-card" onclick="selectQuizAnswer(2, 'Adds a comment to the code')">Adds a comment to the code</div>
        </div>
        <div id="selected-answer-2" class="selected-answer-container"></div>
        <button class="next-module" data-next="content3">Next Module</button>
    `,
    quiz3: `
    <h1>QUIZ # 3</h1>
        <h2>What is JavaScript Comments?</h2>
        <div class="quiz-options">
            <div class="quiz-card" onclick="selectQuizAnswer(3, 'Code after double slashes // or between /* and */ is treated as a comment.')">Code after double slashes // or between /* and */ is treated as a comment.</div>
            <div class="quiz-card" onclick="selectQuizAnswer(3, 'Unicode covers (almost) all the characters, punctuations, and symbols in the world.')">Unicode covers (almost) all the characters, punctuations, and symbols in the world.</div>
            <div class="quiz-card" onclick="selectQuizAnswer(3, 'Identifiers are used to name variables and keywords, and functions.')">Identifiers are used to name variables and keywords, and functions.</div>
        </div>
        <div id="selected-answer-3" class="selected-answer-container"></div>
        <button class="next-module" data-next="content4">Next Module</button>
    `,
    quiz4: `
    <h1>QUIZ # 4</h1>
        <h2>Where should internal CSS be placed within an HTML document?</h2>
        <div class="quiz-options">
            <div class="quiz-card" onclick="selectQuizAnswer(4, 'Inside the <body>')">Inside the <body></div>
            <div class="quiz-card" onclick="selectQuizAnswer(4, 'Inside the <footer>')">Inside the <footer></div>
            <div class="quiz-card" onclick="selectQuizAnswer(4, 'Inside the <style> tag, in the <head> section')">Inside the <style> tag, in the <head> section</div>
        </div>
        <div id="selected-answer-4" class="selected-answer-container"></div>
        <button class="next-module" data-next="content5">Next Module</button>
    `,
    quiz5: `
    <h1>QUIZ # 5</h1>
        <h2>Which of the following is a valid CSS comment?</h2>
        <div class="quiz-options">
            <div class="quiz-card" onclick="selectQuizAnswer(5, '// This is a comment //')">// This is a comment //</div>
            <div class="quiz-card" onclick="selectQuizAnswer(5, '<!-- This is a comment -->')"><!-- This is a comment --></div>
            <div class="quiz-card" onclick="selectQuizAnswer(5, '/* This is a comment */')">/* This is a comment */</div>
            <div class="quiz-card" onclick="selectQuizAnswer(5, '# This is a comment')"># This is a comment</div>
        </div>
        <div id="selected-answer-5" class="selected-answer-container"></div>
        <button class="next-module" data-next="content6">Next Module</button>
    `,
    quiz6: `
    <h1>QUIZ # 6</h1>
        <h2>How would you apply a background color to an element in CSS?</h2>
        <div class="quiz-options">
            <div class="quiz-card" onclick="selectQuizAnswer(6, 'background-color:blue;')">background-color:blue;</div>
            <div class="quiz-card" onclick="selectQuizAnswer(6, 'border-color:blue;')">border-color:blue;</div>
            <div class="quiz-card" onclick="selectQuizAnswer(6, 'text-color:blue;')">text-color:blue;</div>
        </div>
        <div id="selected-answer-6" class="selected-answer-container"></div>
        <button class="next-module" data-next="content7">Next Module</button>
    `,
    quiz7: `
    <h1>QUIZ # 7</h1>
        <h2>Which CSS code will set a full green background for a div element, but with 30% transparency?</h2>
        <div class="quiz-options">
            <div class="quiz-card" onclick="selectQuizAnswer(7, 'div { background-color: green; opacity: 0.3; }')">div { background-color: green; opacity: 0.3; }</div>
            <div class="quiz-card" onclick="selectQuizAnswer(7, 'div { background-color: green; opacity: 3; }')">div { background-color: green; opacity: 3; }</div>
            <div class="quiz-card" onclick="selectQuizAnswer(7, 'div { background-color: rgba(0, 128, 0, 0.3); }')">div { background-color: rgba(0, 128, 0, 0.3); }</div>
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
            <div class="quiz-card" onclick="selectQuizAnswer(8, 'Const Operator')">Const Operator</div>
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

const correctAnswers = {
    1: 'The appearance of the webpage will change based on the stylesheet used',
    2: 'Points to the HTML element you want to style',
    3: 'Code after double slashes // or between /* and */ is treated as a comment.',
    4: 'Inside the <style> tag, in the <head> section',
    5: '/* This is a comment */',
    6: 'background-color:blue;',
    7: 'div { background-color: green; opacity: 0.3; }',
    8: 'Const Operator',
    9: '(--)',
    10: 'Bitwise OR Assignment Operator',
};

const assessmentQuestions = [
    { question: "What does CSS stand for?", choices: ["A) Creative Style Sheets", "B) Cascading Style Sheets", "C) Computer Style Sheets"], selectedChoice: null, correctAnswer: "B) Cascading Style Sheets" },
    { question: "What is the primary function of CSS?", choices: ["A) To create HTML elements", "B) To describe how HTML elements should be displayed", "C) To add interactivity to HTML elements"], selectedChoice: null, correctAnswer: "B) To describe how HTML elements should be displayed" },
    { question: "A CSS rule consists of which two main parts?", choices: ["A) Selector and declaration block", "B) CSS file and HTML file", "C) Font and color"], selectedChoice: null, correctAnswer: "A) Selector and declaration block" },
    { question: "How do you separate multiple CSS declarations inside a declaration block?", choices: ["A) Colon (:)", "B) Comma (,)", "C) Semicolon (;)"], selectedChoice: null, correctAnswer: "C) Semicolon (;)" },
    { question: "Where should an external CSS file be linked inside an HTML document?", choices: ["A) Inside the <body> section", "B) Inside the <head> section", "C) Inside the <footer> section"], selectedChoice: null, correctAnswer: "B) Inside the <head> section" },
    { question: "Which of these is the correct way to apply an inline CSS style to an HTML h1 element?", choices: ["A) &lt;h1 style=color: red;&gt;Hello&lt;/h1&gt;", "B) &lt;h1 class=color: red;&gt;Hello&lt;/h1&gt;", "C) &lt;h1 link=color:red;&gt;Hello&lt;/h1&gt;"], selectedChoice: null, correctAnswer: "A) <h1 style=\"color: red;\">Hello</h1>" },
    { question: "What is the correct syntax for writing comments in a CSS file?", choices: ["A) <!-- This is a comment -->", "B) /* This is a comment */", "C) // This is a comment"], selectedChoice: null, correctAnswer: "B) /* This is a comment */" },
    { question: "Why would you use comments in your CSS code?", choices: ["A) To make CSS code run faster", "B) To explain the code for yourself or other developers", "C) To style the comment text"], selectedChoice: null, correctAnswer: "B) To explain the code for yourself or other developers" },
    { question: "Which of the following is a correct HEX value for a color?", choices: ["A) #ff0000", "B) hsl(0, 100%, 50%)", "C) rgb(255, 0, 0)"], selectedChoice: null, correctAnswer: "A) #ff0000" },
    { question: "Which CSS property is used to change the text color of an element?", choices: ["A) background-color", "B) font-color", "C) color"], selectedChoice: null, correctAnswer: "C) color" },
    { question: "How would you set a background color using the color name 'lightblue'?", choices: ["A) background: lightblue;", "B) background-image: lightblue;", "C) background-color: lightblue;"], selectedChoice: null, correctAnswer: "C) background-color: lightblue;" },
    { question: "Which of these is an RGB color value that represents blue?", choices: ["A) rgb(0, 0, 255)", "B) rgb(255, 0, 0)", "C) rgb(0, 255, 0)"], selectedChoice: null, correctAnswer: "A) rgb(0, 0, 255)" },
    { question: "What does the background-attachment property control in CSS?", choices: ["A) Controls how the background image repeats", "B) Controls whether a background image scrolls with the page content", "C) Controls the direction of the background color gradient"], selectedChoice: null, correctAnswer: "B) Controls whether a background image scrolls with the page content" },
    { question: "How would you use CSS to set the background image of a web page?", choices: ["A) background: image:();", "B) background-image:;", "C) background-image: url ;"]        , selectedChoice: null, correctAnswer: "C) background-image: url('example.jpg');" },
    { question: "How do you set an element to 50% transparent using CSS?", choices: ["A) opacity: 0;", "B) opacity: 0.5;", "C) opacity: 1;"], selectedChoice: null, correctAnswer: "B) opacity: 0.5;" }
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

    selectedAnswers[currentQuestionIndex] = assessmentQuestions[currentQuestionIndex].selectedChoice;
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
