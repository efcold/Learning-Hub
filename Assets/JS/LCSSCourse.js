const Logo={
    src: "/Assets/Images/Index/CSS-W.png",
    alt: "Course Logo"
}
const categoryTitle = {
    content1: { icon: 'fas fa-house-user', title: 'Introduction to CSS' }, 
    content2: { icon: 'fas fa-laptop-code', title: 'CSS Syntax' }, 
    content3: { icon: 'fas fa-tags', title: 'CSS Selectors' }, 
    content4: { icon: 'fas fa-file-import', title: 'How To Add CSS' }, 
    content5: { icon: 'fas fa-comment-dots', title: 'CSS Comments' }, 
    content6: { icon: 'fas fa-palette', title: 'Colors' }, 
    content7: { icon: 'fas fa-tint', title: 'Background Color' }, 
    content8: { icon: 'fas fa-image', title: 'Background Image' }, 
    content9: { icon: 'fas fa-border-all', title: 'CSS Border Properties' }, 
    content10: { icon: 'fas fa-expand', title: 'CSS Border Width' },
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
content8: `<div>
<h1>CSS Background Image</h1>
<h2>Module 8</h2>
<hr>

<div class="definition">
    <p>The <strong>background-image</strong> property specifies an image to use as the background of an element. It allows you to add an image as the background of any HTML element, making your website more visually appealing. However, using a background image requires some care to ensure it looks good and doesn't affect the readability of the content.</p>
    <p>By default, the image repeats itself to cover the entire area of that element unless you specify otherwise.</p>
</div>

<hr>

<div class="basic-example">
    <h3>Basic Example: Setting a Background Image for the Page</h3>
    <p>To set an image as the background for the entire page, you'll apply the <code>background-image</code> CSS property to the <code>&lt;body&gt;</code> tag.</p>
    <h4>Example Code:</h4>
    <pre>
<code>
body {
  background-image: url("paper.gif");
}
</code>
    </pre>
    <p>In this case, an image called <code>paper.gif</code> is set as the background of the entire page.</p>
</div>

<hr>

<div class="full-example">
    <h3>Full Example Code</h3>
        <img src="/Assets/Images/Courses/C-CSS/m8-1.png" alt="sss1" style="max-width: 40%; height: auto;">
<h1>Hello World!</h1>
<p>This page has an image as the background!</p>

</body>
</html>
</code>
    </pre>
</div>

<hr>

<div class="readability">
    <h3>Ensuring Readability</h3>
    <p>Using a background image can be a great design choice, but you need to ensure that your text remains easy to read. A busy or bright image might make your website look unprofessional or difficult to use if the text becomes unreadable.</p>
</div>

<hr>

<div class="bad-combination">
    <h3>Example of a Bad Combination</h3>
    <p>This example shows a bad combination of text and background image. In this case, the text might blend with the image, creating poor readability. Always choose background images carefully to ensure the text stands out and is easily readable.</p>
    <h4>Example Code:</h4>
    <pre>
<code>
        <img src="/Assets/Images/Courses/C-CSS/m8-2.png" alt="m8-2" style="max-width: 40%; height: auto;">

        <img src="/Assets/Images/Courses/C-CSS/m8-3.png" alt="m8-3" style="max-width: 40%; height: auto;">

</code>
    </pre>
</div>

<hr>

<button class="next-module" data-next="quiz8">Take Quiz</button>
</div>`,

content9: `<div>
<h1>CSS Border Properties</h1>
<h2>Module 9</h2>
<hr>

<div class="definition">
    <p>The CSS border properties allow you to design the borders around HTML elements. You can control border style, width, and color for each side of an element’s border.</p>
</div>

<hr>

<div class="border-structure">
    <h3>Basic Structure of a Border:</h3>
    <ul>
        <li><strong>Style:</strong> The type of border (solid, dashed, dotted, etc.)</li>
        <li><strong>Width:</strong> How thick the border is.</li>
        <li><strong>Color:</strong> The color of the border.</li>
    </ul>
</div>

<hr>

<div class="border-examples">
    <h3>Different Styles of a Border:</h3>

    <h4>1. Borders on All Sides:</h4>
    <p>This div has borders on all four sides. The CSS border property defines the width, style, and color for all borders.</p>
    <pre>
<code>
        <img src="/Assets/Images/Courses/C-CSS/m8-1.png" alt="sss1" style="max-width: 40%; height: auto;">

<div class="box1">I have borders on all sides.</div>
<style>
  .box1 {
    border: 1px solid black;
    padding: 10px;
    margin: 10px 0;
  }
</style>
</code>
    </pre>

    <h4>2. Red Bottom Border:</h4>
    <p>This div uses only a bottom border, which is styled to be red and thin.</p>
    <pre>
            <img src="/Assets/Images/Courses/C-CSS/m9-2.png" alt="sss1" style="max-width: 40%; height: auto;">

<code>
<div class="box2">I have a red bottom border.</div>
<style>
  .box2 {
    border-bottom: 2px solid red;
    padding: 10px;
    margin: 10px 0;
  }
</style>
</code>
    </pre>

    <h4>3. Rounded Borders:</h4>
    <p>This div has rounded borders on all sides using the <code>border-radius</code> property.</p>
    <pre>
            <img src="/Assets/Images/Courses/C-CSS/m9-3.png" alt="sss1" style="max-width: 40%; height: auto;">

<code>
<div class="box3">I have rounded borders.</div>
<style>
  .box3 {
    border: 1px solid lightgray;
    border-radius: 10px;
    padding: 10px;
    margin: 10px 0;
  }
</style>
</code>
    </pre>

    <h4>4. Blue Left Border:</h4>
    <p>This div has a border only on the left, and it's styled in blue. The background color makes it more distinct.</p>
    <pre>
                <img src="/Assets/Images/Courses/C-CSS/m9-4.png" alt="sss1" style="max-width: 40%; height: auto;">

<code>
<div class="box4">I have a blue left border.</div>
<style>
  .box4 {
    border-left: 5px solid blue;
    background-color: lightcyan;
    padding: 10px;
    margin: 10px 0;
  }
</style>
</code>
    </pre>
</div>

<hr>

<div class="border-style-explanation">
    <h3>CSS Border-Style Property Explanation</h3>
    <p>The <code>border-style</code> property is used to define the style or type of border you want to show around an element (like text boxes or divs). It determines how the border around an element will look.</p>
    
    <h4>Types of Borders:</h4>
    <ul>
        <li><code>dotted</code> - Creates a dotted border.</li>
        <li><code>dashed</code> - Creates a dashed border.</li>
        <li><code>solid</code> - Creates a solid (straight line) border.</li>
        <li><code>double</code> - Creates a double line for the border.</li>
        <li><code>groove</code> - Creates a 3D-like grooved border effect (depends on the border color).</li>
        <li><code>ridge</code> - Creates a 3D ridged border effect (depends on the border color).</li>
        <li><code>inset</code> - Creates an inset (sunken in) border effect (depends on the border color).</li>
        <li><code>outset</code> - Creates an outset (popping out) border effect (depends on the border color).</li>
        <li><code>none</code> - No border at all.</li>
        <li><code>hidden</code> - Similar to none, hides the border.</li>
        <li><code>mix</code> - You can mix different styles for each side of the element (top, right, bottom, left).</li>
    </ul>
</div>

<hr>

<div class="border-style-usage">
    <h3>How to Use This in CSS:</h3>
    <p>You can apply these border-style values to elements in your webpage. Here's how to add them:</p>
    <h4>Example Code:</h4>
    <pre>
<code>
<p class="dotted">This is a dotted border.</p>
<p class="dashed">This is a dashed border.</p>
<p class="solid">This is a solid border.</p>
<p class="double">This is a double border.</p>
<p class="groove">This is a groove border.</p>
<p class="ridge">This is a ridge border.</p>
<p class="inset">This is an inset border.</p>
<p class="outset">This is an outset border.</p>
<p class="none">This is no border.</p>
<p class="hidden">This is a hidden border.</p>
<p class="mix">This is a mixed border: top is dotted, right is dashed, bottom is solid, left is double.</p>
</code>
    </pre>

    <h4>Here’s the CSS for the Above HTML:</h4>
    <pre>
                <img src="/Assets/Images/Courses/C-CSS/m9-5.png" alt="sss1" style="max-width: 40%; height: auto;">

<code>
<style>
  p {
    padding: 10px;
    margin: 10px;
    border-width: 2px; /* Control the thickness of the border */
  }

  p.dotted {border-style: dotted;}
  p.dashed {border-style: dashed;}
  p.solid {border-style: solid;}
  p.double {border-style: double;}
  p.groove {border-style: groove;}
  p.ridge {border-style: ridge;}
  p.inset {border-style: inset;}
  p.outset {border-style: outset;}
  p.none {border-style: none;}
  p.hidden {border-style: hidden;}
  /* Each side has a different border style */
  p.mix {border-style: dotted dashed solid double;}
</style>
</code>
    </pre>
</div>

<hr>

<div class="note">
    <h3>Output:</h3>
    <p>Note: None of the OTHER CSS border properties (which you will learn more about in the next chapters) will have ANY effect unless the <code>border-style</code> property is set!</p>
</div>

<hr>

<button class="next-module" data-next="quiz9">Take Quiz</button>
</div>`
,

content10: `<div>
<h1>CSS Border Width</h1>
<h2>Module 10</h2>
<hr>

<div class="definition">
    <p>The <code>border-width</code> property in CSS specifies how thick or thin each side of the border will be.</p>
</div>

<hr>

<div class="border-width-units">
    <h3>Units of Measurement:</h3>
    <p>You can set the width in different units, such as:</p>
    <ul>
        <li><strong>px</strong> (pixels)</li>
        <li><strong>pt</strong> (points)</li>
        <li><strong>cm</strong> (centimeters)</li>
        <li><strong>em</strong> (relative to font size)</li>
    </ul>
    <p>Or, if you prefer simpler predefined values, you can choose between:</p>
    <ul>
        <li><strong>thin</strong></li>
        <li><strong>medium</strong></li>
        <li><strong>thick</strong></li>
    </ul>
</div>

<hr>

<div class="border-examples">
    <h3>Example of Different Border Widths:</h3>
    <p>Check out the different border widths defined below:</p>
    <p class="one">5px border-width</p>
    <p class="two">Medium border-width</p>
    <p class="three">2px dotted border-width</p>
    <p class="four">Thick dotted border-width</p>

    <style>
        p.one {
            border-style: solid;
            border-width: 5px;
        }
        p.two {
            border-style: solid;
            border-width: medium;
        }
        p.three {
            border-style: dotted;
            border-width: 2px;
        }
        p.four {
            border-style: dotted;
            border-width: thick;
        }
    </style>

    <hr>
    <div class="border-output">
        <h3>Output:</h3>
        <p>5px: Border has a width of 5 pixels.</p>
        <p>medium: The browser chooses a standard medium thickness.</p>
        <p>2px: Border has a width of 2 pixels and is dotted.</p>
        <p>thick: This gives a thicker-than-normal border.</p>
    </div>
</div>

<hr>

<div class="specific-sides">
    <h3>Border Width for Specific Sides:</h3>
    <p>Sometimes, you may want different borders for the top, right, bottom, and left sides. You can declare up to 4 values:</p>
    <ul>
        <li><strong>1 value:</strong> Applies to all sides.</li>
        <li><strong>2 values:</strong> The first applies to top & bottom, the second applies to left & right.</li>
        <li><strong>4 values:</strong> Apply to top, right, bottom, and left respectively.</li>
    </ul>

    <h4>Example of Border Width for Different Sides:</h4>
    <p class="one">This has 15px top/bottom and 40px left/right borders.</p>
    <p class="two">This has 40px top/bottom and 10px left/right borders.</p>
    <p class="three">This has 50px top, 20px right, 10px bottom, and 70px left borders.</p>

    <style>
        p {
            padding: 20px; /* More padding to make the borders stand out */
            margin-bottom: 20px; /* More space between paragraphs */
            font-size: 18px; /* Larger font for easy reading */
            text-align: center; /* Center text for clear viewing */
            color: white; /* Text color to contrast with background */
        }
        p.one {
            border-style: solid;
            border-width: 15px 40px; /* 15px top/bottom, 40px left/right */
            border-color: red;
            background-color: crimson; /* Strong background to contrast the border */
        }
        p.two {
            border-style: solid;
            border-width: 40px 10px; /* 40px top/bottom, 10px left/right */
            border-color: blue;
            background-color: navy; /* Strong background to contrast the border */
        }
        p.three {
            border-style: solid;
            border-width: 50px 20px 10px 70px; /* 50px top, 20px right, 10px bottom, 70px left */
            border-color: green;
            background-color: darkgreen; /* Strong background to contrast the border */
        }
    </style>

    <hr>
</div>

<hr>

<button class="next-module" data-next="quiz10">Take Quiz</button>
</div>`

,

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
            <div class="quiz-card" onclick="selectQuizAnswer(4, 'Inside the body')">Inside the body</div>
            <div class="quiz-card" onclick="selectQuizAnswer(4, 'Inside the footer')">Inside the footer</div>
            <div class="quiz-card" onclick="selectQuizAnswer(4, 'Inside the style tag, in the head section')">Inside the style tag, in the head section</div>
        </div>
        <div id="selected-answer-4" class="selected-answer-container"></div>
        <button class="next-module" data-next="content5">Next Module</button>
    `,
    quiz5: `
    <h1>QUIZ # 5</h1>
        <h2>Which of the following is a valid CSS comment?</h2>
        <div class="quiz-options">
            <div class="quiz-card" onclick="selectQuizAnswer(5, '// This is a comment //')">// This is a comment //</div>
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
    <h2>What does the background-image CSS property do?</h2>
    <div class="quiz-options">
        <div class="quiz-card" onclick="selectQuizAnswer(8, 'Makes the text bold.')">A) Makes the text bold.</div>
        <div class="quiz-card" onclick="selectQuizAnswer(8, 'Specifies an image to use as the background of an element.')">B) Specifies an image to use as the background of an element.</div>
        <div class="quiz-card" onclick="selectQuizAnswer(8, 'Adds an icon to an element.')">C) Adds an icon to an element.</div>
        </div>
    <div id="selected-answer-8" class="selected-answer-container"></div>
    <button class="next-module" data-next="content9">Next Module</button>
    `,
    quiz9: `
    <h1>QUIZ # 9</h1>
    <h2>What CSS property do you use to define the type of border around an element?</h2>
    <div class="quiz-options">
        <div class="quiz-card" onclick="selectQuizAnswer(9, 'border-color')">A) border-color</div>
        <div class="quiz-card" onclick="selectQuizAnswer(9, 'border-style')">B) border-style</div>
        <div class="quiz-card" onclick="selectQuizAnswer(9, 'border-width')">C) border-width</div>
    </div>
    <div id="selected-answer-9" class="selected-answer-container"></div>
    <button class="next-module" data-next="content10">Next Module</button>
    `,
    quiz10: `
    <h1>QUIZ # 10</h1>
    <h2>Which property is used to set the thickness of a border?</h2>
    <div class="quiz-options">
        <div class="quiz-card" onclick="selectQuizAnswer(10, 'border-style')">A) border-style</div>
        <div class="quiz-card" onclick="selectQuizAnswer(10, 'border-width')">B) border-width</div>
        <div class="quiz-card" onclick="selectQuizAnswer(10, 'border-color')">C) border-color</div>
    </div>
    <div id="selected-answer-10" class="selected-answer-container"></div>
    <button class="next-module" data-next="content11">Next Module</button>
    `,
};

const correctAnswers = {
    1: 'The appearance of the webpage will change based on the stylesheet used',
    2: 'Points to the HTML element you want to style',
    3: 'Code after double slashes // or between /* and */ is treated as a comment.',
    4: 'Inside the style tag, in the head section',
    5: '/* This is a comment */',
    6: 'background-color:blue;',
    7: 'div { background-color: green; opacity: 0.3; }',
    8: 'Specifies an image to use as the background of an element',
    9: 'border-style',
    10: 'border-width',
};

const assessmentQuestions = [
    { question: "What does CSS stand for?", choices: ["A) Creative Style Sheets", "B) Cascading Style Sheets", "C) Computer Style Sheets"], selectedChoice: null, correctAnswer: "B) Cascading Style Sheets" },
    { question: "What is the primary function of CSS?", choices: ["A) To create HTML elements", "B) To describe how HTML elements should be displayed", "C) To add interactivity to HTML elements"], selectedChoice: null, correctAnswer: "B) To describe how HTML elements should be displayed" },
    { question: "A CSS rule consists of which two main parts?", choices: ["A) Selector and declaration block", "B) CSS file and HTML file", "C) Font and color"], selectedChoice: null, correctAnswer: "A) Selector and declaration block" },
    { question: "How do you separate multiple CSS declarations inside a declaration block?", choices: ["A) Colon (:)", "B) Comma (,)", "C) Semicolon (;)"], selectedChoice: null, correctAnswer: "C) Semicolon (;)" },
    { question: "Where should an external CSS file be linked inside an HTML document?", choices: ["A) Inside the body section", "B) Inside the head section", "C) Inside the footer section"], selectedChoice: null, correctAnswer: "B) Inside the head section" },
    { question: "Which of these is the correct way to apply an inline CSS style to an HTML h1 element?", choices: ["A) &lt;h1 style=color: red;&gt;Hello&lt;/h1&gt;", "B) &lt;h1 class=color: red;&gt;Hello&lt;/h1&gt;", "C) &lt;h1 link=color:red;&gt;Hello&lt;/h1&gt;"], selectedChoice: null, correctAnswer: "A) <h1 style=\"color: red;\">Hello</h1>" },
    { question: "What is the correct syntax for writing comments in a CSS file?", choices: ["A) !-- This is a comment --", "B) /* This is a comment */", "C) // This is a comment"], selectedChoice: null, correctAnswer: "B) /* This is a comment */" },
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
